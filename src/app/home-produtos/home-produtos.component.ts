import { Component, OnInit } from '@angular/core';

import { HomeProduto } from '../home-produto';
import { ProdutosService } from '../produtos.service';

@Component({
	selector: 'app-home-produtos',
	templateUrl: './home-produtos.component.html',
	styleUrls: ['./home-produtos.component.css'],
	providers: [ProdutosService]
})
export class HomeProdutosComponent implements OnInit {
	public produtos: HomeProduto[];

	constructor(
		private produtosService: ProdutosService
	) { }

	ngOnInit() {
		this.produtosService.getHomeProdutos().then(produtos => this.produtos = produtos);
	}


}
