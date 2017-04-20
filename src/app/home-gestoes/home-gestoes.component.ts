import { Component, OnInit } from '@angular/core';

import { HomeGestao } from '../home-gestao';
import { GestoesService } from '../gestoes.service';

@Component({
	selector: 'app-home-gestoes',
	templateUrl: './home-gestoes.component.html',
	styleUrls: ['./home-gestoes.component.css'],
	providers: [GestoesService]
})
export class HomeGestoesComponent implements OnInit {
	public gestoes: HomeGestao[];

	constructor(
		private gestoesService: GestoesService
	) { }

	ngOnInit() {
		this.gestoesService.getHomeGestoes().then(gestoes => this.gestoes = gestoes);
	}

}
