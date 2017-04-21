export class Galeria {
	constructor(
		public modalId: string,
		public img: string,
		public titulo: string
	) { }
}

export class HomeGaleria {
	constructor(
		public modalId: string,
		public img: string,
		public titulo: string
	) { }
}

export const GALERIA_MOCK: Galeria[] = [
	new Galeria('modalGaleriaTexugoPascoa',		'/img/galerias/texugo-pascoa.png',		'Texugo da Páscoa'),
	new Galeria('modalGaleriaDoaUnesp',			'/img/galerias/doa-unesp.png',			'Doa Unesp'),
	new Galeria('modalGaleriaBaticun',			'/img/galerias/baticun.png',			'Baticun'),
];
