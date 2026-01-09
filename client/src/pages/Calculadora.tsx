import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calculator,
  ArrowLeft,
  Plus,
  Trash2,
  DollarSign,
  Package,
  Percent,
  Clock,
} from "lucide-react";
import { toast } from "sonner";

interface ItemCusto {
  id: number;
  descricao: string;
  quantidade: number;
  valorUnitario: number;
}

export default function Calculadora() {
  const [, setLocation] = useLocation();
  
  // Verificar autenticação
  useEffect(() => {
    const isAuth = localStorage.getItem("afk_admin_auth");
    if (!isAuth) {
      setLocation("/admin");
    }
  }, [setLocation]);

  // Estados
  const [nomeProduto, setNomeProduto] = useState("");
  const [materiais, setMateriais] = useState<ItemCusto[]>([
    { id: 1, descricao: "", quantidade: 1, valorUnitario: 0 }
  ]);
  const [maoDeObra, setMaoDeObra] = useState(0);
  const [tempoProducao, setTempoProducao] = useState(0); // em minutos
  const [custoHora, setCustoHora] = useState(30); // R$/hora
  const [margemLucro, setMargemLucro] = useState(50); // %
  const [despesasFixas, setDespesasFixas] = useState(0);
  const [quantidade, setQuantidade] = useState(1);

  // Adicionar material
  const adicionarMaterial = () => {
    setMateriais([
      ...materiais,
      { id: Date.now(), descricao: "", quantidade: 1, valorUnitario: 0 }
    ]);
  };

  // Remover material
  const removerMaterial = (id: number) => {
    if (materiais.length > 1) {
      setMateriais(materiais.filter(m => m.id !== id));
    }
  };

  // Atualizar material
  const atualizarMaterial = (id: number, campo: keyof ItemCusto, valor: string | number) => {
    setMateriais(materiais.map(m => 
      m.id === id ? { ...m, [campo]: valor } : m
    ));
  };

  // Cálculos
  const custoMateriais = materiais.reduce((acc, m) => acc + (m.quantidade * m.valorUnitario), 0);
  const custoMaoDeObra = maoDeObra + ((tempoProducao / 60) * custoHora);
  const custoTotal = custoMateriais + custoMaoDeObra + despesasFixas;
  const custoUnitario = quantidade > 0 ? custoTotal / quantidade : 0;
  const valorVenda = custoUnitario * (1 + margemLucro / 100);
  const lucroUnitario = valorVenda - custoUnitario;
  const lucroTotal = lucroUnitario * quantidade;

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  const limparFormulario = () => {
    setNomeProduto("");
    setMateriais([{ id: 1, descricao: "", quantidade: 1, valorUnitario: 0 }]);
    setMaoDeObra(0);
    setTempoProducao(0);
    setDespesasFixas(0);
    setQuantidade(1);
    toast.success("Formulário limpo!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocation("/admin/home")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                <h1 className="text-lg font-bold text-gray-800">
                  Calculadora de Custos
                </h1>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={limparFormulario}>
              Limpar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulário */}
          <div className="lg:col-span-2 space-y-6">
            {/* Nome do Produto */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Identificação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Nome do Produto</Label>
                    <Input
                      value={nomeProduto}
                      onChange={(e) => setNomeProduto(e.target.value)}
                      placeholder="Ex: Camiseta Personalizada"
                    />
                  </div>
                  <div>
                    <Label>Quantidade a Produzir</Label>
                    <Input
                      type="number"
                      min="1"
                      value={quantidade}
                      onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Materiais */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Materiais e Insumos
                  </CardTitle>
                  <Button size="sm" variant="outline" onClick={adicionarMaterial}>
                    <Plus className="w-4 h-4 mr-1" />
                    Adicionar
                  </Button>
                </div>
                <CardDescription>
                  Liste todos os materiais necessários para produção
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {materiais.map((material, index) => (
                  <div key={material.id} className="flex gap-2 items-end">
                    <div className="flex-1">
                      <Label className="text-xs">Descrição</Label>
                      <Input
                        value={material.descricao}
                        onChange={(e) => atualizarMaterial(material.id, "descricao", e.target.value)}
                        placeholder={`Material ${index + 1}`}
                      />
                    </div>
                    <div className="w-24">
                      <Label className="text-xs">Qtd</Label>
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={material.quantidade}
                        onChange={(e) => atualizarMaterial(material.id, "quantidade", parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div className="w-32">
                      <Label className="text-xs">Valor Unit. (R$)</Label>
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={material.valorUnitario}
                        onChange={(e) => atualizarMaterial(material.id, "valorUnitario", parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removerMaterial(material.id)}
                      disabled={materiais.length === 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <div className="pt-2 text-right text-sm font-medium">
                  Subtotal Materiais: {formatarMoeda(custoMateriais)}
                </div>
              </CardContent>
            </Card>

            {/* Mão de Obra */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Mão de Obra
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label>Custo Fixo (R$)</Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={maoDeObra}
                      onChange={(e) => setMaoDeObra(parseFloat(e.target.value) || 0)}
                      placeholder="0,00"
                    />
                  </div>
                  <div>
                    <Label>Tempo Produção (min)</Label>
                    <Input
                      type="number"
                      min="0"
                      value={tempoProducao}
                      onChange={(e) => setTempoProducao(parseInt(e.target.value) || 0)}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label>Custo/Hora (R$)</Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={custoHora}
                      onChange={(e) => setCustoHora(parseFloat(e.target.value) || 0)}
                      placeholder="30,00"
                    />
                  </div>
                </div>
                <div className="pt-2 text-right text-sm font-medium">
                  Subtotal Mão de Obra: {formatarMoeda(custoMaoDeObra)}
                </div>
              </CardContent>
            </Card>

            {/* Despesas e Margem */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Percent className="w-4 h-4" />
                  Despesas e Margem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Despesas Fixas (R$)</Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={despesasFixas}
                      onChange={(e) => setDespesasFixas(parseFloat(e.target.value) || 0)}
                      placeholder="0,00"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Frete, embalagem, impostos, etc.
                    </p>
                  </div>
                  <div>
                    <Label>Margem de Lucro (%)</Label>
                    <Input
                      type="number"
                      min="0"
                      max="500"
                      value={margemLucro}
                      onChange={(e) => setMargemLucro(parseFloat(e.target.value) || 0)}
                      placeholder="50"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Percentual sobre o custo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resumo */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
                <CardTitle className="text-lg">Resumo do Cálculo</CardTitle>
                <CardDescription className="text-blue-100">
                  {nomeProduto || "Produto sem nome"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Materiais:</span>
                    <span>{formatarMoeda(custoMateriais)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Mão de Obra:</span>
                    <span>{formatarMoeda(custoMaoDeObra)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Despesas Fixas:</span>
                    <span>{formatarMoeda(despesasFixas)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Custo Total:</span>
                    <span>{formatarMoeda(custoTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Custo Unitário ({quantidade} un):</span>
                    <span>{formatarMoeda(custoUnitario)}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Margem ({margemLucro}%):</span>
                    <span>{formatarMoeda(lucroUnitario)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-green-600">
                    <span>Preço de Venda:</span>
                    <span>{formatarMoeda(valorVenda)}</span>
                  </div>
                </div>

                <Separator />

                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700">Lucro por Unidade:</span>
                    <span className="font-medium text-green-700">{formatarMoeda(lucroUnitario)}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-green-700">Lucro Total ({quantidade} un):</span>
                    <span className="font-bold text-green-700">{formatarMoeda(lucroTotal)}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  onClick={() => {
                    toast.success(`Preço sugerido: ${formatarMoeda(valorVenda)} por unidade`);
                  }}
                >
                  Copiar Preço Sugerido
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
