import { Injectable } from '@angular/core';

import { Produto, PRODUTO_MOCK } from './produto';
import { CarouselItem } from '../bootstrap-carousel/carousel-item';

@Injectable()
export class ProdutosService {

	getProdutos(): Promise<Produto[]> {
		return new Promise<Produto[]>( (resolve, reject) => resolve(PRODUTO_MOCK) );
	}

	getProdutosCarousel(): Promise<CarouselItem[]> {
		return new Promise<CarouselItem[]>( (resolve, reject) => {
			return this.getProdutos().then(produtos => {
				return resolve(produtos.map(produto => {
					return new CarouselItem(
							produto.dataSlide,
							produto.active,
							produto.img,
							produto.titulo,
							);
				}));
			});
		});
	}

}
