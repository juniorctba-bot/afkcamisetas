/**
 * Admin Dashboard - Painel Administrativo
 * Área restrita com gestão de pedidos e orçamentos
 */
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
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
import { Textarea } from "@/components/ui/textarea";
import {
  FileText,
  Package,
  Search,
  RefreshCw,
  LogOut,
  ChevronRight,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Truck,
  Box,
  Receipt,
  Upload,
  History,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

// Status labels e cores
const statusConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  em_aprovacao: { label: "Em Aprovação", color: "bg-yellow-100 text-yellow-800", icon: <Clock className="w-4 h-4" /> },
  aprovado: { label: "Aprovado", color: "bg-green-100 text-green-800", icon: <CheckCircle2 className="w-4 h-4" /> },
  definicao_insumos: { label: "Definição de Insumos", color: "bg-blue-100 text-blue-800", icon: <Box className="w-4 h-4" /> },
  aguardando_insumos: { label: "Aguardando Insumos", color: "bg-orange-100 text-orange-800", icon: <AlertCircle className="w-4 h-4" /> },
  producao: { label: "Em Produção", color: "bg-purple-100 text-purple-800", icon: <Package className="w-4 h-4" /> },
  entrega: { label: "Em Entrega", color: "bg-cyan-100 text-cyan-800", icon: <Truck className="w-4 h-4" /> },
  recebimento: { label: "Aguardando Recebimento", color: "bg-pink-100 text-pink-800", icon: <Receipt className="w-4 h-4" /> },
  concluido: { label: "Concluído", color: "bg-emerald-100 text-emerald-800", icon: <CheckCircle2 className="w-4 h-4" /> },
  cancelado: { label: "Cancelado", color: "bg-red-100 text-red-800", icon: <XCircle className="w-4 h-4" /> },
};

// Ordem dos status no fluxo
const statusOrdem = [
  "em_aprovacao",
  "aprovado",
  "definicao_insumos",
  "aguardando_insumos",
  "producao",
  "entrega",
  "recebimento",
  "concluido",
];

interface Pedido {
  id: number;
  orcamentoId: number;
  numeroOrcamento: string;
  status: string;
  clienteNome: string;
  clienteTelefone: string | null;
  valorTotal: string;
  insumos: string | null;
  observacoes: string | null;
  comprovanteRecebimento: string | null;
  dataAprovacao: string | Date | null;
  dataDefinicaoInsumos: string | Date | null;
  dataAguardandoInsumos: string | Date | null;
  dataProducao: string | Date | null;
  dataEntrega: string | Date | null;
  dataRecebimento: string | Date | null;
  dataConclusao: string | Date | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface HistoricoItem {
  id: number;
  pedidoId: number;
  statusAnterior: string | null;
  statusNovo: string;
  alteradoPor: string | null;
  observacao: string | null;
  createdAt: string | Date;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("pedidos");
  const [filtroStatus, setFiltroStatus] = useState("todos");
  const [busca, setBusca] = useState("");
  const [pedidoSelecionado, setPedidoSelecionado] = useState<Pedido | null>(null);
  const [showDetalhes, setShowDetalhes] = useState(false);
  const [showHistorico, setShowHistorico] = useState(false);
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);
  const [novoStatus, setNovoStatus] = useState("");
  const [observacaoStatus, setObservacaoStatus] = useState("");
  const [insumos, setInsumos] = useState("");
  const [comprovanteUrl, setComprovanteUrl] = useState("");

  // Verificar autenticação
  useEffect(() => {
    const isAuth = localStorage.getItem("afk_admin_auth");
    if (!isAuth) {
      setLocation("/admin");
    }
  }, [setLocation]);

  // Queries
  const { data: pedidos, refetch: refetchPedidos, isLoading } = trpc.pedido.listar.useQuery({
    status: filtroStatus === "todos" ? undefined : filtroStatus,
    busca: busca || undefined,
  });

