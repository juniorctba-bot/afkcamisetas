/**
 * Gerador de Orçamentos - AFK Camisetas
 * Página completa para criar orçamentos em PDF
 */
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Plus,
  Trash2,
  FileText,
  Save,
  FolderOpen,
  RefreshCw,
  Download,
  Pencil,
  LogOut,
  History,
  Settings,
} from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

// Tipos
interface Item {
  id: string;
  produto: string;
  descricao: string;
  quantidade: number;
  valorUnitario: number;
  subtotal: number;
}

interface OrcamentoData {
  origem: string;
  numero: string;
  validade: number;
  prazoProdução: number;
  clienteNome: string;
  clienteTelefone: string;
  tipoEntrega: string;
  regiaoEntrega: string;
  valorFrete: number;
  tipoDesconto: string;
  valorDesconto: number;
  observacoes: string;
  itens: Item[];
}

// Valores iniciais
const initialOrcamento: OrcamentoData = {
  origem: "whatsapp",
  numero: "",
  validade: 5,
  prazoProdução: 5,
  clienteNome: "",
  clienteTelefone: "",
  tipoEntrega: "retirada",
  regiaoEntrega: "",
  valorFrete: 0,
  tipoDesconto: "percentual",
  valorDesconto: 0,
  observacoes: "",
  itens: [],
};

const origens = [
  { value: "whatsapp", label: "WhatsApp", codigo: "W" },
  { value: "site", label: "Site", codigo: "S" },
  { value: "contato_pessoal", label: "Contato Pessoal", codigo: "C" },
  { value: "mercado_livre", label: "Mercado Livre", codigo: "M" },
];

