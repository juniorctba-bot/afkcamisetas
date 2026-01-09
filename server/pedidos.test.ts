import { describe, it, expect, beforeAll } from "vitest";
import { getDb } from "./db";

describe("Pedidos - Sistema de Fluxo de Acompanhamento", () => {
  beforeAll(async () => {
    // Verificar conexão com banco
    const db = await getDb();
    expect(db).toBeTruthy();
  });

  it("deve ter a tabela de pedidos criada", async () => {
    const db = await getDb();
    if (!db) {
      console.warn("Database not available, skipping test");
      return;
    }
    
    // Verificar se a tabela existe executando uma query simples
    try {
      const result = await db.execute("SELECT 1 FROM pedidos LIMIT 1");
      expect(result).toBeDefined();
    } catch (error: any) {
      // Se a tabela não existir, o erro será sobre a tabela não encontrada
      expect(error.message).not.toContain("doesn't exist");
    }
  });

  it("deve ter a tabela de histórico de pedidos criada", async () => {
    const db = await getDb();
    if (!db) {
      console.warn("Database not available, skipping test");
      return;
    }
    
    try {
      const result = await db.execute("SELECT 1 FROM pedido_historico LIMIT 1");
      expect(result).toBeDefined();
    } catch (error: any) {
      expect(error.message).not.toContain("doesn't exist");
    }
  });

  it("deve ter a tabela de colaboradores criada", async () => {
    const db = await getDb();
    if (!db) {
      console.warn("Database not available, skipping test");
      return;
    }
    
    try {
      const result = await db.execute("SELECT 1 FROM colaboradores LIMIT 1");
      expect(result).toBeDefined();
    } catch (error: any) {
      expect(error.message).not.toContain("doesn't exist");
    }
  });

  it("deve exportar os status de pedido corretamente", async () => {
    const { statusPedidoOrdem, statusPedidoLabels } = await import("./db");
    
    expect(statusPedidoOrdem).toBeDefined();
    expect(statusPedidoOrdem).toContain("em_aprovacao");
    expect(statusPedidoOrdem).toContain("aprovado");
    expect(statusPedidoOrdem).toContain("definicao_insumos");
    expect(statusPedidoOrdem).toContain("aguardando_insumos");
    expect(statusPedidoOrdem).toContain("producao");
    expect(statusPedidoOrdem).toContain("entrega");
    expect(statusPedidoOrdem).toContain("recebimento");
    expect(statusPedidoOrdem).toContain("concluido");
    
    expect(statusPedidoLabels).toBeDefined();
    expect(statusPedidoLabels["em_aprovacao"]).toBe("Em Aprovação");
    expect(statusPedidoLabels["aprovado"]).toBe("Aprovado");
    expect(statusPedidoLabels["producao"]).toBe("Em Produção");
    expect(statusPedidoLabels["concluido"]).toBe("Concluído");
  });

  it("deve verificar senha de colaborador corretamente", async () => {
    const { verificarSenhaColaborador } = await import("./db");
    
    // Senha padrão deve funcionar
    const resultadoCorreto = await verificarSenhaColaborador("afk2025");
    expect(resultadoCorreto).toBe(true);
    
    // Senha incorreta não deve funcionar
    const resultadoIncorreto = await verificarSenhaColaborador("senha_errada");
    expect(resultadoIncorreto).toBe(false);
  });
});
