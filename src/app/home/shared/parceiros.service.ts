import { Injectable } from '@angular/core';

import { Parceiro } from './parceiro';
import { HomeParceiro } from './home-parceiro';
import { PARCEIROS_MOCK } from './mock-parceiros';

@Injectable()
export class ParceirosService {

	getParceiros(): Promise<Parceiro[]> {
		return new Promise<Parceiro[]>( (resolve, reject) => resolve(PARCEIROS_MOCK) );
	}

	getHomeParceiros(): Promise<HomeParceiro[]> {
		return new Promise<HomeParceiro[]>( (resolve, reject) => {
			return this.getParceiros().then(parceiros => {
				return resolve(parceiros.map(parceiro => {
					return new HomeParceiro(parceiro.modalId, parceiro.img, parceiro.titulo);
				}));
			});
		});
	}

}
