/**
 * Página pública de aprovação de orçamento
 * O cliente pode visualizar e aprovar o orçamento sem precisar de login
 */
import { useState, useEffect } from "react";
import { useParams } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, FileText, User, Phone, Truck, Calendar, AlertCircle, Loader2 } from "lucide-react";

export default function AprovarOrcamento() {
  const params = useParams<{ token: string }>();
  const token = params.token || "";
  
  const [nomeAprovador, setNomeAprovador] = useState("");
  const [aprovando, setAprovando] = useState(false);
  const [erro, setErro] = useState("");
  
  // Buscar orçamento pelo token
  const { data, isLoading, error, refetch } = trpc.aprovacao.buscarPorToken.useQuery(
    { token },
    { enabled: !!token }
  );
  
  // Mutation para aprovar
  const aprovarMutation = trpc.aprovacao.aprovar.useMutation({
    onSuccess: () => {
      refetch();
      setAprovando(false);
    },
    onError: (err) => {
      setErro(err.message);
      setAprovando(false);
    },
  });
  
  const handleAprovar = () => {
    if (!nomeAprovador.trim()) {
      setErro("Por favor, informe seu nome para aprovar o orçamento.");
      return;
    }
    setErro("");
    setAprovando(true);
    aprovarMutation.mutate({ token, aprovadoPor: nomeAprovador.trim() });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">Carregando orçamento...</p>
        </div>
      </div>
    );
  }
  
  if (error || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Orçamento não encontrado</h2>
            <p className="text-gray-600">
              O link de aprovação pode ter expirado ou o orçamento não existe.
              Entre em contato com a AFK Camisetas para mais informações.
            </p>
            <a
              href="https://wa.me/5541987386527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const { orcamento, itens } = data;
  const jaAprovado = orcamento.status === "aprovado";
  
  // Calcular valores
  const subtotal = parseFloat(String(orcamento.subtotal)) || 0;
  const desconto = parseFloat(String(orcamento.valorDesconto)) || 0;
  const frete = parseFloat(String(orcamento.valorFrete)) || 0;
  const total = parseFloat(String(orcamento.total)) || 0;
  const sinal = total * 0.3;
  
  // Formatar data
  const formatarData = (data: Date | string | null) => {
    if (!data) return "-";
    const d = new Date(data);
    return d.toLocaleDateString("pt-BR");
  };
  
  // Calcular data de validade
  const dataEmissao = new Date(orcamento.dataEmissao);
  const dataValidade = new Date(dataEmissao);
  dataValidade.setDate(dataValidade.getDate() + (orcamento.validade || 5));
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src="/images/logo_afk_final.png" 
            alt="AFK Camisetas" 
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            {jaAprovado ? "Orçamento Aprovado" : "Aprovação de Orçamento"}
          </h1>
          <p className="text-gray-600">
            Orçamento #{orcamento.numero}
          </p>
        </div>
        
        {/* Status de aprovação */}
        {jaAprovado && (
          <Card className="mb-6 border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
                <div>
                  <h3 className="text-lg font-bold text-green-800">Orçamento Aprovado!</h3>
                  <p className="text-green-700">
                    Aprovado por <strong>{orcamento.aprovadoPor}</strong> em {formatarData(orcamento.aprovadoEm)}
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    A equipe da AFK Camisetas entrará em contato para dar continuidade ao seu pedido.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Informações do orçamento */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Dados do cliente */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="w-5 h-5 text-orange-500" />
                Dados do Cliente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Nome:</strong> {orcamento.clienteNome}</p>
              {orcamento.clienteTelefone && (
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  {orcamento.clienteTelefone}
                </p>
              )}
            </CardContent>
          </Card>
          
          {/* Informações do orçamento */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-500" />
                Informações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <strong>Emissão:</strong> {formatarData(orcamento.dataEmissao)}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <strong>Válido até:</strong> {formatarData(dataValidade)}
              </p>
              <p className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gray-400" />
                <strong>Entrega:</strong> {orcamento.tipoEntrega === "retirada" ? "Retirada pelo cliente" : `Entrega - ${orcamento.regiaoEntrega || "A combinar"}`}
              </p>
              <p><strong>Prazo de produção:</strong> {orcamento.prazoProdução} dias úteis</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Itens do orçamento */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Itens do Orçamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold">Produto</th>
                    <th className="text-left py-3 px-4 font-semibold">Descrição</th>
                    <th className="text-center py-3 px-4 font-semibold">Qtd</th>
                    <th className="text-right py-3 px-4 font-semibold">Unit.</th>
                    <th className="text-right py-3 px-4 font-semibold">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {itens.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 px-4 font-medium">{item.produto}</td>
                      <td className="py-3 px-4 text-gray-600 text-sm">{item.descricao || "-"}</td>
                      <td className="py-3 px-4 text-center">{item.quantidade}</td>
                      <td className="py-3 px-4 text-right">R$ {parseFloat(String(item.valorUnitario)).toFixed(2).replace(".", ",")}</td>
                      <td className="py-3 px-4 text-right font-medium">R$ {parseFloat(String(item.subtotal)).toFixed(2).replace(".", ",")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Resumo de valores */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-end">
                <div className="w-full max-w-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                  </div>
                  {desconto > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto:</span>
                      <span>- R$ {desconto.toFixed(2).replace(".", ",")}</span>
                    </div>
                  )}
                  {frete > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frete:</span>
                      <span>R$ {frete.toFixed(2).replace(".", ",")}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-bold border-t pt-2">
                    <span>Total:</span>
                    <span className="text-orange-600">R$ {total.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between text-orange-700 bg-orange-50 p-2 rounded">
                    <span className="font-medium">Sinal (30%)*:</span>
                    <span className="font-bold">R$ {sinal.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    * A produção só será iniciada após o pagamento do sinal de 30% do valor total.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Observações */}
        {orcamento.observacoes && (
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Observações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 whitespace-pre-wrap">{orcamento.observacoes}</p>
            </CardContent>
          </Card>
        )}
        
        {/* Formulário de aprovação */}
        {!jaAprovado && (
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-orange-800">Aprovar Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Ao aprovar este orçamento, você concorda com os valores, condições e prazos apresentados.
                Nossa equipe entrará em contato para confirmar os detalhes do pagamento e produção.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Seu nome completo *
                  </label>
                  <Input
                    type="text"
                    placeholder="Digite seu nome para aprovar"
                    value={nomeAprovador}
                    onChange={(e) => setNomeAprovador(e.target.value)}
                    className="max-w-md"
                  />
                </div>
                
                {erro && (
                  <p className="text-red-600 text-sm">{erro}</p>
                )}
                
                <Button
                  onClick={handleAprovar}
                  disabled={aprovando || !nomeAprovador.trim()}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg"
                >
                  {aprovando ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Aprovando...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Aprovar Orçamento
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Contato */}
        <div className="text-center mt-8 text-gray-600">
          <p>Dúvidas? Entre em contato conosco:</p>
          <a
            href="https://wa.me/5541987386527"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mt-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            (41) 98738-6527
          </a>
        </div>
      </div>
    </div>
  );
}
