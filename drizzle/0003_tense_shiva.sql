CREATE TABLE `colaboradores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`email` varchar(320),
	`senha` varchar(255) NOT NULL,
	`ativo` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `colaboradores_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `pedido_historico` (
	`id` int AUTO_INCREMENT NOT NULL,
	`pedidoId` int NOT NULL,
	`statusAnterior` varchar(50),
	`statusNovo` varchar(50) NOT NULL,
	`alteradoPor` varchar(255),
	`observacao` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `pedido_historico_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `pedidos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`orcamentoId` int NOT NULL,
	`numeroOrcamento` varchar(20) NOT NULL,
	`pedidoStatus` enum('em_aprovacao','aprovado','definicao_insumos','aguardando_insumos','producao','entrega','recebimento','concluido','cancelado') NOT NULL DEFAULT 'em_aprovacao',
	`clienteNome` varchar(255) NOT NULL,
	`clienteTelefone` varchar(20),
	`valorTotal` decimal(10,2) NOT NULL,
	`insumos` text,
	`observacoes` text,
	`comprovanteRecebimento` varchar(500),
	`dataAprovacao` timestamp,
	`dataDefinicaoInsumos` timestamp,
	`dataAguardandoInsumos` timestamp,
	`dataProducao` timestamp,
	`dataEntrega` timestamp,
	`dataRecebimento` timestamp,
	`dataConclusao` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `pedidos_id` PRIMARY KEY(`id`)
);
