import { eq, desc, and, like, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users, 
  orcamentos, 
  orcamentoItens, 
  orcamentoContadores,
  orcamentoRascunhos,
  tabelaFrete,
  InsertOrcamento,
  InsertOrcamentoItem,
  InsertOrcamentoRascunho,
  InsertTabelaFrete,
  Orcamento,
  OrcamentoItem,
  OrcamentoRascunho,
  TabelaFrete
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ==================== ORÇAMENTOS ====================

// Mapeamento de origem para código
const origemParaCodigo: Record<string, string> = {
  whatsapp: "W",
  site: "S",
  contato_pessoal: "C",
  mercado_livre: "M",
};

// Gerar próximo número de orçamento
export async function gerarNumeroOrcamento(origem: string): Promise<string> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const codigo = origemParaCodigo[origem] || "X";
  const anoAtual = new Date().getFullYear() % 100; // 25, 26, etc

  // Buscar ou criar contador
  const [contador] = await db
    .select()
    .from(orcamentoContadores)
    .where(and(
      eq(orcamentoContadores.origem, codigo),
      eq(orcamentoContadores.ano, anoAtual)
    ))
    .limit(1);

  let proximoNumero: number;

  if (contador) {
    proximoNumero = contador.ultimoNumero + 1;
    await db
      .update(orcamentoContadores)
      .set({ ultimoNumero: proximoNumero })
      .where(eq(orcamentoContadores.id, contador.id));
  } else {
    proximoNumero = 1;
    await db.insert(orcamentoContadores).values({
      origem: codigo,
      ano: anoAtual,
      ultimoNumero: 1,
    });
  }

  // Formatar número: W25_0001
  return `${codigo}${anoAtual}_${String(proximoNumero).padStart(4, "0")}`;
}

// Criar orçamento
export async function criarOrcamento(data: InsertOrcamento, itens: Omit<InsertOrcamentoItem, "orcamentoId">[]): Promise<Orcamento> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Gerar número se não fornecido
  if (!data.numero) {
    data.numero = await gerarNumeroOrcamento(data.origem);
  }

  // Inserir orçamento
  const [result] = await db.insert(orcamentos).values(data);
  const orcamentoId = result.insertId;

  // Inserir itens
  if (itens.length > 0) {
    const itensComId = itens.map((item, index) => ({
      ...item,
      orcamentoId,
      ordem: index,
    }));
    await db.insert(orcamentoItens).values(itensComId);
  }

  // Buscar orçamento criado
  const [orcamento] = await db
    .select()
    .from(orcamentos)
    .where(eq(orcamentos.id, orcamentoId))
    .limit(1);

  return orcamento;
}

// Buscar orçamento por ID
export async function buscarOrcamentoPorId(id: number): Promise<{ orcamento: Orcamento; itens: OrcamentoItem[] } | null> {
  const db = await getDb();
  if (!db) return null;

  const [orcamento] = await db
    .select()
    .from(orcamentos)
    .where(eq(orcamentos.id, id))
    .limit(1);

  if (!orcamento) return null;

  const itens = await db
    .select()
    .from(orcamentoItens)
    .where(eq(orcamentoItens.orcamentoId, id))
    .orderBy(orcamentoItens.ordem);

  return { orcamento, itens };
}

// Buscar orçamento por número
export async function buscarOrcamentoPorNumero(numero: string): Promise<{ orcamento: Orcamento; itens: OrcamentoItem[] } | null> {
  const db = await getDb();
  if (!db) return null;

  const [orcamento] = await db
    .select()
    .from(orcamentos)
    .where(eq(orcamentos.numero, numero))
    .limit(1);

  if (!orcamento) return null;

  const itens = await db
    .select()
    .from(orcamentoItens)
    .where(eq(orcamentoItens.orcamentoId, orcamento.id))
    .orderBy(orcamentoItens.ordem);

  return { orcamento, itens };
}

// Listar orçamentos com filtros
export async function listarOrcamentos(filtros?: {
  status?: string;
  origem?: string;
  busca?: string;
  limite?: number;
  offset?: number;
}): Promise<Orcamento[]> {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(orcamentos);

  // Aplicar filtros
  const conditions = [];
  if (filtros?.status) {
    conditions.push(eq(orcamentos.status, filtros.status as any));
  }
  if (filtros?.origem) {
    conditions.push(eq(orcamentos.origem, filtros.origem as any));
  }
  if (filtros?.busca) {
    conditions.push(
      sql`(${orcamentos.numero} LIKE ${`%${filtros.busca}%`} OR ${orcamentos.clienteNome} LIKE ${`%${filtros.busca}%`})`
    );
  }

  if (conditions.length > 0) {
    query = query.where(and(...conditions)) as any;
  }

  const result = await query
    .orderBy(desc(orcamentos.createdAt))
    .limit(filtros?.limite || 50)
    .offset(filtros?.offset || 0);

  return result;
}

// Atualizar orçamento
export async function atualizarOrcamento(id: number, data: Partial<InsertOrcamento>, itens?: Omit<InsertOrcamentoItem, "orcamentoId">[]): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(orcamentos).set(data).where(eq(orcamentos.id, id));

  // Atualizar itens se fornecidos
  if (itens) {
    // Remover itens antigos
    await db.delete(orcamentoItens).where(eq(orcamentoItens.orcamentoId, id));
    
    // Inserir novos itens
    if (itens.length > 0) {
      const itensComId = itens.map((item, index) => ({
        ...item,
        orcamentoId: id,
        ordem: index,
      }));
      await db.insert(orcamentoItens).values(itensComId);
    }
  }
}

