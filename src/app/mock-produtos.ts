import { Produto } from './produto';

export const PRODUTO_MOCK: Produto[] = [
	new Produto('modalProdutoCaneca',
			'/produto/2016/02/01/produto-caneca',
			'/img/produtos/caneca.png',
			'Caneca',
			true),
	new Produto('modalProdutoSambaCancao',
			'/produto/2016/02/01/produto-samba-cancao',
			'/img/produtos/samba-cancao.png',
			'Samba Canção',
			false),
	new Produto('modalProdutoChaveiro',
			'/produto/2016/02/01/produto-chaveiro',
			'/img/produto/chaveiro.png',
			'Chaveiro',
			false),
];
