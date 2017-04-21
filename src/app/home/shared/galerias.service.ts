import { Injectable } from '@angular/core';

import { Galeria, HomeGaleria, GALERIA_MOCK } from './galeria';

@Injectable()
export class GaleriasService {

	public getGalerias(): Promise<Galeria[]> {
		return new Promise<Galeria[]>( (resolve, reject) => resolve(GALERIA_MOCK) );
	}

	public getHomeGalerias(): Promise<HomeGaleria[]> {
		return new Promise<HomeGaleria[]>( (resolve, reject) => {
			return this.getGalerias().then(galerias => {
				return resolve(galerias.map(galeria => {
					return new HomeGaleria(galeria.modalId, galeria.img, galeria.titulo);
				}));
			});
		});
	}


}
