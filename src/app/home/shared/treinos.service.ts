import { Injectable } from '@angular/core';

import { Treino, HomeTreino, TREINO_MOCK } from './treino';

@Injectable()
export class TreinosService {

	constructor() { }

	getTreinos(): Promise<Treino[]> {
		return new Promise<Treino[]>( (resolve, reject) => resolve(TREINO_MOCK) );
	}

	getHomeTreinos(): Promise<HomeTreino[]> {
		return new Promise<HomeTreino[]>( (resolve, reject) => {
			return this.getTreinos().then(treinos => {
				return resolve(treinos.map(treino => {
					return new HomeTreino(treino.modalId, treino.img, treino.titulo);
				}));
			});
		});
	}

}