  const { data: contadores } = trpc.pedido.contarPorStatus.useQuery();

  // Mutations
  const atualizarStatusMutation = trpc.pedido.atualizarStatus.useMutation({
    onSuccess: () => {
      toast.success("Status atualizado com sucesso!");
      refetchPedidos();
      setShowDetalhes(false);
      setPedidoSelecionado(null);
    },
    onError: (error) => {
      toast.error("Erro ao atualizar status: " + error.message);
    },
  });

  const buscarHistoricoMutation = trpc.pedido.historico.useQuery(
    { pedidoId: pedidoSelecionado?.id || 0 },
    { enabled: showHistorico && !!pedidoSelecionado }
  );

  // Handlers
  const handleLogout = () => {
    localStorage.removeItem("afk_admin_auth");
    localStorage.removeItem("afk_admin_auth_time");
    toast.success("Logout realizado!");
    setLocation("/admin");
  };

  const handleVerDetalhes = (pedido: Pedido) => {
    setPedidoSelecionado(pedido);
    setNovoStatus(pedido.status);
    setInsumos(pedido.insumos || "");
    setComprovanteUrl(pedido.comprovanteRecebimento || "");
    setObservacaoStatus("");
    setShowDetalhes(true);
  };

  const handleVerHistorico = (pedido: Pedido) => {
    setPedidoSelecionado(pedido);
    setShowHistorico(true);
  };

  const handleAtualizarStatus = () => {
    if (!pedidoSelecionado || !novoStatus) return;

    atualizarStatusMutation.mutate({
      id: pedidoSelecionado.id,
      novoStatus,
      observacao: observacaoStatus || undefined,
      insumos: insumos || undefined,
      comprovanteUrl: comprovanteUrl || undefined,
    });
  };

  const getProximoStatus = (statusAtual: string): string | null => {
    const index = statusOrdem.indexOf(statusAtual);
    if (index === -1 || index >= statusOrdem.length - 1) return null;
    return statusOrdem[index + 1];
  };

  const formatarData = (data: string | Date | null) => {
    if (!data) return "-";
    const dateObj = typeof data === 'string' ? new Date(data) : data;
    return dateObj.toLocaleString("pt-BR");
  };