export default function GeradorOrcamentos() {
  const [, setLocation] = useLocation();
  const [orcamento, setOrcamento] = useState<OrcamentoData>(initialOrcamento);
  const [editingRascunhoId, setEditingRascunhoId] = useState<number | null>(null);
  const [showRascunhos, setShowRascunhos] = useState(false);
  const [showHistorico, setShowHistorico] = useState(false);
  const [showConfiguracoes, setShowConfiguracoes] = useState(false);
  const [gerando, setGerando] = useState(false);

  // Verificar autenticação
  useEffect(() => {
    const auth = localStorage.getItem("afk_admin_auth");
    const authTime = localStorage.getItem("afk_admin_auth_time");
    
    // Sessão expira em 24 horas
    if (!auth || !authTime || Date.now() - parseInt(authTime) > 24 * 60 * 60 * 1000) {
      localStorage.removeItem("afk_admin_auth");
      localStorage.removeItem("afk_admin_auth_time");
      setLocation("/admin");
    }
  }, [setLocation]);

  // Queries tRPC
  const { data: rascunhos, refetch: refetchRascunhos } = trpc.rascunho.listar.useQuery();
  const { data: contadorRascunhos } = trpc.rascunho.contar.useQuery();
  const { data: regioesFrete } = trpc.frete.listar.useQuery();
  const { data: historico, refetch: refetchHistorico } = trpc.orcamento.listar.useQuery({ limite: 50 });

  // Mutations
  const gerarNumeroMutation = trpc.orcamento.gerarNumero.useMutation();
  const criarOrcamentoMutation = trpc.orcamento.criar.useMutation();
  const salvarRascunhoMutation = trpc.rascunho.salvar.useMutation();
  const atualizarRascunhoMutation = trpc.rascunho.atualizar.useMutation();
  const excluirRascunhoMutation = trpc.rascunho.excluir.useMutation();

  // Cálculos
  const subtotal = useMemo(() => {
    return orcamento.itens.reduce((acc, item) => acc + item.subtotal, 0);
  }, [orcamento.itens]);

  const desconto = useMemo(() => {
    if (orcamento.tipoDesconto === "percentual") {
      return (subtotal * orcamento.valorDesconto) / 100;
    }
    return orcamento.valorDesconto;
  }, [subtotal, orcamento.tipoDesconto, orcamento.valorDesconto]);

  const total = useMemo(() => {
    return subtotal - desconto + (orcamento.tipoEntrega === "entrega" ? orcamento.valorFrete : 0);
  }, [subtotal, desconto, orcamento.tipoEntrega, orcamento.valorFrete]);

  // Handlers
  const handleChange = (field: keyof OrcamentoData, value: any) => {
    setOrcamento((prev) => ({ ...prev, [field]: value }));
  };

  const addItem = () => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      produto: "",
      descricao: "",
      quantidade: 1,
      valorUnitario: 0,
      subtotal: 0,
    };
    setOrcamento((prev) => ({ ...prev, itens: [...prev.itens, newItem] }));
  };

  const updateItem = (id: string, field: keyof Item, value: any) => {
    setOrcamento((prev) => ({
      ...prev,
      itens: prev.itens.map((item) => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: value };
        if (field === "quantidade" || field === "valorUnitario") {
          updated.subtotal = updated.quantidade * updated.valorUnitario;
        }
        return updated;
      }),
    }));
  };

  const removeItem = (id: string) => {
    setOrcamento((prev) => ({
      ...prev,
      itens: prev.itens.filter((item) => item.id !== id),
    }));
  };

  const handleNovoOrcamento = () => {
    setOrcamento(initialOrcamento);
    setEditingRascunhoId(null);
    toast.success("Novo orçamento iniciado");
  };

  const handleSalvarRascunho = async () => {
    try {
      const dados = { ...orcamento, subtotal, desconto, total };
      
      if (editingRascunhoId) {
        await atualizarRascunhoMutation.mutateAsync({
          id: editingRascunhoId,
          dados: {
            nome: orcamento.clienteNome || "Sem nome",
            numero: orcamento.numero,
            dados,
          },
        });
        toast.success("Rascunho atualizado!");
      } else {
        const rascunho = await salvarRascunhoMutation.mutateAsync({
          nome: orcamento.clienteNome || "Sem nome",
          numero: orcamento.numero,
          dados,
        });
        setEditingRascunhoId(rascunho.id);
        toast.success("Rascunho salvo!");
      }
      
      refetchRascunhos();
    } catch (error) {
      toast.error("Erro ao salvar rascunho");
      console.error(error);
    }
  };

  const handleCarregarRascunho = (rascunho: any) => {
    const dados = rascunho.dados as OrcamentoData;
    setOrcamento(dados);
    setEditingRascunhoId(rascunho.id);
    setShowRascunhos(false);
    toast.success("Rascunho carregado");
  };

  const handleExcluirRascunho = async (id: number) => {
    try {
      await excluirRascunhoMutation.mutateAsync({ id });
      if (editingRascunhoId === id) {
        setEditingRascunhoId(null);
      }
      refetchRascunhos();
      toast.success("Rascunho excluído");
    } catch (error) {
      toast.error("Erro ao excluir rascunho");
    }
  };

  const handleGerarPDF = async () => {
    if (!orcamento.clienteNome) {
      toast.error("Informe o nome do cliente");
      return;
    }
    if (orcamento.itens.length === 0) {
      toast.error("Adicione pelo menos um item");
      return;
    }

    setGerando(true);
    try {
      // Gerar número se não existir
      let numero = orcamento.numero;
      if (!numero) {
        numero = await gerarNumeroMutation.mutateAsync({ origem: orcamento.origem });
        setOrcamento((prev) => ({ ...prev, numero }));
      }

      // Salvar orçamento no banco
      const orcamentoSalvo = await criarOrcamentoMutation.mutateAsync({
        orcamento: {
          numero,
          origem: orcamento.origem as any,
          validade: orcamento.validade,
          prazoProdução: orcamento.prazoProdução,
          clienteNome: orcamento.clienteNome,
          clienteTelefone: orcamento.clienteTelefone,
          tipoEntrega: orcamento.tipoEntrega as any,
          valorFrete: orcamento.valorFrete.toString(),
          regiaoEntrega: orcamento.regiaoEntrega,
          tipoDesconto: orcamento.tipoDesconto as any,
          valorDesconto: orcamento.valorDesconto.toString(),
          subtotal: subtotal.toString(),
          total: total.toString(),
          observacoes: orcamento.observacoes,
          status: "emitido",
        },
        itens: orcamento.itens.map((item) => ({
          produto: item.produto,
          descricao: item.descricao,
          quantidade: item.quantidade,
          valorUnitario: item.valorUnitario.toString(),
          subtotal: item.subtotal.toString(),
        })),
      });

      // Gerar PDF com link de aprovação
      await gerarPDF(numero, orcamentoSalvo.tokenAprovacao || '');
      
      refetchHistorico();
      toast.success(`Orçamento ${numero} gerado com sucesso!`);
      
      // Limpar rascunho se estava editando
      if (editingRascunhoId) {
        await excluirRascunhoMutation.mutateAsync({ id: editingRascunhoId });
        setEditingRascunhoId(null);
        refetchRascunhos();
      }
    } catch (error) {
      toast.error("Erro ao gerar orçamento");
      console.error(error);
    } finally {
      setGerando(false);
    }
  };

  const gerarPDF = async (numero: string, tokenAprovacao: string = '') => {
    // Gerar link de aprovação
    const linkAprovacao = tokenAprovacao ? `${window.location.origin}/aprovar/${tokenAprovacao}` : '';
    // Criar conteúdo do PDF usando uma nova janela
    const dataEmissao = new Date().toLocaleDateString("pt-BR");
    const dataValidade = new Date(Date.now() + orcamento.validade * 24 * 60 * 60 * 1000).toLocaleDateString("pt-BR");

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Orçamento ${numero}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; font-size: 12px; color: #333; padding: 20px; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #eee; }
    .logo-container { display: flex; align-items: center; gap: 15px; }
    .logo-img { height: 60px; width: auto; }
    .logo-text { font-size: 24px; font-weight: bold; }
    .logo-text .orcamento { background: linear-gradient(90deg, #FF6B00, #FFB800); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .contato { text-align: right; font-size: 11px; color: #666; }
    .contato p { margin: 3px 0; }
    .section { margin-bottom: 20px; }
    .section-title { font-size: 14px; font-weight: bold; color: #333; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
    .section-title::before { content: ''; width: 4px; height: 16px; background: #0066FF; }
    .info-row { display: flex; gap: 20px; margin-bottom: 5px; }
    .info-label { font-weight: bold; color: #666; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th { background: #f5f5f5; padding: 10px; text-align: left; border-bottom: 2px solid #ddd; }
    td { padding: 10px; border-bottom: 1px solid #eee; }
    .text-right { text-align: right; }
    .total-row { font-weight: bold; font-size: 16px; }
    .total-row td { border-top: 2px solid #333; padding-top: 15px; }
    .total-value { color: #FF0000; }
    .condicoes { background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 20px; }
    .condicoes h3 { color: #0066FF; margin-bottom: 10px; }
    .condicoes ul { margin-left: 20px; }
    .condicoes li { margin: 5px 0; }
    .observacoes { background: #FFF9E6; border-left: 4px solid #FFB800; padding: 15px; margin-top: 20px; }
    .observacoes h3 { color: #FF6B00; margin-bottom: 10px; }
    .obs-importantes { background: #FFF3CD; border-left: 4px solid #FFB800; padding: 15px; margin-top: 20px; }
    .obs-importantes h3 { color: #856404; margin-bottom: 10px; }
    .obs-importantes ol { margin-left: 20px; }
    .obs-importantes li { margin: 5px 0; }
    .aprovacao { margin-top: 30px; border: 1px solid #ddd; padding: 20px; }
    .aprovacao h3 { color: #28a745; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }
    .assinatura-row { display: flex; gap: 30px; margin-top: 20px; }
    .assinatura-field { flex: 1; }
    .assinatura-field label { font-weight: bold; display: block; margin-bottom: 5px; }
    .assinatura-line { border-bottom: 1px solid #333; height: 30px; }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-container">
      <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029753860/stDkTTPqcknnbUkH.png" alt="AFK Camisetas" class="logo-img" />
      <div class="logo-text">
        <span class="orcamento">ORÇAMENTO</span>
      </div>
    </div>
    <div class="contato">
      <p>📞 +55 41 98738-6527</p>
      <p>✉️ afkcamisetas@gmail.com</p>
      <p>🌐 www.afkcamisetas.com.br</p>
    </div>
  </div>

  <div class="section">
    <div class="section-title">ORÇAMENTO Nº: ${numero}</div>
    <div class="info-row">
      <p><span class="info-label">Data de Emissão:</span> ${dataEmissao}</p>
      <p><span class="info-label">Validade:</span> ${orcamento.validade} dias</p>
    </div>
  </div>

  <div class="section">
    <div class="section-title">👤 DADOS DO CLIENTE</div>
    <p><span class="info-label">Nome/Razão Social:</span> ${orcamento.clienteNome}</p>
    ${orcamento.clienteTelefone ? `<p><span class="info-label">Telefone:</span> ${orcamento.clienteTelefone}</p>` : ''}
  </div>

  <div class="section">
    <div class="section-title">📦 DESCRIÇÃO DOS PRODUTOS</div>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Produto</th>
          <th>Descrição/Especificações</th>
          <th class="text-right">Qtd</th>
          <th class="text-right">Valor Unit.</th>
          <th class="text-right">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        ${orcamento.itens.map((item, index) => `
          <tr>
            <td>${String(index + 1).padStart(2, '0')}</td>
            <td>${item.produto}</td>
            <td>${item.descricao || '-'}</td>
            <td class="text-right">${item.quantidade}</td>
            <td class="text-right">R$ ${item.valorUnitario.toFixed(2).replace('.', ',')}</td>
            <td class="text-right">R$ ${item.subtotal.toFixed(2).replace('.', ',')}</td>
          </tr>
        `).join('')}
        <tr>
          <td colspan="5" class="text-right"><strong>Subtotal</strong></td>
          <td class="text-right"><strong>R$ ${subtotal.toFixed(2).replace('.', ',')}</strong></td>
        </tr>
        ${desconto > 0 ? `
          <tr>
            <td colspan="5" class="text-right">Desconto ${orcamento.tipoDesconto === 'percentual' ? `(${orcamento.valorDesconto}%)` : ''}</td>
            <td class="text-right">- R$ ${desconto.toFixed(2).replace('.', ',')}</td>
          </tr>
        ` : ''}
        ${orcamento.tipoEntrega === 'entrega' && orcamento.valorFrete > 0 ? `
          <tr>
            <td colspan="5" class="text-right">Frete (${orcamento.regiaoEntrega || 'Entrega'})</td>
            <td class="text-right">R$ ${orcamento.valorFrete.toFixed(2).replace('.', ',')}</td>
          </tr>
        ` : ''}
        <tr class="total-row">
          <td colspan="5" class="text-right">TOTAL</td>
          <td class="text-right total-value">R$ ${total.toFixed(2).replace('.', ',')}</td>
        </tr>
        <tr style="background-color: #FFF3E0;">
          <td colspan="5" class="text-right" style="color: #E65100; font-weight: bold;">SINAL PARA INÍCIO DA PRODUÇÃO (30%)*</td>
          <td class="text-right" style="color: #E65100; font-weight: bold;">R$ ${(total * 0.3).toFixed(2).replace('.', ',')}</td>
        </tr>
      </tbody>
    </table>
    <p style="font-size: 11px; color: #666; margin-top: 5px;">* A produção só será iniciada após o pagamento do sinal de 30% do valor total.</p>
  </div>

  <div class="condicoes">
    <h3>💼 CONDIÇÕES COMERCIAIS</h3>
    <p><strong>Formas de Pagamento:</strong></p>
    <ul>
      <li>✓ <strong>À vista:</strong> (PIX, Dinheiro, Transferência)</li>
      <li>✓ <strong>Parcelado:</strong> Até 3x com juros (consultar taxas) – Via link do Mercado Pago</li>
    </ul>
    <p style="margin-top: 10px;"><strong>Prazo de Produção:</strong></p>
    <ul>
      <li>✓ ${orcamento.prazoProdução} dias úteis <em>(Prazo inicia após aprovação da arte e confirmação do pagamento do sinal.)</em></li>
    </ul>
    <p style="margin-top: 10px;"><strong>Sinal/Entrada:</strong></p>
    <ul>
      <li>✓ <strong>30% no fechamento do pedido (R$ ${(total * 0.3).toFixed(2).replace('.', ',')}) + 70% na entrega/retirada (R$ ${(total * 0.7).toFixed(2).replace('.', ',')})</strong></li>
    </ul>
    <p style="margin-top: 10px;"><strong>Entrega:</strong></p>
    <ul>
      <li>✓ <strong>${orcamento.tipoEntrega === 'retirada' ? 'Retirada pelo Cliente' : `Entrega: Responsabilidade da AFK${orcamento.regiaoEntrega ? ` - ${orcamento.regiaoEntrega}` : ''}`}</strong></li>
    </ul>
  </div>

  ${orcamento.observacoes ? `
    <div class="observacoes">
      <h3>📝 OBSERVAÇÕES DO ORÇAMENTO</h3>
      <p>${orcamento.observacoes.replace(/\n/g, '<br>')}</p>
    </div>
  ` : ''}

  <div class="obs-importantes">
    <h3>⚠️ OBSERVAÇÕES IMPORTANTES</h3>
    <ol>
      <li><strong>Arte/Layout:</strong> O cliente deve fornecer a arte em alta resolução (mínimo 300dpi) ou solicitar criação (valores à parte).</li>
      <li><strong>Aprovação:</strong> Após aprovação da arte, não serão aceitas alterações sem custo adicional.</li>
      <li><strong>Cores:</strong> Pequenas variações de cor podem ocorrer devido ao processo de impressão.</li>
      <li><strong>Amostras:</strong> Disponível mediante pagamento (valor descontado no pedido final).</li>
      <li><strong>Cancelamento:</strong> Após início da produção, não há possibilidade de cancelamento.</li>
      <li><strong>Garantia:</strong> Defeitos de fabricação serão corrigidos sem custo adicional.</li>
    </ol>
  </div>

  ${linkAprovacao ? `
  <div class="aprovacao-online" style="background: linear-gradient(135deg, #FF6B00 0%, #FFB800 100%); color: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
    <h3 style="margin-bottom: 10px; font-size: 18px;">📱 APROVAÇÃO ONLINE</h3>
    <p style="margin-bottom: 15px;">Aprove este orçamento diretamente pelo link abaixo:</p>
    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
      <a href="${linkAprovacao}" style="color: #FF6B00; font-weight: bold; word-break: break-all; font-size: 14px;">${linkAprovacao}</a>
    </div>
    <p style="font-size: 12px; opacity: 0.9;">Ou escaneie o QR Code ao lado para aprovar pelo celular</p>
  </div>
  ` : ''}

  <div class="aprovacao">
    <h3>✅ APROVAÇÃO MANUAL</h3>
    <p style="font-size: 11px; color: #666; margin-bottom: 10px;">Caso prefira aprovar manualmente, preencha os campos abaixo:</p>
    <div class="assinatura-row">
      <div class="assinatura-field">
        <label>NOME:</label>
        <div class="assinatura-line"></div>
      </div>
      <div class="assinatura-field">
        <label>CPF:</label>
        <div class="assinatura-line"></div>
      </div>
      <div class="assinatura-field">
        <label>DATA:</label>
        <div class="assinatura-line"></div>
      </div>
    </div>
  </div>

  <script>
    window.onload = function() {
      window.print();
    }
  </script>
</body>
</html>
    `;

    // Abrir em nova janela para impressão/PDF
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(html);
      printWindow.document.close();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("afk_admin_auth");
    localStorage.removeItem("afk_admin_auth_time");
    setLocation("/admin");
  };

  const handleSelectFrete = (regiao: string) => {
    const freteInfo = regioesFrete?.find((f) => f.regiao === regiao);
    if (freteInfo) {
      setOrcamento((prev) => ({
        ...prev,
        regiaoEntrega: regiao,
        valorFrete: parseFloat(freteInfo.valor),
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/images/logo_afk_final.png" 
                alt="AFK" 
                className="h-10"
              />
              <h1 className="text-xl font-bold text-gray-800">
                Gerador de Orçamentos
              </h1>
              {editingRascunhoId && (
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">
                  <Pencil className="w-3 h-3 mr-1" />
                  Editando rascunho
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleNovoOrcamento}>
                <RefreshCw className="w-4 h-4 mr-1" />
                Novo
              </Button>
              
              <Button variant="outline" size="sm" onClick={handleSalvarRascunho}>
                <Save className="w-4 h-4 mr-1" />
                Salvar Rascunho
              </Button>

              <Dialog open={showRascunhos} onOpenChange={setShowRascunhos}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="relative">
                    <FolderOpen className="w-4 h-4 mr-1" />
                    Rascunhos
                    {(contadorRascunhos ?? 0) > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-blue-500">
                        {contadorRascunhos}
                      </Badge>
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Rascunhos Salvos</DialogTitle>
                    <DialogDescription>
                      Selecione um rascunho para continuar editando
                    </DialogDescription>
                  </DialogHeader>
                  <div className="max-h-96 overflow-y-auto">
                    {rascunhos && rascunhos.length > 0 ? (
                      <div className="space-y-2">
                        {rascunhos.map((r) => (
                          <div
                            key={r.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                          >
                            <div>
                              <p className="font-medium">{r.nome || "Sem nome"}</p>
                              <p className="text-sm text-gray-500">
                                {r.numero || "Sem número"} • {new Date(r.updatedAt).toLocaleDateString("pt-BR")}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleCarregarRascunho(r)}
                              >
                                <Pencil className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleExcluirRascunho(r.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-gray-500 py-8">
                        Nenhum rascunho salvo
                      </p>
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={showHistorico} onOpenChange={setShowHistorico}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <History className="w-4 h-4 mr-1" />
                    Histórico
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Histórico de Orçamentos</DialogTitle>
                    <DialogDescription>
                      Orçamentos emitidos recentemente
                    </DialogDescription>
                  </DialogHeader>
                  <div className="max-h-96 overflow-y-auto">
                    {historico && historico.length > 0 ? (
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Número</th>
                            <th className="text-left p-2">Cliente</th>
                            <th className="text-left p-2">Data</th>
                            <th className="text-right p-2">Total</th>
                            <th className="text-center p-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {historico.map((o) => (
                            <tr key={o.id} className="border-b hover:bg-gray-50">
                              <td className="p-2 font-mono">{o.numero}</td>
                              <td className="p-2">{o.clienteNome}</td>
                              <td className="p-2">{new Date(o.createdAt).toLocaleDateString("pt-BR")}</td>
                              <td className="p-2 text-right">R$ {parseFloat(o.total).toFixed(2).replace('.', ',')}</td>
                              <td className="p-2 text-center">
                                <Badge variant={o.status === "emitido" ? "default" : "secondary"}>
                                  {o.status}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-center text-gray-500 py-8">
                        Nenhum orçamento emitido
                      </p>
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulário Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informações do Orçamento */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                Informações do Orçamento
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Origem do Cliente</Label>
                  <Select
                    value={orcamento.origem}
                    onValueChange={(v) => handleChange("origem", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {origens.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Número</Label>
                  <Input
                    value={orcamento.numero}
                    onChange={(e) => handleChange("numero", e.target.value)}
                    placeholder="Gerado automaticamente"
                    className="font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Validade (dias)</Label>
                  <Input
                    type="number"
                    value={orcamento.validade}
                    onChange={(e) => handleChange("validade", parseInt(e.target.value) || 5)}
                    min={1}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Prazo Produção (dias úteis)</Label>
                  <Input
                    type="number"
                    value={orcamento.prazoProdução}
                    onChange={(e) => handleChange("prazoProdução", parseInt(e.target.value) || 5)}
                    min={1}
                  />
                </div>
              </div>
            </div>

            {/* Dados do Cliente */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">👤 Dados do Cliente</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nome / Razão Social *</Label>
                  <Input
                    value={orcamento.clienteNome}
                    onChange={(e) => handleChange("clienteNome", e.target.value)}
                    placeholder="Nome do cliente"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Telefone / WhatsApp</Label>
                  <Input
                    value={orcamento.clienteTelefone}
                    onChange={(e) => handleChange("clienteTelefone", e.target.value)}
                    placeholder="(41) 99999-9999"
                  />
                </div>
              </div>
            </div>

            {/* Itens do Orçamento */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">📦 Itens do Orçamento</h2>
                <Button size="sm" onClick={addItem}>
                  <Plus className="w-4 h-4 mr-1" />
                  Adicionar Item
                </Button>
              </div>

              {orcamento.itens.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>Nenhum item adicionado</p>
                  <Button variant="outline" className="mt-2" onClick={addItem}>
                    <Plus className="w-4 h-4 mr-1" />
                    Adicionar primeiro item
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {orcamento.itens.map((item, index) => (
                    <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-4">
                        <span className="text-sm font-bold text-gray-400 mt-2">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-3">
                          <div className="md:col-span-2">
                            <Label className="text-xs">Produto</Label>
                            <Input
                              value={item.produto}
                              onChange={(e) => updateItem(item.id, "produto", e.target.value)}
                              placeholder="Ex: Camiseta"
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <Label className="text-xs">Descrição</Label>
                            <Input
                              value={item.descricao}
                              onChange={(e) => updateItem(item.id, "descricao", e.target.value)}
                              placeholder="Ex: 100% algodão, cor preta"
                            />
                          </div>
                          
                          <div>
                            <Label className="text-xs">Qtd</Label>
                            <Input
                              type="number"
                              value={item.quantidade}
                              onChange={(e) => updateItem(item.id, "quantidade", parseInt(e.target.value) || 1)}
                              min={1}
                            />
                          </div>
                          
                          <div>
                            <Label className="text-xs">Valor Unit.</Label>
                            <Input
                              type="number"
                              step="0.01"
                              value={item.valorUnitario}
                              onChange={(e) => updateItem(item.id, "valorUnitario", parseFloat(e.target.value) || 0)}
                              min={0}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          <span className="text-sm font-semibold">
                            R$ {item.subtotal.toFixed(2).replace(".", ",")}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-red-500 hover:text-red-700 h-8 w-8 p-0"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Entrega e Desconto */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">🚚 Entrega e Desconto</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tipo de Entrega */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Tipo de Entrega</Label>
                    <Select
                      value={orcamento.tipoEntrega}
                      onValueChange={(v) => handleChange("tipoEntrega", v)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retirada">Retirada pelo Cliente</SelectItem>
                        <SelectItem value="entrega">Entrega pela AFK</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {orcamento.tipoEntrega === "entrega" && (
                    <>
                      <div className="space-y-2">
                        <Label>Região de Entrega</Label>
                        <Select
                          value={orcamento.regiaoEntrega}
                          onValueChange={handleSelectFrete}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a região" />
                          </SelectTrigger>
                          <SelectContent>
                            {regioesFrete?.map((f) => (
                              <SelectItem key={f.id} value={f.regiao}>
                                {f.regiao} - R$ {parseFloat(f.valor).toFixed(2).replace(".", ",")}
                              </SelectItem>
                            ))}
                            <SelectItem value="outro">Outro (informar valor)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Valor do Frete (R$)</Label>
                        <Input
                          type="number"
                          step="0.01"
                          value={orcamento.valorFrete}
                          onChange={(e) => handleChange("valorFrete", parseFloat(e.target.value) || 0)}
                          min={0}
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Desconto */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Tipo de Desconto</Label>
                    <Select
                      value={orcamento.tipoDesconto}
                      onValueChange={(v) => handleChange("tipoDesconto", v)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentual">Porcentagem (%)</SelectItem>
                        <SelectItem value="valor">Valor Fixo (R$)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>
                      {orcamento.tipoDesconto === "percentual" ? "Desconto (%)" : "Desconto (R$)"}
                    </Label>
                    <Input
                      type="number"
                      step={orcamento.tipoDesconto === "percentual" ? "1" : "0.01"}
                      value={orcamento.valorDesconto}
                      onChange={(e) => handleChange("valorDesconto", parseFloat(e.target.value) || 0)}
                      min={0}
                      max={orcamento.tipoDesconto === "percentual" ? 100 : undefined}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Observações */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">📝 Observações Personalizadas</h2>
              <Textarea
                value={orcamento.observacoes}
                onChange={(e) => handleChange("observacoes", e.target.value)}
                placeholder="Notas específicas para este orçamento..."
                rows={4}
              />
            </div>
          </div>

          {/* Resumo */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">💰 Resumo</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({orcamento.itens.length} itens)</span>
                  <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>

                {desconto > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>
                      Desconto {orcamento.tipoDesconto === "percentual" ? `(${orcamento.valorDesconto}%)` : ""}
                    </span>
                    <span>- R$ {desconto.toFixed(2).replace(".", ",")}</span>
                  </div>
                )}

                {orcamento.tipoEntrega === "entrega" && orcamento.valorFrete > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Frete</span>
                    <span>R$ {orcamento.valorFrete.toFixed(2).replace(".", ",")}</span>
                  </div>
                )}

                <Separator />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-semibold text-orange-600">
                  <span>Sinal (30%)*</span>
                  <span>R$ {(total * 0.3).toFixed(2).replace(".", ",")}</span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  * A produção só será iniciada após o pagamento do sinal de 30% do valor total.
                </p>
              </div>

              <Button
                className="w-full mt-6 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
                onClick={handleGerarPDF}
                disabled={gerando || !orcamento.clienteNome || orcamento.itens.length === 0}
              >
                {gerando ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Gerar Orçamento
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-3">
                O PDF será aberto em uma nova janela para impressão
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
