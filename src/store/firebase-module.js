import * as firebase from 'firebase'

const databaseReferencesStore = {
  allUsersRef: false,
  currentAdminRef: false,
  currentUserRef: false,
  onAuthStateChangedListener: false,
  googleAuthProvider: false
}

export const FirebaseModule = {
  namespaced: true,
  state: {
    firebasePointers: {},
    firebaseConfig: {
      apiKey: 'AIzaSyAP3Ad6_c_YZwUMWXEixUU4Uulg_jKV0HE',
      authDomain: 'aaa-unesp-bauru.firebaseapp.com',
      databaseURL: 'https://aaa-unesp-bauru.firebaseio.com',
      projectId: 'aaa-unesp-bauru',
      storageBucket: 'aaa-unesp-bauru.appspot.com',
      messagingSenderId: '69608239635'
    },
    firebaseInstance: false
  },
  getters: {
    firebaseInstance (state, getters) {
      if (state.firebaseInstance) {
        return firebase
      }
      const error = {mesage: 'firebase not initilized'}
      console.trace(error)
      return state.firebaseInstance
    },
    firebasePointer (state, getters) {
      return key => state.firebasePointers[key] && databaseReferencesStore[key]
    }
  },
  mutations: {
    setFirebaseApp (state, firebaseApp) {
      if (!state.firebaseInstance) {
        state.firebaseInstance = true
      }
    },
    setFirebasePointer (state, payload) {
      state.firebasePointers[payload.key] = !!payload.value
      databaseReferencesStore[payload.key] = payload.value
    },
    clearDatabaseRefs (state /*, payload */) {
      const privateRefs = [
        'allUsersRef',
        'currentAdminRef',
        'currentUserRef',
        'allPostsRef'
      ]
      for (let key of privateRefs) {
        if (!state.firebasePointers[key]) {
          continue
        }
        databaseReferencesStore[key].off()
        state.firebasePointers[key] = false
      }
    }
  },
  actions: {
    initFirebaseApp (context /*, payload */) {
      if (!context.state.firebaseInstance) {
        context.commit('setFirebaseApp', firebase.initializeApp(context.state.firebaseConfig))
      }
    }
  }
}
