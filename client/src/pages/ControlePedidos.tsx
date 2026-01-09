import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  Download,
  Search,
  RefreshCw,
  FileSpreadsheet,
} from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface ControlePedido {
  id: number;
  data: string | Date;
  cliente: string;
  telefone: string | null;
  item: string;
  quantidade: string | null;
  tipoImpressao: string | null;
  propriaTerceirizada: "Própria" | "Terceirizada" | null;
  insumo1: string | null;
  insumo2: string | null;
  insumo3: string | null;
  materialTeste: string | null;
  previsaoEntrega: string | Date | null;
  valorNegociado: string | null;
  formaPagamento: string | null;
  sinal: string | null;
  valorFinal: string | null;
  dataPagamento: string | Date | null;
  observacoesFinais: string | null;
  status: "pendente" | "em_producao" | "finalizado" | "entregue" | "cancelado" | null;
}

const statusConfig: Record<string, { label: string; color: string }> = {
  pendente: { label: "Pendente", color: "bg-yellow-100 text-yellow-800" },
  em_producao: { label: "Em Produção", color: "bg-blue-100 text-blue-800" },
  finalizado: { label: "Finalizado", color: "bg-green-100 text-green-800" },
  entregue: { label: "Entregue", color: "bg-purple-100 text-purple-800" },
  cancelado: { label: "Cancelado", color: "bg-red-100 text-red-800" },
};

const formaPagamentoOpcoes = [
  "PIX",
  "Dinheiro",
  "Cartão de Crédito",
  "Cartão de Débito",
  "Parcelado em 2X",
  "Parcelado em 3X",
  "Parcelado em 4X",
  "Parcelado em 5X",
  "Parcelado em 6X",
  "Boleto",
  "Transferência",
];

const tipoImpressaoOpcoes = [
  "Sublimada",
  "Serigrafia",
  "DTF",
  "Bordado",
  "Vinil",
  "Transfer",
  "Laser",
  "UV",
];

