export class Parceiro {
	constructor(
		public modalId: string,
		public img: string,
		public titulo: string
	) { }
}

export class HomeParceiro {
	constructor(
		public modalId: string,
		public img: string,
		public titulo: string
	) { }
}

export const PARCEIROS_MOCK: Parceiro[] = [
	new Parceiro('modalParceiroAutoEscola',	'/img/parceiros/auto-escola.png',	'Auto-Escola'),
];
