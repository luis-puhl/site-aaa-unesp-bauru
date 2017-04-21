import { Injectable } from '@angular/core';

import { Parceiro, HomeParceiro, PARCEIROS_MOCK } from './parceiro';

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
