import { Component, OnInit } from '@angular/core';

import { HomeGaleria } from '../shared/galeria';
import { GaleriasService } from '../shared/galerias.service';
import { BootstrapModalData } from '../bootstrap-modal/bootstrap-modal-data';

@Component({
	selector: 'app-home-galeria',
	templateUrl: './home-galeria.component.html',
	styleUrls: ['./home-galeria.component.css'],
	providers: [GaleriasService]
})
export class HomeGaleriaComponent implements OnInit {
	public galerias: HomeGaleria[];
	public modalGestoes: BootstrapModalData[];

	constructor(
		private galeriasService: GaleriasService
	) { }

	ngOnInit() {
		this.galeriasService.getHomeGalerias().then(galerias => this.galerias = galerias);
	}

}
