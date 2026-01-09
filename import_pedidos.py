#!/usr/bin/env python3
import pandas as pd
import psycopg2
from datetime import datetime
import os

# Ler a planilha Excel
df = pd.read_excel('/home/ubuntu/upload/ControledePedidos(1).xlsx')

# Conexão com o banco de dados
DATABASE_URL = os.environ.get('DATABASE_URL', 'postgresql://postgres:postgres@localhost:5432/postgres')

# Conectar ao banco
conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

# Mapear colunas da planilha para o banco
for index, row in df.iterrows():
    # Preparar dados
    data = row.get('Data')
    if pd.isna(data):
        data = None
    elif isinstance(data, str):
        try:
            data = datetime.strptime(data, '%Y-%m-%d').date()
        except:
            data = None
    
    cliente = str(row.get('Cliente', '')) if not pd.isna(row.get('Cliente')) else ''
    telefone = str(row.get('Telefone', '')) if not pd.isna(row.get('Telefone')) else ''
    item = str(row.get('Item', '')) if not pd.isna(row.get('Item')) else ''
    quantidade = str(row.get('Quantidade', '')) if not pd.isna(row.get('Quantidade')) else ''
    tipo_impressao = str(row.get('Tipo Impressão', '')) if not pd.isna(row.get('Tipo Impressão')) else ''
    propria_terceirizada = str(row.get('Própria/Terceirizada', '')) if not pd.isna(row.get('Própria/Terceirizada')) else ''
    insumo1 = str(row.get('Insumo 1', '')) if not pd.isna(row.get('Insumo 1')) else ''
    insumo2 = str(row.get('Insumo 2', '')) if not pd.isna(row.get('Insumo 2')) else ''
    insumo3 = str(row.get('Insumo 3', '')) if not pd.isna(row.get('Insumo 3')) else ''
    material_teste = str(row.get('Material para teste', '')) if not pd.isna(row.get('Material para teste')) else ''
    
    previsao_entrega = row.get('Previsão de Entrega')
    if pd.isna(previsao_entrega) or previsao_entrega == '':
        previsao_entrega = None
    elif isinstance(previsao_entrega, str):
        try:
            previsao_entrega = datetime.strptime(previsao_entrega, '%Y-%m-%d').date()
        except:
            previsao_entrega = None
    
    valor_negociado = row.get('Valor Negociado')
    if pd.isna(valor_negociado) or valor_negociado == '':
        valor_negociado = 0
    else:
        try:
            valor_negociado = float(valor_negociado)
        except:
            valor_negociado = 0
    
    forma_pagamento = str(row.get('Forma de Pagamento', '')) if not pd.isna(row.get('Forma de Pagamento')) else ''
    
    sinal = row.get('Sinal (R$)')
    if pd.isna(sinal) or sinal == '':
        sinal = 0
    else:
        try:
            sinal = float(sinal)
        except:
            sinal = 0
    
    valor_final = row.get('Final (R$)')
    if pd.isna(valor_final) or valor_final == '':
        valor_final = 0
    else:
        try:
            valor_final = float(valor_final)
        except:
            valor_final = 0
    
    data_pagamento = row.get('Data para Pagamento')
    if pd.isna(data_pagamento) or data_pagamento == '':
        data_pagamento = None
    elif isinstance(data_pagamento, str):
        try:
            data_pagamento = datetime.strptime(data_pagamento, '%Y-%m-%d').date()
        except:
            data_pagamento = None
    
    observacoes = str(row.get('Observações Finais', '')) if not pd.isna(row.get('Observações Finais')) else ''
    
    # Status padrão
    status = 'em_producao'
    
    # Inserir no banco
    sql = """
    INSERT INTO controle_pedidos 
    (data, cliente, telefone, item, quantidade, tipo_impressao, propria_terceirizada,
     insumo1, insumo2, insumo3, material_teste, previsao_entrega, valor_negociado,
     forma_pagamento, sinal, valor_final, data_pagamento, observacoes, status, created_at, updated_at)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, NOW(), NOW())
    """
    
    try:
        cur.execute(sql, (
            data, cliente, telefone, item, quantidade, tipo_impressao, propria_terceirizada,
            insumo1, insumo2, insumo3, material_teste, previsao_entrega, valor_negociado,
            forma_pagamento, sinal, valor_final, data_pagamento, observacoes, status
        ))
        print(f"Pedido importado: {cliente} - {item}")
    except Exception as e:
        print(f"Erro ao importar pedido {cliente}: {e}")

# Commit e fechar conexão
conn.commit()
cur.close()
conn.close()

print("\\nImportação concluída!")
