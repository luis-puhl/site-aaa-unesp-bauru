const _gestoes = [
  {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2},
  {'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10},
  {'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5}
]

import firebaseapp from './firebaseApp'

export default {
  getGestoesObservable: function () {
    if (!this.gestoesObservable) {
      console.log('init gestoesObservable')
      this.gestoesObservable = Rx.Observable
        .fromEvent(firebaseapp.database.ref('gestoes/'), 'value')
        .map(snapshot => snapshot.val())
        // update da img quando o servidor de imagens responder
        // .map(gestao => storage.ref(gestao.img).getDownloadURL().then(url => gestao.img = url));
    }
    return this.gestoesObservable
  },
  gestoes: [],
  getGestoes (cb) {
    setTimeout(() => cb(_gestoes), 100)
  }
}
