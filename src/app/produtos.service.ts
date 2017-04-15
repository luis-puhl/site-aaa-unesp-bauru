import { Injectable } from '@angular/core';

import { Produto } from './produto';
import { HomeProduto } from './home-produto';
import { PRODUTO_MOCK } from './mock-produtos';


@Injectable()
export class ProdutosService {

	getProdutos(): Promise<Produto[]> {
		return new Promise<Produto[]>( (resolve, reject) => resolve(PRODUTO_MOCK) );
	}

	getHomeProdutos(): Promise<HomeProduto[]> {
		return new Promise<HomeProduto[]>( (resolve, reject) => {
			return this.getProdutos().then(produtos => {
				return resolve(produtos.map(produto => {
					return new HomeProduto(
							produto.modalId,
							produto.dataSlide,
							produto.img,
							produto.titulo,
							produto.active);
				}));
			});
		});
	}

}
