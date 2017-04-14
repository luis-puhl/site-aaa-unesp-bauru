import { Component, OnInit } from '@angular/core';

class HomeGestao {
	constructor(
		public modal: string,
		public img: string,
		public titulo: string,
	) { }
}

const HOME_GESTOES: HomeGestao[] = [
	{modal: 'modalGestaoAtual', img: '/img/gestoes/atual.png', titulo: 'Gestão Atual'},
	{modal: 'modalGestaoVelhaGuarda', img: '/img/gestoes/velha-guarda.png', titulo: 'Velha Guarda'},
];

@Component({
	selector: 'app-home-gestoes',
	templateUrl: './home-gestoes.component.html',
	styleUrls: ['./home-gestoes.component.css']
})
export class HomeGestoesComponent implements OnInit {
	public gestoes: HomeGestao[];

	constructor() { }

	ngOnInit() {
		this.gestoes = HOME_GESTOES;
	}

}
