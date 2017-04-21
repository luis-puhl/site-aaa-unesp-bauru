export class Produto {
	public modalId: string;
	public dataSlide: string;
	public img: string;
	public titulo: string;
	public active: boolean;
	constructor(
		modalId: string,
		dataSlide: string,
		img: string,
		titulo: string,
		active: boolean
	) {
		this.modalId = modalId;
		this.dataSlide = dataSlide;
		this.img = img;
		this.titulo = titulo;
		this.active = active;
	}
}



export const PRODUTO_MOCK: Produto[] = [
	new Produto('modalProdutoCaneca',
			'/produto/2016/02/01/produto-caneca',
			'/img/produtos/caneca.png',
			'Caneca',
			true),
	new Produto('modalProdutoSambaCancao',
			'/produto/2016/02/01/produto-samba-cancao',
			'/img/produtos/samba-cancao.png',
			'Samba Canção',
			false),
	new Produto('modalProdutoChaveiro',
			'/produto/2016/02/01/produto-chaveiro',
			'/img/produtos/chaveiro.png',
			'Chaveiro',
			false),
];
