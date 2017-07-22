let gestoes = [
	{
		id: 'gestao-2017',
		nome: 'Gestão 2017',
		img: 'img/gestoes/2016-Gaia-0.jpg',
		conteudoModal: `# Gestão 2017`,
	},
	{
		id: 'gestao-2016',
		nome: 'Gestão 2016',
		img: 'img/gestoes/2016-Gaia-1.jpg',
		conteudoModal: `# Gestão 2016`,
	},
	{
		id: 'gestao-2015',
		nome: 'Gestão 2015',
		img: 'img/gestoes/2015-Ânima.jpg',
		conteudoModal: `# Gestão 2015`,
	},
	{
		id: 'gestao-2014',
		nome: 'Gestão 2014',
		img: 'img/gestoes/2014-Invictus.jpg',
		conteudoModal: `# Gestão 2014`,
	},
	{
		id: 'gestao-2011',
		nome: 'Gestão 2011',
		img: 'img/gestoes/2011-XV-de-ouro.jpg',
		conteudoModal: `# Gestão 2011`,
	},
	{
		id: 'gestao-2010',
		nome: 'Gestão 2010',
		img: 'img/gestoes/2010.jpg',
		conteudoModal: `# Gestão 2010`,
	},
	{
		id: 'gestao-2003',
		nome: 'Gestão 2003',
		img: 'img/gestoes/2003.jpg',
		conteudoModal: `# Gestão 2003`,
	},
	{
		id: 'gestao-2001',
		nome: 'Gestão 2001',
		img: 'img/gestoes/2001-xxxx.jpg',
		conteudoModal: `# Gestão 2001`,
	},
];

Vue.component('gestao-item', {
	props: ['gestao'],
	template: `
<div class="col-sm-6 grid-item tile-gestao">
	<a v-bind:href="'#modal-' + gestao.id" class="grid-link" data-toggle="modal">
		<div class="grid-caption">
			<div class="grid-caption-content">
				<i class="fa fa-search-plus fa-3x"></i>
			</div>
		</div>
		<img v-bind:src="gestao.img" class="img-responsive" v-bind:alt="gestao.img">
		<h3 class="grid-title">{{ gestao.nome }}</h3>
	</a>
</div>`,
});

Vue.component('atletica-modal', {
	props: ['item'],
	template: `
<div class="portfolio-modal modal fade" v-bind:id="'modal-' + item.id" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-content">
		<div class="close-modal" data-dismiss="modal">
			<div class="lr">
				<div class="rl">
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<div class="modal-body">
						<h2>{{ item.nome }}</h2>
						<hr class="star-primary">
						<img v-bind:src=" item.img " class="img-responsive img-centered" alt="">

						<div v-html="compiledMarkdown"></div>

						<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`,
	computed: {
		compiledMarkdown: function () {
			return marked(this.item.conteudoModal, { sanitize: true })
		}
	},
});


var gestoesApp = new Vue({
	el: '#gestoes',
	data: {
		gestoes: gestoes,
	}
})
