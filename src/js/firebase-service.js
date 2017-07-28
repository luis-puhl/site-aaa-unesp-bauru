export default {
  config: {
    apiKey: "AIzaSyAP3Ad6_c_YZwUMWXEixUU4Uulg_jKV0HE",
    authDomain: "aaa-unesp-bauru.firebaseapp.com",
    databaseURL: "https://aaa-unesp-bauru.firebaseio.com",
    projectId: "aaa-unesp-bauru",
    storageBucket: "aaa-unesp-bauru.appspot.com",
    messagingSenderId: "69608239635"
  },
  getGestoesObservable: function() {
    if (!this.gestoesObservable) {
      console.log('init gestoesObservable');
      this.gestoesObservable = Rx.Observable
        .fromEvent(this.database.ref('gestoes/'), 'value')
        .map(snapshot => snapshot.val())
        // update da img quando o servidor de imagens responder
        // .map(gestao => storage.ref(gestao.img).getDownloadURL().then(url => gestao.img = url));
    }
    return this.gestoesObservable;
  },
  gestoes: [],
  init: function () {
    // Initialize Firebase
    firebase.initializeApp(this.config);
    this.database = firebase.database();
    this.storage = firebase.storage();
    this.gestoesObservable();
  }
}
