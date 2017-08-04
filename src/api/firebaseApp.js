
const firebaseApp = {
  config: {
    apiKey: 'AIzaSyAP3Ad6_c_YZwUMWXEixUU4Uulg_jKV0HE',
    authDomain: 'aaa-unesp-bauru.firebaseapp.com',
    databaseURL: 'https://aaa-unesp-bauru.firebaseio.com',
    projectId: 'aaa-unesp-bauru',
    storageBucket: 'aaa-unesp-bauru.appspot.com',
    messagingSenderId: '69608239635'
  },
  init: function () {
    // Initialize Firebase
    firebase.initializeApp(this.config)
    this.database = firebase.database()
    this.storage = firebase.storage()
  }
}

firebaseApp.init()

export default firebaseApp
