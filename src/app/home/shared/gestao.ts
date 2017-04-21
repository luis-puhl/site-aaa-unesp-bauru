export class Gestao {
	constructor(
		public modalId: string,
		public img: string,
		public titulo: string
	) { }
}

export class HomeGestao {
	constructor(
		public modalId: string,
		public img: string,
		public titulo: string,
	) { }
}

export const GESTOES_MOCK: Gestao[] = [
	new Gestao('modalGestaoAtual',			'/img/gestoes/atual.png',			'Gestão Atual'),
	new Gestao('modalGestaoVelhaGuarda',	'/img/gestoes/velha-guarda.png',	'Velha Guarda'),
];
