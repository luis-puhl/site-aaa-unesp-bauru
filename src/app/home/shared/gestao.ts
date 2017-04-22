import { BootstrapModalData } from '../bootstrap-modal/bootstrap-modal-data';

export class Gestao {
	constructor(
		public modalId: string,
		public img: string,
		public title: string
	) { }
}

export class HomeGestao extends Gestao implements BootstrapModalData {
	public text: string;
	public category: string;
	public date: string;
	static fromGestao(gestao: Gestao): HomeGestao {
		let homegestao: HomeGestao;
		homegestao = new HomeGestao(gestao.modalId, gestao.img, gestao.title);
		homegestao.text = gestao.title;
		homegestao.category = 'Gestão';
		homegestao.date = '';
		return homegestao;
	}
}

export const GESTOES_MOCK: Gestao[] = [
	new Gestao('modalGestaoAtual',			'/img/gestoes/atual.png',			'Gestão Atual'),
	new Gestao('modalGestaoVelhaGuarda',	'/img/gestoes/velha-guarda.png',	'Velha Guarda'),
];
