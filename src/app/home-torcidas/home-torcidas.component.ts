import { Component, OnInit } from '@angular/core';

import { HomeTorcida } from '../home-torcida';
import { TorcidasService } from '../torcidas.service';

@Component({
	selector: 'app-home-torcidas',
	templateUrl: './home-torcidas.component.html',
	styleUrls: ['./home-torcidas.component.css'],
	providers: [TorcidasService]
})
export class HomeTorcidasComponent implements OnInit {
	public torcidas: HomeTorcida[];

	constructor(
		private torcidasService: TorcidasService
	) { }

	ngOnInit() {
		this.torcidasService.getHomeTorcidas().then(torcidas => this.torcidas = torcidas);
	}

}
