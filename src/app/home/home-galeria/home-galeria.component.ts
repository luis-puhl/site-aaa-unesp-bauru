import { Component, OnInit } from '@angular/core';

import { HomeGaleria } from '../shared/galeria';
import { GaleriasService } from '../shared/galerias.service';

@Component({
	selector: 'app-home-galeria',
	templateUrl: './home-galeria.component.html',
	styleUrls: ['./home-galeria.component.css'],
	providers: [GaleriasService]
})
export class HomeGaleriaComponent implements OnInit {
	public galerias: HomeGaleria[];

	constructor(
		private galeriasService: GaleriasService
	) { }

	ngOnInit() {
		this.galeriasService.getHomeGalerias().then(galerias => this.galerias = galerias);
	}

}
