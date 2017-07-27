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

export default {
  config: {
    apiKey: "AIzaSyAP3Ad6_c_YZwUMWXEixUU4Uulg_jKV0HE",
    authDomain: "aaa-unesp-bauru.firebaseapp.com",
    databaseURL: "https://aaa-unesp-bauru.firebaseio.com",
    projectId: "aaa-unesp-bauru",
    storageBucket: "aaa-unesp-bauru.appspot.com",
    messagingSenderId: "69608239635"
  },
  gestoesObservable: function() {
    let observable = new Observable();
    this.database.ref('gestoes/').gestoesRef.on(
      'value',
      function(snapshot) {
        this.gestoes = snapshot.val();
        this.foreach(
          // update da img quando o servidor de imagens responder
          gestao => storage.ref(gestao.img).getDownloadURL().then(url => gestao.img = url)
        );
      }
    );
    return
  },
  gestoes: [],
  init: function () {
    // Initialize Firebase
    firebase.initializeApp(this.config);

    this.database = firebase.database();
    this.storage = firebase.storage();

    let gestoesRef = firebase.database().ref('gestoes/');
    gestoesRef.on('value', function(snapshot) {
      this.gestoes = snapshot.val();
      this.foreach(
        // update da img quando o servidor de imagens responder
        gestao => storage.ref(gestao.img).getDownloadURL().then(url => gestao.img = url)
      );
    });
  }
}
