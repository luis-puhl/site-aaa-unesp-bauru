import { Component, OnInit } from '@angular/core';

import { HomeGestao } from '../shared/gestao';
import { BootstrapModalData } from '../bootstrap-modal/bootstrap-modal-data';
import { GestoesService } from '../shared/gestoes.service';

@Component({
	selector: 'app-home-gestoes',
	templateUrl: './home-gestoes.component.html',
	styleUrls: ['./home-gestoes.component.css'],
	providers: [GestoesService]
})
export class HomeGestoesComponent implements OnInit {
	public gestoes: HomeGestao[];
	public modalGestoes: BootstrapModalData[];

	constructor(
		private gestoesService: GestoesService
	) { }

	ngOnInit() {
		this.gestoesService.getHomeGestoes().then(gestoes => {
			this.gestoes = gestoes;
			this.modalGestoes = this.gestoes.map(gestao => {
				return new BootstrapModalData(
					gestao.modalId,
					gestao.img,
					gestao.titulo,
					gestao.titulo,
					gestao.titulo,
					''
				);
			});
		});
	}

}