// ==================== RASCUNHOS ====================

// Salvar rascunho
export async function salvarRascunho(data: InsertOrcamentoRascunho): Promise<OrcamentoRascunho> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const [result] = await db.insert(orcamentoRascunhos).values(data);
  
  const [rascunho] = await db
    .select()
    .from(orcamentoRascunhos)
    .where(eq(orcamentoRascunhos.id, result.insertId))
    .limit(1);

  return rascunho;
}

// Atualizar rascunho
export async function atualizarRascunho(id: number, data: Partial<InsertOrcamentoRascunho>): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(orcamentoRascunhos).set(data).where(eq(orcamentoRascunhos.id, id));
}

// Listar rascunhos
export async function listarRascunhos(): Promise<OrcamentoRascunho[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(orcamentoRascunhos)
    .orderBy(desc(orcamentoRascunhos.updatedAt));
}

// Buscar rascunho por ID
export async function buscarRascunhoPorId(id: number): Promise<OrcamentoRascunho | null> {
  const db = await getDb();
  if (!db) return null;

  const [rascunho] = await db
    .select()
    .from(orcamentoRascunhos)
    .where(eq(orcamentoRascunhos.id, id))
    .limit(1);

  return rascunho || null;
}

// Excluir rascunho
export async function excluirRascunho(id: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.delete(orcamentoRascunhos).where(eq(orcamentoRascunhos.id, id));
}

// Contar rascunhos
export async function contarRascunhos(): Promise<number> {
  const db = await getDb();
  if (!db) return 0;

  const [result] = await db
    .select({ count: sql<number>`COUNT(*)` })
    .from(orcamentoRascunhos);

  return result?.count || 0;
}

// ==================== TABELA DE FRETE ====================

// Listar regiões de frete
export async function listarRegioesFrete(): Promise<TabelaFrete[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(tabelaFrete)
    .where(eq(tabelaFrete.ativo, true))
    .orderBy(tabelaFrete.regiao);
}

// Criar região de frete
export async function criarRegiaoFrete(data: InsertTabelaFrete): Promise<TabelaFrete> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const [result] = await db.insert(tabelaFrete).values(data);
  
  const [regiao] = await db
    .select()
    .from(tabelaFrete)
    .where(eq(tabelaFrete.id, result.insertId))
    .limit(1);

  return regiao;
}

// Atualizar região de frete
export async function atualizarRegiaoFrete(id: number, data: Partial<InsertTabelaFrete>): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(tabelaFrete).set(data).where(eq(tabelaFrete.id, id));
}

// Excluir região de frete
export async function excluirRegiaoFrete(id: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(tabelaFrete).set({ ativo: false }).where(eq(tabelaFrete.id, id));
}

// ==================== CONTADORES ====================

// Buscar contadores
export async function buscarContadores() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(orcamentoContadores);
}

// Atualizar contador
export async function atualizarContador(origem: string, ano: number, ultimoNumero: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const [existente] = await db
    .select()
    .from(orcamentoContadores)
    .where(and(
      eq(orcamentoContadores.origem, origem),
      eq(orcamentoContadores.ano, ano)
    ))
    .limit(1);

  if (existente) {
    await db
      .update(orcamentoContadores)
      .set({ ultimoNumero })
      .where(eq(orcamentoContadores.id, existente.id));
  } else {
    await db.insert(orcamentoContadores).values({
      origem,
      ano,
      ultimoNumero,
    });
  }
}


// ==================== APROVAÇÃO DE ORÇAMENTOS ====================

// Buscar orçamento por token de aprovação
export async function buscarOrcamentoPorToken(token: string): Promise<{ orcamento: Orcamento; itens: OrcamentoItem[] } | null> {
  const db = await getDb();
  if (!db) return null;

  const [orcamento] = await db
    .select()
    .from(orcamentos)
    .where(eq(orcamentos.tokenAprovacao, token))
    .limit(1);

  if (!orcamento) return null;

  const itens = await db
    .select()
    .from(orcamentoItens)
    .where(eq(orcamentoItens.orcamentoId, orcamento.id))
    .orderBy(orcamentoItens.ordem);

  return { orcamento, itens };
}

// Aprovar orçamento
export async function aprovarOrcamento(token: string, aprovadoPor: string, aprovadoIP: string): Promise<Orcamento | null> {
  const db = await getDb();
  if (!db) return null;

  // Buscar orçamento pelo token
  const [orcamento] = await db
    .select()
    .from(orcamentos)
    .where(eq(orcamentos.tokenAprovacao, token))
    .limit(1);

  if (!orcamento) return null;

  // Verificar se já foi aprovado
  if (orcamento.status === 'aprovado') {
    return orcamento;
  }

  // Atualizar status para aprovado
  await db
    .update(orcamentos)
    .set({
      status: 'aprovado',
      aprovadoEm: new Date(),
      aprovadoPor,
      aprovadoIP,
    })
    .where(eq(orcamentos.id, orcamento.id));

  // Buscar orçamento atualizado
  const [orcamentoAtualizado] = await db
    .select()
    .from(orcamentos)
    .where(eq(orcamentos.id, orcamento.id))
    .limit(1);

  return orcamentoAtualizado;
}

// Gerar token único para aprovação
export function gerarTokenAprovacao(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 32; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}
