import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Contadores sequenciais por origem de orçamento
 * W = WhatsApp, S = Site, C = Contato Pessoal, M = Mercado Livre
 */
export const orcamentoContadores = mysqlTable("orcamento_contadores", {
  id: int("id").autoincrement().primaryKey(),
  origem: varchar("origem", { length: 1 }).notNull().unique(), // W, S, C, M
  ano: int("ano").notNull(), // 25, 26, etc
  ultimoNumero: int("ultimoNumero").notNull().default(0),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type OrcamentoContador = typeof orcamentoContadores.$inferSelect;
export type InsertOrcamentoContador = typeof orcamentoContadores.$inferInsert;

/**
 * Orçamentos emitidos
 */
export const orcamentos = mysqlTable("orcamentos", {
  id: int("id").autoincrement().primaryKey(),
  
  // Número do orçamento (ex: W25_0011)
  numero: varchar("numero", { length: 20 }).notNull().unique(),
  
  // Origem do cliente
  origem: mysqlEnum("origem", ["whatsapp", "site", "contato_pessoal", "mercado_livre"]).notNull(),
  
  // Datas
  dataEmissao: timestamp("dataEmissao").defaultNow().notNull(),
  validade: int("validade").notNull().default(5), // dias
  prazoProdução: int("prazoProdução").notNull().default(5), // dias úteis
  
  // Dados do cliente
  clienteNome: varchar("clienteNome", { length: 255 }).notNull(),
  clienteTelefone: varchar("clienteTelefone", { length: 20 }),
  
  // Tipo de entrega
  tipoEntrega: mysqlEnum("tipoEntrega", ["retirada", "entrega"]).notNull().default("retirada"),
  valorFrete: decimal("valorFrete", { precision: 10, scale: 2 }).default("0.00"),
  regiaoEntrega: varchar("regiaoEntrega", { length: 100 }),
  
  // Desconto
  tipoDesconto: mysqlEnum("tipoDesconto", ["percentual", "valor"]).default("percentual"),
  valorDesconto: decimal("valorDesconto", { precision: 10, scale: 2 }).default("0.00"),
  
  // Totais
  subtotal: decimal("subtotal", { precision: 10, scale: 2 }).notNull().default("0.00"),
  total: decimal("total", { precision: 10, scale: 2 }).notNull().default("0.00"),
  
  // Observações
  observacoes: text("observacoes"),
  
  // Status
  status: mysqlEnum("status", ["rascunho", "emitido", "aprovado", "cancelado"]).notNull().default("rascunho"),
  
  // Token para aprovação pública (link único)
  tokenAprovacao: varchar("tokenAprovacao", { length: 64 }).unique(),
  
  // Dados da aprovação
  aprovadoEm: timestamp("aprovadoEm"),
  aprovadoPor: varchar("aprovadoPor", { length: 255 }), // Nome de quem aprovou
  aprovadoIP: varchar("aprovadoIP", { length: 45 }), // IP de quem aprovou
  
  // Metadados
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  createdBy: int("createdBy"),
});

export type Orcamento = typeof orcamentos.$inferSelect;
export type InsertOrcamento = typeof orcamentos.$inferInsert;

/**
 * Itens do orçamento
 */
export const orcamentoItens = mysqlTable("orcamento_itens", {
  id: int("id").autoincrement().primaryKey(),
  orcamentoId: int("orcamentoId").notNull(),
  
  // Dados do item
  produto: varchar("produto", { length: 255 }).notNull(),
  descricao: text("descricao"),
  quantidade: int("quantidade").notNull().default(1),
  valorUnitario: decimal("valorUnitario", { precision: 10, scale: 2 }).notNull(),
  subtotal: decimal("subtotal", { precision: 10, scale: 2 }).notNull(),
  
  // Ordem do item na lista
  ordem: int("ordem").notNull().default(0),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type OrcamentoItem = typeof orcamentoItens.$inferSelect;
export type InsertOrcamentoItem = typeof orcamentoItens.$inferInsert;

/**
 * Tabela de frete por região de Curitiba
 */
export const tabelaFrete = mysqlTable("tabela_frete", {
  id: int("id").autoincrement().primaryKey(),
  regiao: varchar("regiao", { length: 100 }).notNull().unique(),
  valor: decimal("valor", { precision: 10, scale: 2 }).notNull(),
  ativo: boolean("ativo").notNull().default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TabelaFrete = typeof tabelaFrete.$inferSelect;
export type InsertTabelaFrete = typeof tabelaFrete.$inferInsert;

/**
 * Rascunhos de orçamentos (dados JSON para recuperação)
 */
export const orcamentoRascunhos = mysqlTable("orcamento_rascunhos", {
  id: int("id").autoincrement().primaryKey(),
  
  // Identificação
  nome: varchar("nome", { length: 255 }), // Nome do cliente ou identificador
  numero: varchar("numero", { length: 20 }), // Número provisório
  
  // Dados completos do orçamento em JSON
  dados: json("dados").notNull(),
  
  // Metadados
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  createdBy: int("createdBy"),
});

export type OrcamentoRascunho = typeof orcamentoRascunhos.$inferSelect;
export type InsertOrcamentoRascunho = typeof orcamentoRascunhos.$inferInsert;


/**
 * Status possíveis do pedido no fluxo de acompanhamento
 */
export const pedidoStatusEnum = mysqlEnum("pedidoStatus", [
  "em_aprovacao",
  "aprovado", 
  "definicao_insumos",
  "aguardando_insumos",
  "producao",
  "entrega",
  "recebimento",
  "concluido",
  "cancelado"
]);

/**
 * Pedidos - Fluxo de acompanhamento após aprovação do orçamento
 */
export const pedidos = mysqlTable("pedidos", {
  id: int("id").autoincrement().primaryKey(),
  
  // Referência ao orçamento
  orcamentoId: int("orcamentoId").notNull(),
  numeroOrcamento: varchar("numeroOrcamento", { length: 20 }).notNull(),
  
  // Status atual do pedido
  status: pedidoStatusEnum.notNull().default("em_aprovacao"),
  
  // Dados do cliente (copiados do orçamento)
  clienteNome: varchar("clienteNome", { length: 255 }).notNull(),
  clienteTelefone: varchar("clienteTelefone", { length: 20 }),
  
  // Valor total do pedido
  valorTotal: decimal("valorTotal", { precision: 10, scale: 2 }).notNull(),
  
  // Insumos necessários (preenchido na etapa de definição)
  insumos: text("insumos"),
  
  // Observações gerais
  observacoes: text("observacoes"),
  
  // Comprovante de recebimento (URL do arquivo)
  comprovanteRecebimento: varchar("comprovanteRecebimento", { length: 500 }),
  
  // Datas de cada etapa
  dataAprovacao: timestamp("dataAprovacao"),
  dataDefinicaoInsumos: timestamp("dataDefinicaoInsumos"),
  dataAguardandoInsumos: timestamp("dataAguardandoInsumos"),
  dataProducao: timestamp("dataProducao"),
  dataEntrega: timestamp("dataEntrega"),
  dataRecebimento: timestamp("dataRecebimento"),
  dataConclusao: timestamp("dataConclusao"),
  
  // Metadados
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Pedido = typeof pedidos.$inferSelect;
export type InsertPedido = typeof pedidos.$inferInsert;

/**
 * Histórico de mudanças de status do pedido
 */
export const pedidoHistorico = mysqlTable("pedido_historico", {
  id: int("id").autoincrement().primaryKey(),
  pedidoId: int("pedidoId").notNull(),
  
  // Status anterior e novo
  statusAnterior: varchar("statusAnterior", { length: 50 }),
  statusNovo: varchar("statusNovo", { length: 50 }).notNull(),
  
  // Quem fez a alteração
  alteradoPor: varchar("alteradoPor", { length: 255 }),
  
  // Observação da alteração
  observacao: text("observacao"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PedidoHistorico = typeof pedidoHistorico.$inferSelect;
export type InsertPedidoHistorico = typeof pedidoHistorico.$inferInsert;

/**
 * Colaboradores - Usuários com acesso à área restrita
 */
export const colaboradores = mysqlTable("colaboradores", {
  id: int("id").autoincrement().primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }),
  senha: varchar("senha", { length: 255 }).notNull(), // Hash da senha
  ativo: boolean("ativo").notNull().default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Colaborador = typeof colaboradores.$inferSelect;
export type InsertColaborador = typeof colaboradores.$inferInsert;
