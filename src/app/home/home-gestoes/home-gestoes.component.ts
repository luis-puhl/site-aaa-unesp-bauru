import { Component, OnInit } from '@angular/core';

import { HomeGestao } from '../shared/gestao';
import { GestoesService } from '../shared/gestoes.service';
import { BootstrapModalData } from '../bootstrap-modal/bootstrap-modal-data';

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
		this.gestoesService.getHomeGestoes().then(gestoes => {
			this.gestoes = gestoes;
		});
	}

}
