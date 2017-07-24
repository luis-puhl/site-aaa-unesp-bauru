import Vue from 'vue/dist/vue.common.js';
import firebase from 'firebase/firebase.js';
import 'firebase/firebase-app.js';
import 'firebase/firebase-auth.js';
import 'firebase/firebase-database.js';
import 'firebase/firebase-storage.js';

let gestoes = [];

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
		gestoes: [],
	}
})


// Initialize Firebase
var config = {
	apiKey: "AIzaSyAP3Ad6_c_YZwUMWXEixUU4Uulg_jKV0HE",
	authDomain: "aaa-unesp-bauru.firebaseapp.com",
	databaseURL: "https://aaa-unesp-bauru.firebaseio.com",
	projectId: "aaa-unesp-bauru",
	storageBucket: "aaa-unesp-bauru.appspot.com",
	messagingSenderId: "69608239635"
};
firebase.initializeApp(config);

var database = firebase.database();
var storage = firebase.storage();

let gestoesRef = firebase.database().ref('gestoes/');
gestoesRef.on('value', function(snapshot) {
	gestoes = snapshot.val();
	gestoes.map(
		gestao => storage.ref(gestao.img).getDownloadURL().then(url => gestao.img = url)
	);
	gestoesApp.gestoes = gestoes;
});