  const formatarValor = (valor: string) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(parseFloat(valor));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                AFK Admin
              </h1>
              <Badge variant="outline" className="text-xs">
                Área Restrita
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetchPedidos()}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Atualizar
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="pedidos" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Pedidos
            </TabsTrigger>
            <TabsTrigger value="orcamentos" className="flex items-center gap-2" onClick={() => setLocation("/gerador-orcamentos")}>
              <FileText className="w-4 h-4" />
              Orçamentos
            </TabsTrigger>
            
          </TabsList>

          <TabsContent value="pedidos">
            {/* Contadores */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
              {statusOrdem.map((status) => {
                const config = statusConfig[status];
                const count = contadores?.[status] || 0;
                return (
                  <button
                    key={status}
                    onClick={() => setFiltroStatus(status)}
                    className={`p-3 rounded-lg border transition-all ${
                      filtroStatus === status
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {config.icon}
                      <span className="text-2xl font-bold">{count}</span>
                    </div>
                    <p className="text-xs text-gray-600 truncate">{config.label}</p>
                  </button>
                );
              })}
            </div>

            {/* Filtros */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar por número ou cliente..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filtroStatus} onValueChange={setFiltroStatus}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os Status</SelectItem>
                  {statusOrdem.map((status) => (
                    <SelectItem key={status} value={status}>
                      {statusConfig[status].label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Lista de Pedidos */}
            <div className="bg-white rounded-xl shadow-sm border">
              {isLoading ? (
                <div className="p-8 text-center text-gray-500">
                  Carregando pedidos...
                </div>
              ) : pedidos && pedidos.length > 0 ? (
                <div className="divide-y">
                  {pedidos.map((pedido: Pedido) => {
                    const config = statusConfig[pedido.status] || statusConfig.em_aprovacao;
                    const proximoStatus = getProximoStatus(pedido.status);
                    
                    return (
                      <div
                        key={pedido.id}
                        className="p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-mono font-bold text-lg">
                                {pedido.numeroOrcamento}
                              </span>
                              <Badge className={config.color}>
                                {config.icon}
                                <span className="ml-1">{config.label}</span>
                              </Badge>
                            </div>
                            <p className="text-gray-700 font-medium">
                              {pedido.clienteNome}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                              <span>{formatarValor(pedido.valorTotal)}</span>
                              <span>•</span>
                              <span>{formatarData(pedido.createdAt)}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleVerHistorico(pedido)}
                            >
                              <History className="w-4 h-4 mr-1" />
                              Histórico
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleVerDetalhes(pedido)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Detalhes
                            </Button>
                            {proximoStatus && (
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-pink-500 to-purple-500"
                                onClick={() => {
                                  setPedidoSelecionado(pedido);
                                  setNovoStatus(proximoStatus);
                                  setInsumos(pedido.insumos || "");
                                  setComprovanteUrl(pedido.comprovanteRecebimento || "");
                                  setObservacaoStatus("");
                                  setShowDetalhes(true);
                                }}
                              >
                                <ChevronRight className="w-4 h-4 mr-1" />
                                {statusConfig[proximoStatus]?.label || "Avançar"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  Nenhum pedido encontrado
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Modal de Detalhes */}
      <Dialog open={showDetalhes} onOpenChange={setShowDetalhes}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Pedido {pedidoSelecionado?.numeroOrcamento}
            </DialogTitle>
            <DialogDescription>
              Gerencie o status e informações do pedido
            </DialogDescription>
          </DialogHeader>

          {pedidoSelecionado && (
            <div className="space-y-6">
              {/* Info do Cliente */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Informações do Cliente</h4>
                <p><strong>Nome:</strong> {pedidoSelecionado.clienteNome}</p>
                <p><strong>Telefone:</strong> {pedidoSelecionado.clienteTelefone || "-"}</p>
                <p><strong>Valor Total:</strong> {formatarValor(pedidoSelecionado.valorTotal)}</p>
              </div>

              {/* Timeline de Status */}
              <div>
                <h4 className="font-semibold mb-3">Progresso do Pedido</h4>
                <div className="flex items-center gap-1 overflow-x-auto pb-2">
                  {statusOrdem.map((status, index) => {
                    const config = statusConfig[status];
                    const isAtual = pedidoSelecionado.status === status;
                    const isPast = statusOrdem.indexOf(pedidoSelecionado.status) > index;
                    
                    return (
                      <div key={status} className="flex items-center">
                        <div
                          className={`flex items-center gap-1 px-2 py-1 rounded text-xs whitespace-nowrap ${
                            isAtual
                              ? "bg-pink-500 text-white"
                              : isPast
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {config.icon}
                          <span className="hidden md:inline">{config.label}</span>
                        </div>
                        {index < statusOrdem.length - 1 && (
                          <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <Separator />

              {/* Atualizar Status */}
              <div className="space-y-4">
                <h4 className="font-semibold">Atualizar Status</h4>
                
                <Select value={novoStatus} onValueChange={setNovoStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o novo status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOrdem.map((status) => (
                      <SelectItem key={status} value={status}>
                        {statusConfig[status].label}
                      </SelectItem>
                    ))}
                    <SelectItem value="cancelado">Cancelado</SelectItem>
                  </SelectContent>
                </Select>

                {/* Campo de Insumos (para definição de insumos) */}
                {(novoStatus === "definicao_insumos" || novoStatus === "aguardando_insumos") && (
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Insumos Necessários
                    </label>
                    <Textarea
                      value={insumos}
                      onChange={(e) => setInsumos(e.target.value)}
                      placeholder="Liste os insumos necessários para produção..."
                      rows={4}
                    />
                  </div>
                )}

                {/* Campo de Comprovante (para recebimento) */}
                {novoStatus === "recebimento" && (
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      URL do Comprovante de Recebimento
                    </label>
                    <Input
                      value={comprovanteUrl}
                      onChange={(e) => setComprovanteUrl(e.target.value)}
                      placeholder="Cole a URL da imagem do comprovante..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Faça upload da imagem em um serviço de hospedagem e cole a URL aqui
                    </p>
                  </div>
                )}

                <Textarea
                  value={observacaoStatus}
                  onChange={(e) => setObservacaoStatus(e.target.value)}
                  placeholder="Observação sobre a mudança de status (opcional)..."
                  rows={2}
                />

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowDetalhes(false)}>
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleAtualizarStatus}
                    disabled={atualizarStatusMutation.isPending || novoStatus === pedidoSelecionado.status}
                    className="bg-gradient-to-r from-pink-500 to-purple-500"
                  >
                    {atualizarStatusMutation.isPending ? "Salvando..." : "Salvar Alterações"}
                  </Button>
                </div>
              </div>

              {/* Datas das Etapas */}
              <Separator />
              <div>
                <h4 className="font-semibold mb-3">Histórico de Datas</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><strong>Criado:</strong> {formatarData(pedidoSelecionado.createdAt)}</div>
                  <div><strong>Aprovado:</strong> {formatarData(pedidoSelecionado.dataAprovacao)}</div>
                  <div><strong>Def. Insumos:</strong> {formatarData(pedidoSelecionado.dataDefinicaoInsumos)}</div>
                  <div><strong>Ag. Insumos:</strong> {formatarData(pedidoSelecionado.dataAguardandoInsumos)}</div>
                  <div><strong>Produção:</strong> {formatarData(pedidoSelecionado.dataProducao)}</div>
                  <div><strong>Entrega:</strong> {formatarData(pedidoSelecionado.dataEntrega)}</div>
                  <div><strong>Recebimento:</strong> {formatarData(pedidoSelecionado.dataRecebimento)}</div>
                  <div><strong>Conclusão:</strong> {formatarData(pedidoSelecionado.dataConclusao)}</div>
                </div>
              </div>

              {/* Comprovante */}
              {pedidoSelecionado.comprovanteRecebimento && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Comprovante de Recebimento</h4>
                    <a
                      href={pedidoSelecionado.comprovanteRecebimento}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:underline flex items-center gap-1"
                    >
                      <Upload className="w-4 h-4" />
                      Ver Comprovante
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de Histórico */}
      <Dialog open={showHistorico} onOpenChange={setShowHistorico}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <History className="w-5 h-5" />
              Histórico do Pedido {pedidoSelecionado?.numeroOrcamento}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {buscarHistoricoMutation.data && buscarHistoricoMutation.data.length > 0 ? (
              buscarHistoricoMutation.data.map((item: HistoricoItem) => (
                <div key={item.id} className="border-l-2 border-pink-200 pl-4 py-2">
                  <div className="flex items-center gap-2 mb-1">
                    {item.statusAnterior && (
                      <>
                        <Badge variant="outline" className="text-xs">
                          {statusConfig[item.statusAnterior]?.label || item.statusAnterior}
                        </Badge>
                        <ChevronRight className="w-3 h-3" />
                      </>
                    )}
                    <Badge className={statusConfig[item.statusNovo]?.color || "bg-gray-100"}>
                      {statusConfig[item.statusNovo]?.label || item.statusNovo}
                    </Badge>
                  </div>
                  {item.observacao && (
                    <p className="text-sm text-gray-600">{item.observacao}</p>
                  )}
                  <div className="text-xs text-gray-400 mt-1">
                    {formatarData(item.createdAt)}
                    {item.alteradoPor && ` • por ${item.alteradoPor}`}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">
                Nenhum histórico encontrado
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
