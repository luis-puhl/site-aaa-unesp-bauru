export class HomeProduto {
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

