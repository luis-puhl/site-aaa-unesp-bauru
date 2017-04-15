import { Component, OnInit } from '@angular/core';

import { TreinosService } from '../treinos.service';
import { HomeTreino } from '../home-treino';

@Component({
	selector: 'app-home-treinos',
	templateUrl: './home-treinos.component.html',
	styleUrls: ['./home-treinos.component.css'],
	providers: [TreinosService]
})
export class HomeTreinosComponent implements OnInit {
	public treinos: HomeTreino[];

	constructor(
		private treinosService: TreinosService
	) { }

	ngOnInit() {
		this.treinosService.getHomeTreinos().then(treinos => this.treinos = treinos);
	}

}
