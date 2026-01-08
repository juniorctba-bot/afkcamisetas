import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

// Schema de validação para itens do orçamento
const itemSchema = z.object({
  produto: z.string().min(1),
  descricao: z.string().optional(),
  quantidade: z.number().int().positive(),
  valorUnitario: z.string(),
  subtotal: z.string(),
});

// Schema de validação para orçamento
const orcamentoSchema = z.object({
  numero: z.string().optional(),
  origem: z.enum(["whatsapp", "site", "contato_pessoal", "mercado_livre"]),
  validade: z.number().int().positive().default(5),
  prazoProdução: z.number().int().positive().default(5),
  clienteNome: z.string().min(1),
  clienteTelefone: z.string().optional(),
  tipoEntrega: z.enum(["retirada", "entrega"]).default("retirada"),
  valorFrete: z.string().optional(),
  regiaoEntrega: z.string().optional(),
  tipoDesconto: z.enum(["percentual", "valor"]).optional(),
  valorDesconto: z.string().optional(),
  subtotal: z.string(),
  total: z.string(),
  observacoes: z.string().optional(),
  status: z.enum(["rascunho", "emitido", "aprovado", "cancelado"]).default("emitido"),
});

// Schema para rascunho
const rascunhoSchema = z.object({
  nome: z.string().optional(),
  numero: z.string().optional(),
  dados: z.any(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Rotas de orçamentos
  orcamento: router({
    // Gerar próximo número
    gerarNumero: protectedProcedure
      .input(z.object({ origem: z.string() }))
      .mutation(async ({ input }) => {
        return await db.gerarNumeroOrcamento(input.origem);
      }),

    // Criar orçamento
    criar: protectedProcedure
      .input(z.object({
        orcamento: orcamentoSchema,
        itens: z.array(itemSchema),
      }))
      .mutation(async ({ input, ctx }) => {
        // Gerar número se não fornecido
        let numero = input.orcamento.numero;
        if (!numero) {
          numero = await db.gerarNumeroOrcamento(input.orcamento.origem);
        }
        // Gerar token de aprovação
        const tokenAprovacao = db.gerarTokenAprovacao();
        const orcamento = await db.criarOrcamento(
          { ...input.orcamento, numero, tokenAprovacao, createdBy: ctx.user.id },
          input.itens
        );
        return orcamento;
      }),

    // Buscar por ID
    buscarPorId: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.buscarOrcamentoPorId(input.id);
      }),

    // Buscar por número
    buscarPorNumero: protectedProcedure
      .input(z.object({ numero: z.string() }))
      .query(async ({ input }) => {
        return await db.buscarOrcamentoPorNumero(input.numero);
      }),

    // Listar orçamentos
    listar: protectedProcedure
      .input(z.object({
        status: z.string().optional(),
        origem: z.string().optional(),
        busca: z.string().optional(),
        limite: z.number().optional(),
        offset: z.number().optional(),
      }).optional())
      .query(async ({ input }) => {
        return await db.listarOrcamentos(input);
      }),

    // Atualizar orçamento
    atualizar: protectedProcedure
      .input(z.object({
        id: z.number(),
        orcamento: orcamentoSchema.partial(),
        itens: z.array(itemSchema).optional(),
      }))
      .mutation(async ({ input }) => {
        await db.atualizarOrcamento(input.id, input.orcamento, input.itens);
        return { success: true };
      }),
  }),

  // Rotas de rascunhos
  rascunho: router({
    // Salvar rascunho
    salvar: protectedProcedure
      .input(rascunhoSchema)
      .mutation(async ({ input, ctx }) => {
        return await db.salvarRascunho({
          ...input,
          createdBy: ctx.user.id,
        });
      }),

    // Atualizar rascunho
    atualizar: protectedProcedure
      .input(z.object({
        id: z.number(),
        dados: rascunhoSchema.partial(),
      }))
      .mutation(async ({ input }) => {
        await db.atualizarRascunho(input.id, input.dados);
        return { success: true };
      }),

    // Listar rascunhos
    listar: protectedProcedure.query(async () => {
      return await db.listarRascunhos();
    }),

    // Buscar por ID
    buscarPorId: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await db.buscarRascunhoPorId(input.id);
      }),

    // Excluir rascunho
    excluir: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await db.excluirRascunho(input.id);
        return { success: true };
      }),

    // Contar rascunhos
    contar: protectedProcedure.query(async () => {
      return await db.contarRascunhos();
    }),
  }),

  // Rotas de frete
  frete: router({
    // Listar regiões
    listar: protectedProcedure.query(async () => {
      return await db.listarRegioesFrete();
    }),

    // Criar região
    criar: protectedProcedure
      .input(z.object({
        regiao: z.string().min(1),
        valor: z.string(),
      }))
      .mutation(async ({ input }) => {
        return await db.criarRegiaoFrete({
          regiao: input.regiao,
          valor: input.valor,
        });
      }),

    // Atualizar região
    atualizar: protectedProcedure
      .input(z.object({
        id: z.number(),
        regiao: z.string().optional(),
        valor: z.string().optional(),
        ativo: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await db.atualizarRegiaoFrete(id, data);
        return { success: true };
      }),

    // Excluir região
    excluir: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await db.excluirRegiaoFrete(input.id);
        return { success: true };
      }),
  }),

  // Rotas públicas de aprovação de orçamentos
  aprovacao: router({
    // Buscar orçamento por token (público)
    buscarPorToken: publicProcedure
      .input(z.object({ token: z.string() }))
      .query(async ({ input }) => {
        return await db.buscarOrcamentoPorToken(input.token);
      }),

    // Aprovar orçamento (público)
    aprovar: publicProcedure
      .input(z.object({
        token: z.string(),
        aprovadoPor: z.string().min(1),
      }))
      .mutation(async ({ input, ctx }) => {
        // Pegar IP do cliente
        const ip = ctx.req.headers['x-forwarded-for'] as string || ctx.req.socket?.remoteAddress || 'unknown';
        return await db.aprovarOrcamento(input.token, input.aprovadoPor, ip);
      }),
  }),

  // Rotas de contadores
  contador: router({
    // Listar contadores
    listar: protectedProcedure.query(async () => {
      return await db.buscarContadores();
    }),

    // Atualizar contador
    atualizar: protectedProcedure
      .input(z.object({
        origem: z.string(),
        ano: z.number(),
        ultimoNumero: z.number(),
      }))
      .mutation(async ({ input }) => {
        await db.atualizarContador(input.origem, input.ano, input.ultimoNumero);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
