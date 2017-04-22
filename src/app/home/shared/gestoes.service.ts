import { Injectable } from '@angular/core';

import { Gestao, HomeGestao, GESTOES_MOCK } from './gestao';
import { BootstrapModalData } from '../bootstrap-modal/bootstrap-modal-data';

@Injectable()
export class GestoesService {

	public getGestoes(): Promise<Gestao[]> {
		return new Promise<Gestao[]>( (resolve, reject) => resolve(GESTOES_MOCK) );
	}

	public getHomeGestoes(): Promise<HomeGestao[]> {
		return new Promise<HomeGestao[]>( (resolve, reject) => {
			return this.getGestoes().then(gestoes => {
				return resolve(gestoes.map(gestao => {
					return new HomeGestao(gestao.modalId, gestao.img, gestao.title);
				}));
			});
		});
	}

}
