/**
 * Essas depencias estão no `index.html`
 *
import Vue from 'vue/dist/vue.common.js';
import firebase from 'firebase/firebase.js';
import 'firebase/firebase-app.js';
import 'firebase/firebase-auth.js';
import 'firebase/firebase-database.js';
import 'firebase/firebase-storage.js';
// */

import FirebaseService from './firebase-service.js';

const AtleticaVueApp = {
  gestoesApp: new Vue({
    el: '#gestoes',
    data: {
      gestoes: [],
      init: function() {
        FirebaseService.init();
        FirebaseService.getGestoesObservable().subscribe(
          gestoes => {this.gestoes = gestoes ; console.log(gestoes);}
        );
      },
    }
  })
};

export default AtleticaVueApp;
