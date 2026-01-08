ALTER TABLE `orcamentos` ADD `tokenAprovacao` varchar(64);--> statement-breakpoint
ALTER TABLE `orcamentos` ADD `aprovadoEm` timestamp;--> statement-breakpoint
ALTER TABLE `orcamentos` ADD `aprovadoPor` varchar(255);--> statement-breakpoint
ALTER TABLE `orcamentos` ADD `aprovadoIP` varchar(45);--> statement-breakpoint
ALTER TABLE `orcamentos` ADD CONSTRAINT `orcamentos_tokenAprovacao_unique` UNIQUE(`tokenAprovacao`);