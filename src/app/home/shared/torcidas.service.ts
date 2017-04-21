import { Injectable } from '@angular/core';

import { Torcida, HomeTorcida, TORCIDA_MOCK } from './torcida';

@Injectable()
export class TorcidasService {

	constructor() { }

	getTorcidas(): Promise<Torcida[]> {
		return new Promise<Torcida[]>( (resolve, reject) => resolve(TORCIDA_MOCK) );
	}

	getHomeTorcidas(): Promise<HomeTorcida[]> {
		return new Promise<HomeTorcida[]>( (resolve, reject) => {
			return this.getTorcidas().then(torcidas => {
				return resolve(torcidas.map(torcida => {
					return new HomeTorcida(torcida.modalId, torcida.img, torcida.titulo);
				}));
			});
		});
	}


}
