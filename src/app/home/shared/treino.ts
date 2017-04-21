export class Treino {
	public modalId: string;
	public img: string;
	public titulo: string;
	constructor(
		modalId: string,
		img: string,
		titulo: string
	) {
		this.modalId = modalId;
		this.img = img;
		this.titulo = titulo;
	}
}

export class HomeTreino {
	public modalId: string;
	public img: string;
	public titulo: string;
	constructor(
		modalId: string,
		img: string,
		titulo: string
	) {
		this.modalId = modalId;
		this.img = img;
		this.titulo = titulo;
	}
}

export const TREINO_MOCK: Treino[] = [
	new Treino('modalTreinoXadrez',			'/img/treinos/xadrez.png',			'Xadrez'),
	new Treino('modalTreinoVolei',			'/img/treinos/volei.png',			'Vôlei'),
	new Treino('modalTreinoVoleiPraia',		'/img/treinos/volei-praia.png',		'Vôlei de Praia'),
	new Treino('modalTreinoTenisMesa',		'/img/treinos/tenis-mesa.png',		'Tênis de Mesa'),
	new Treino('modalTreinoTenisCampo',		'/img/treinos/tenis-campo.png',		'Tênis de Campo'),
	new Treino('modalTreinoNatacao',		'/img/treinos/natacao.png',			'Natação'),
	new Treino('modalTreinoJudo',			'/img/treinos/judo.png',			'Judô'),
	new Treino('modalTreinoHandebol',		'/img/treinos/handebol.png',		'Handebol'),
	new Treino('modalTreinoFutsal',			'/img/treinos/futsal.png',			'Futsal'),
	new Treino('modalTreinoFutebolCampo',	'/img/treinos/futebol-campo.png',	'Futebol de Campo'),
	new Treino('modalTreinoBasquete',		'/img/treinos/basquete.png',		'Basquete'),
	new Treino('modalTreinoAtletismo',		'/img/treinos/atletismo.png',		'Atletismo'),
];
