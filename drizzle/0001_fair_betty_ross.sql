CREATE TABLE `orcamento_contadores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`origem` varchar(1) NOT NULL,
	`ano` int NOT NULL,
	`ultimoNumero` int NOT NULL DEFAULT 0,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `orcamento_contadores_id` PRIMARY KEY(`id`),
	CONSTRAINT `orcamento_contadores_origem_unique` UNIQUE(`origem`)
);
--> statement-breakpoint
CREATE TABLE `orcamento_itens` (
	`id` int AUTO_INCREMENT NOT NULL,
	`orcamentoId` int NOT NULL,
	`produto` varchar(255) NOT NULL,
	`descricao` text,
	`quantidade` int NOT NULL DEFAULT 1,
	`valorUnitario` decimal(10,2) NOT NULL,
	`subtotal` decimal(10,2) NOT NULL,
	`ordem` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `orcamento_itens_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `orcamento_rascunhos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(255),
	`numero` varchar(20),
	`dados` json NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`createdBy` int,
	CONSTRAINT `orcamento_rascunhos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `orcamentos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`numero` varchar(20) NOT NULL,
	`origem` enum('whatsapp','site','contato_pessoal','mercado_livre') NOT NULL,
	`dataEmissao` timestamp NOT NULL DEFAULT (now()),
	`validade` int NOT NULL DEFAULT 5,
	`prazoProdução` int NOT NULL DEFAULT 5,
	`clienteNome` varchar(255) NOT NULL,
	`clienteTelefone` varchar(20),
	`tipoEntrega` enum('retirada','entrega') NOT NULL DEFAULT 'retirada',
	`valorFrete` decimal(10,2) DEFAULT '0.00',
	`regiaoEntrega` varchar(100),
	`tipoDesconto` enum('percentual','valor') DEFAULT 'percentual',
	`valorDesconto` decimal(10,2) DEFAULT '0.00',
	`subtotal` decimal(10,2) NOT NULL DEFAULT '0.00',
	`total` decimal(10,2) NOT NULL DEFAULT '0.00',
	`observacoes` text,
	`status` enum('rascunho','emitido','aprovado','cancelado') NOT NULL DEFAULT 'rascunho',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`createdBy` int,
	CONSTRAINT `orcamentos_id` PRIMARY KEY(`id`),
	CONSTRAINT `orcamentos_numero_unique` UNIQUE(`numero`)
);
--> statement-breakpoint
CREATE TABLE `tabela_frete` (
	`id` int AUTO_INCREMENT NOT NULL,
	`regiao` varchar(100) NOT NULL,
	`valor` decimal(10,2) NOT NULL,
	`ativo` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `tabela_frete_id` PRIMARY KEY(`id`),
	CONSTRAINT `tabela_frete_regiao_unique` UNIQUE(`regiao`)
);