export default function ControlePedidos() {
  const [, setLocation] = useLocation();
  const [busca, setBusca] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("todos");
  const [showModal, setShowModal] = useState(false);
  const [editando, setEditando] = useState<ControlePedido | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    data: new Date().toISOString().split("T")[0],
    cliente: "",
    telefone: "",
    item: "",
    quantidade: "",
    tipoImpressao: "",
    propriaTerceirizada: "Própria" as "Própria" | "Terceirizada",
    insumo1: "",
    insumo2: "",
    insumo3: "",
    materialTeste: "",
    previsaoEntrega: "",
    valorNegociado: "",
    formaPagamento: "",
    sinal: "",
    valorFinal: "",
    dataPagamento: "",
    observacoesFinais: "",
    status: "pendente" as "pendente" | "em_producao" | "finalizado" | "entregue" | "cancelado",
  });

  // Verificar autenticação
  useEffect(() => {
    const isAuth = localStorage.getItem("afk_admin_auth");
    if (!isAuth) {
      setLocation("/admin");
    }
  }, [setLocation]);

  // Queries
  const { data: pedidos, refetch, isLoading } = trpc.controlePedidos.listar.useQuery({
    status: filtroStatus === "todos" ? undefined : filtroStatus,
    busca: busca || undefined,
  });

  // Mutations
  const criarMutation = trpc.controlePedidos.criar.useMutation({
    onSuccess: () => {
      toast.success("Pedido criado com sucesso!");
      refetch();
      setShowModal(false);
      resetForm();
    },
    onError: (error) => {
      toast.error("Erro ao criar pedido: " + error.message);
    },
  });

  const atualizarMutation = trpc.controlePedidos.atualizar.useMutation({
    onSuccess: () => {
      toast.success("Pedido atualizado com sucesso!");
      refetch();
      setShowModal(false);
      setEditando(null);
      resetForm();
    },
    onError: (error) => {
      toast.error("Erro ao atualizar pedido: " + error.message);
    },
  });

  const excluirMutation = trpc.controlePedidos.excluir.useMutation({
    onSuccess: () => {
      toast.success("Pedido excluído com sucesso!");
      refetch();
    },
    onError: (error) => {
      toast.error("Erro ao excluir pedido: " + error.message);
    },
  });

  const resetForm = () => {
    setFormData({
      data: new Date().toISOString().split("T")[0],
      cliente: "",
      telefone: "",
      item: "",
      quantidade: "",
      tipoImpressao: "",
      propriaTerceirizada: "Própria",
      insumo1: "",
      insumo2: "",
      insumo3: "",
      materialTeste: "",
      previsaoEntrega: "",
      valorNegociado: "",
      formaPagamento: "",
      sinal: "",
      valorFinal: "",
      dataPagamento: "",
      observacoesFinais: "",
      status: "pendente",
    });
  };

  const handleEditar = (pedido: ControlePedido) => {
    setEditando(pedido);
    setFormData({
      data: pedido.data ? new Date(pedido.data).toISOString().split("T")[0] : "",
      cliente: pedido.cliente || "",
      telefone: pedido.telefone || "",
      item: pedido.item || "",
      quantidade: pedido.quantidade || "",
      tipoImpressao: pedido.tipoImpressao || "",
      propriaTerceirizada: pedido.propriaTerceirizada || "Própria",
      insumo1: pedido.insumo1 || "",
      insumo2: pedido.insumo2 || "",
      insumo3: pedido.insumo3 || "",
      materialTeste: pedido.materialTeste || "",
      previsaoEntrega: pedido.previsaoEntrega ? new Date(pedido.previsaoEntrega).toISOString().split("T")[0] : "",
      valorNegociado: pedido.valorNegociado || "",
      formaPagamento: pedido.formaPagamento || "",
      sinal: pedido.sinal || "",
      valorFinal: pedido.valorFinal || "",
      dataPagamento: pedido.dataPagamento ? new Date(pedido.dataPagamento).toISOString().split("T")[0] : "",
      observacoesFinais: pedido.observacoesFinais || "",
      status: pedido.status || "pendente",
    });
    setShowModal(true);
  };

  const handleSalvar = () => {
    if (!formData.cliente || !formData.item || !formData.data) {
      toast.error("Preencha os campos obrigatórios: Data, Cliente e Item");
      return;
    }

    if (editando) {
      atualizarMutation.mutate({
        id: editando.id,
        ...formData,
      });
    } else {
      criarMutation.mutate(formData);
    }
  };

  const handleExcluir = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este pedido?")) {
      excluirMutation.mutate({ id });
    }
  };

  const formatarData = (data: string | Date | null) => {
    if (!data) return "-";
    const dateObj = typeof data === "string" ? new Date(data) : data;
    return dateObj.toLocaleDateString("pt-BR");
  };

  const formatarMoeda = (valor: string | null) => {
    if (!valor) return "-";
    const num = parseFloat(valor);
    if (isNaN(num)) return valor;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);
  };

  // Calcular totais
  const calcularTotais = () => {
    if (!pedidos || pedidos.length === 0) {
      return { totalNegociado: 0, totalSinal: 0, totalFinal: 0, totalPendente: 0, qtdPedidos: 0 };
    }
    
    // Filtrar apenas pedidos não cancelados para os totais
    const pedidosAtivos = pedidos.filter(p => p.status !== 'cancelado');
    
    const totalNegociado = pedidosAtivos.reduce((acc, p) => {
      const valor = parseFloat(p.valorNegociado || '0');
      return acc + (isNaN(valor) ? 0 : valor);
    }, 0);
    
    const totalSinal = pedidosAtivos.reduce((acc, p) => {
      const valor = parseFloat(p.sinal || '0');
      return acc + (isNaN(valor) ? 0 : valor);
    }, 0);
    
    const totalFinal = pedidosAtivos.reduce((acc, p) => {
      const valor = parseFloat(p.valorFinal || '0');
      return acc + (isNaN(valor) ? 0 : valor);
    }, 0);
    
    const totalPendente = totalNegociado - totalSinal;
    
    return { 
      totalNegociado, 
      totalSinal, 
      totalFinal, 
      totalPendente,
      qtdPedidos: pedidosAtivos.length 
    };
  };

  const totais = calcularTotais();

  const exportarCSV = () => {
    if (!pedidos || pedidos.length === 0) {
      toast.error("Não há dados para exportar");
      return;
    }

    const headers = [
      "Data",
      "Cliente",
      "Telefone",
      "Item",
      "Quantidade",
      "Tipo Impressão",
      "Própria/Terceirizada",
      "Insumo 1",
      "Insumo 2",
      "Insumo 3",
      "Material para Teste",
      "Previsão de Entrega",
      "Valor Negociado",
      "Forma de Pagamento",
      "Sinal (R$)",
      "Final (R$)",
      "Data para Pagamento",
      "Observações Finais",
      "Status",
    ];

    const rows = pedidos.map((p) => [
      formatarData(p.data),
      p.cliente,
      p.telefone || "",
      p.item,
      p.quantidade || "",
      p.tipoImpressao || "",
      p.propriaTerceirizada || "",
      p.insumo1 || "",
      p.insumo2 || "",
      p.insumo3 || "",
      p.materialTeste || "",
      formatarData(p.previsaoEntrega),
      p.valorNegociado || "",
      p.formaPagamento || "",
      p.sinal || "",
      p.valorFinal || "",
      formatarData(p.dataPagamento),
      p.observacoesFinais || "",
      p.status ? statusConfig[p.status]?.label : "",
    ]);

    const csvContent =
      "\uFEFF" +
      [headers.join(";"), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(";"))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `controle_pedidos_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Arquivo CSV exportado!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => setLocation("/admin/home")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-green-600" />
                <h1 className="text-lg font-bold text-gray-800">Controle de Pedidos</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={exportarCSV}>
                <Download className="w-4 h-4 mr-2" />
                Exportar CSV
              </Button>
              <Button variant="outline" size="sm" onClick={() => refetch()}>
                <RefreshCw className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  setEditando(null);
                  resetForm();
                  setShowModal(true);
                }}
              >
                <Plus className="w-4 h-4 mr-2" />
                Novo Pedido
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Filtros */}
      <div className="container mx-auto px-4 py-4">
        <Card>
          <CardContent className="pt-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Buscar por cliente..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filtroStatus} onValueChange={setFiltroStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os Status</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="em_producao">Em Produção</SelectItem>
                  <SelectItem value="finalizado">Finalizado</SelectItem>
                  <SelectItem value="entregue">Entregue</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabela */}
      <div className="container mx-auto px-4 pb-8">
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-[100px]">Data</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Qtd</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Previsão</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Pagamento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={10} className="text-center py-8">
                        Carregando...
                      </TableCell>
                    </TableRow>
                  ) : !pedidos || pedidos.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={10} className="text-center py-8 text-gray-500">
                        Nenhum pedido encontrado
                      </TableCell>
                    </TableRow>
                  ) : (
                    pedidos.map((pedido) => (
                      <TableRow key={pedido.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{formatarData(pedido.data)}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{pedido.cliente}</div>
                            {pedido.telefone && (
                              <div className="text-xs text-gray-500">{pedido.telefone}</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[200px] truncate" title={pedido.item}>
                          {pedido.item}
                        </TableCell>
                        <TableCell>{pedido.quantidade || "-"}</TableCell>
                        <TableCell>{pedido.tipoImpressao || "-"}</TableCell>
                        <TableCell>{formatarData(pedido.previsaoEntrega)}</TableCell>
                        <TableCell className="text-right font-medium">
                          {formatarMoeda(pedido.valorNegociado)}
                        </TableCell>
                        <TableCell>{pedido.formaPagamento || "-"}</TableCell>
                        <TableCell>
                          {pedido.status && (
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                statusConfig[pedido.status]?.color || "bg-gray-100"
                              }`}
                            >
                              {statusConfig[pedido.status]?.label || pedido.status}
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEditar(pedido)}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleExcluir(pedido.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
                {/* Linha de Resumo com Totais */}
                {pedidos && pedidos.length > 0 && (
                  <TableFooter>
                    <TableRow className="bg-gradient-to-r from-green-50 to-emerald-50 border-t-2 border-green-200">
                      <TableCell colSpan={3} className="font-bold text-green-800">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">TOTAIS</span>
                          <span className="text-sm font-normal text-gray-600">({totais.qtdPedidos} pedidos ativos)</span>
                        </div>
                      </TableCell>
                      <TableCell colSpan={3}></TableCell>
                      <TableCell className="text-right">
                        <div className="space-y-1">
                          <div className="text-xs text-gray-500">Negociado</div>
                          <div className="font-bold text-green-700">
                            {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(totais.totalNegociado)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-xs text-gray-500">Sinal Recebido</div>
                          <div className="font-bold text-blue-700">
                            {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(totais.totalSinal)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-xs text-gray-500">Pendente</div>
                          <div className="font-bold text-orange-600">
                            {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(totais.totalPendente)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableFooter>
                )}
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modal de Edição/Criação */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editando ? "Editar Pedido" : "Novo Pedido"}</DialogTitle>
            <DialogDescription>
              Preencha os dados do pedido. Campos com * são obrigatórios.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            {/* Linha 1: Data, Cliente, Telefone */}
            <div>
              <Label>Data *</Label>
              <Input
                type="date"
                value={formData.data}
                onChange={(e) => setFormData({ ...formData, data: e.target.value })}
              />
            </div>
            <div>
              <Label>Cliente *</Label>
              <Input
                value={formData.cliente}
                onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
                placeholder="Nome do cliente"
              />
            </div>
            <div>
              <Label>Telefone</Label>
              <Input
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                placeholder="(00) 00000-0000"
              />
            </div>

            {/* Linha 2: Item, Quantidade */}
            <div className="md:col-span-2">
              <Label>Item *</Label>
              <Input
                value={formData.item}
                onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                placeholder="Descrição do item"
              />
            </div>
            <div>
              <Label>Quantidade</Label>
              <Input
                value={formData.quantidade}
                onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                placeholder="Ex: 60 (10 P - 24 M - 20 G)"
              />
            </div>

            {/* Linha 3: Tipo Impressão, Própria/Terceirizada */}
            <div>
              <Label>Tipo de Impressão</Label>
              <Select
                value={formData.tipoImpressao}
                onValueChange={(v) => setFormData({ ...formData, tipoImpressao: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {tipoImpressaoOpcoes.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Própria/Terceirizada</Label>
              <Select
                value={formData.propriaTerceirizada}
                onValueChange={(v) =>
                  setFormData({ ...formData, propriaTerceirizada: v as "Própria" | "Terceirizada" })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Própria">Própria</SelectItem>
                  <SelectItem value="Terceirizada">Terceirizada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Material para Teste</Label>
              <Input
                value={formData.materialTeste}
                onChange={(e) => setFormData({ ...formData, materialTeste: e.target.value })}
                placeholder="Ex: não, 10 cartões"
              />
            </div>

            {/* Linha 4: Insumos */}
            <div>
              <Label>Insumo 1</Label>
              <Input
                value={formData.insumo1}
                onChange={(e) => setFormData({ ...formData, insumo1: e.target.value })}
                placeholder="Ex: Camisetas"
              />
            </div>
            <div>
              <Label>Insumo 2</Label>
              <Input
                value={formData.insumo2}
                onChange={(e) => setFormData({ ...formData, insumo2: e.target.value })}
              />
            </div>
            <div>
              <Label>Insumo 3</Label>
              <Input
                value={formData.insumo3}
                onChange={(e) => setFormData({ ...formData, insumo3: e.target.value })}
              />
            </div>

            {/* Linha 5: Previsão, Valor, Forma Pagamento */}
            <div>
              <Label>Previsão de Entrega</Label>
              <Input
                type="date"
                value={formData.previsaoEntrega}
                onChange={(e) => setFormData({ ...formData, previsaoEntrega: e.target.value })}
              />
            </div>
            <div>
              <Label>Valor Negociado (R$)</Label>
              <Input
                type="number"
                step="0.01"
                value={formData.valorNegociado}
                onChange={(e) => setFormData({ ...formData, valorNegociado: e.target.value })}
                placeholder="0.00"
              />
            </div>
            <div>
              <Label>Forma de Pagamento</Label>
              <Select
                value={formData.formaPagamento}
                onValueChange={(v) => setFormData({ ...formData, formaPagamento: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {formaPagamentoOpcoes.map((forma) => (
                    <SelectItem key={forma} value={forma}>
                      {forma}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Linha 6: Sinal, Valor Final, Data Pagamento */}
            <div>
              <Label>Sinal (R$)</Label>
              <Input
                type="number"
                step="0.01"
                value={formData.sinal}
                onChange={(e) => setFormData({ ...formData, sinal: e.target.value })}
                placeholder="0.00"
              />
            </div>
            <div>
              <Label>Valor Final (R$)</Label>
              <Input
                type="number"
                step="0.01"
                value={formData.valorFinal}
                onChange={(e) => setFormData({ ...formData, valorFinal: e.target.value })}
                placeholder="0.00"
              />
            </div>
            <div>
              <Label>Data para Pagamento</Label>
              <Input
                type="date"
                value={formData.dataPagamento}
                onChange={(e) => setFormData({ ...formData, dataPagamento: e.target.value })}
              />
            </div>

            {/* Linha 7: Status, Observações */}
            <div>
              <Label>Status</Label>
              <Select
                value={formData.status}
                onValueChange={(v) =>
                  setFormData({
                    ...formData,
                    status: v as "pendente" | "em_producao" | "finalizado" | "entregue" | "cancelado",
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="em_producao">Em Produção</SelectItem>
                  <SelectItem value="finalizado">Finalizado</SelectItem>
                  <SelectItem value="entregue">Entregue</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label>Observações Finais</Label>
              <Textarea
                value={formData.observacoesFinais}
                onChange={(e) => setFormData({ ...formData, observacoesFinais: e.target.value })}
                placeholder="Observações adicionais..."
                rows={2}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button
              onClick={handleSalvar}
              disabled={criarMutation.isPending || atualizarMutation.isPending}
              className="bg-green-600 hover:bg-green-700"
            >
              {criarMutation.isPending || atualizarMutation.isPending
                ? "Salvando..."
                : editando
                ? "Atualizar"
                : "Criar Pedido"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
