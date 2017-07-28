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
