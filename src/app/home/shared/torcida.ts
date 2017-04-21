export class Torcida {
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

export class HomeTorcida {
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

export const TORCIDA_MOCK: Torcida[] = [
	new Torcida('modalTorcidaTexuguetes',		'/img/torcidas/texuguetes.png',		'Texuguetes'),
	new Torcida('modalTorcidaNauteria',			'/img/torcidas/naumteria.png',		'Naumteria'),
	new Torcida('modalTorcidaFebreAmarela',		'/img/torcidas/febre-amarela.png',	'Febre Amarela'),
];
