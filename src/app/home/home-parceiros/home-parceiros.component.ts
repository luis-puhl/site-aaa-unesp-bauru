import { Component, OnInit } from '@angular/core';

import { HomeParceiro } from '../shared/parceiro';
import { ParceirosService } from '../shared/parceiros.service';

@Component({
	selector: 'app-home-parceiros',
	templateUrl: './home-parceiros.component.html',
	styleUrls: ['./home-parceiros.component.css'],
	providers: [ParceirosService]
})
export class HomeParceirosComponent implements OnInit {
	public parceiros: HomeParceiro[];

	constructor(
		private parceirosService: ParceirosService
	) { }

	ngOnInit() {
		this.parceirosService.getHomeParceiros().then(parceiros => this.parceiros = parceiros);
	}

}
