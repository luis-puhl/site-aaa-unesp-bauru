import { Component, OnInit } from '@angular/core';

import { CarouselItem } from '../bootstrap-carousel/carousel-item';
import { ProdutosService } from '../shared/produtos.service';

@Component({
	selector: 'app-home-produtos',
	templateUrl: './home-produtos.component.html',
	styleUrls: ['./home-produtos.component.css'],
	providers: [ProdutosService]
})
export class HomeProdutosComponent implements OnInit {
	public produtosCarousel: CarouselItem[];

	constructor(
		private produtosService: ProdutosService
	) { }

	ngOnInit() {
		this.produtosService.getProdutosCarousel().then(produtos => this.produtosCarousel = produtos);
	}


}
