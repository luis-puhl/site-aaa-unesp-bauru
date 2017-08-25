import * as firebase from 'firebase'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/fromEvent'

const userDataMapper = userData => (!!userData && {
  uid: userData.uid,
  data: {
    email: userData.email,
    emailVerified: userData.emailVerified,
    displayName: userData.displayName,
    isAnonymous: userData.isAnonymous,
    lastLogin: userData.lastLogin,
    phoneNumber: userData.phoneNumber,
    photoURL: userData.photoURL,
    providerId: userData.providerId,
    isAdmin: userData.isAdmin || false
  }
})

const databaseReferencesStore = {
  allUsersRef: false,
  currentAdminRef: false,
  currentUserRef: false,
  onAuthStateChangedListener: false,
  googleAuthProvider: false
}

export const UsersModule = {
  namespaced: true,
  state: {
    firebasePointers: {},
    currentUser: false,
    allUsers: []
  },
  getters: {
    firebasePointer (state, getters, rootState, rootGetters) {
      return key => state.firebasePointers[key] && databaseReferencesStore[key]
    },

    currentUser (state, getters, rootState, rootGetters) {
      return userDataMapper(state.currentUser)
    },
    allUsers (state, getters, rootState, rootGetters) {
      return state.allUsers
    },

    canEdit (state, getters, rootState, rootGetters) {
      return getters.currentUser.isAdmin
    },
    logedInMesage (state, getters, rootState, rootGetters) {
      if (getters.currentUser.displayName) {
        return 'Bem-vindo ' + getters.currentUser.displayName
      }
      return null
    }
  },
  mutations: {
    setFirebasePointer (state, payload) {
      console.trace('mutation: setFirebasePointer', payload)
      state.firebasePointers[payload.key] = !!payload.value
      databaseReferencesStore[payload.key] = payload.value
    },

    setCurrentUser (state, payload) {
      payload = userDataMapper(payload)
      console.trace('mutation: setCurrentUser', payload)
      state.currentUser = payload.data || false
    },
    setAllUsers (state, users) {
      console.trace('mutation: setAllUsers', users)
      state.allUsers = [state.currentUser]
    },
    logedOut (state) {
      console.trace('mutation: logedOut')
      state.currentUser = false
      state.allUsers = false
    }
  },
  actions: {
    login (context /*, payload */) {
      if (firebase.auth().currentUser) {
        return
      }
      context.dispatch('initAuthStateChangedListener')
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(
        () => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(
          (result) => {
            console.log('loged in with firebase', result)
            context.commit('setCurrentUser', result.user)
            context.dispatch('updateUserInfo')
          },
        ).catch(
          (error) => console.error(error)
        )
      ).catch(
        (error) => console.error(error)
      )
    },
    logout (context /*, payload */) {
      if (context.getters.currentUser) {
        context.commit('clearDatabaseRefs')
        firebase.auth().signOut().then(
          () => context.commit('logedOut')
        )
      }
    },
    fetchUser (context /*, payload */) {
      const currentUser = firebase.auth().currentUser
      console.log('fetchUser', currentUser)
      context.dispatch('initAuthStateChangedListener')
      context.commit('setCurrentUser', currentUser)
    },
    fetchAllUsers (context /*, payload */) {
      const users = new BehaviorSubject([firebase.auth().currentUser])
      const allUsersRef = firebase.database().ref('/users')
      context.commit('setFirebasePointer', {key: 'allUsersRef', value: allUsersRef})
      allUsersRef.on('value', (v) => users.next(v.val()))

      users
      .filter(users => !!users)
      .map(
        users => {
          if (!Array.isArray(users)) {
            users = Object.keys(users).map(key => ({key, ...users[key]}))
          }
          return users.filter(user => !!user)
        }
      )
      .subscribe(
        (users) => context.commit('setAllUsers', users)
      )
    },
    updateUserInfo (context, payload) {
      this.userData
      .map(
        user => ({...user, data: {...user.data, lastLogin: Date.now()}})
      )
      .subscribe(
        user => this.database.ref(`users/${user.uid}`).set(
          user.data,
          () => console.log({updateUserInfo__onComplete: user})
        )
        .then(
          () => this.database.ref(`users/${user.uid}`).once(
            'value',
            (v) => console.log({updateUserInfo__done: user, database: v, databaseVal: v.val()})
          )
        )
        .catch(
          (e) => console.log({updateUserInfo__error: e})
        ) &&
        console.log({updateUserInfo: user})
      )
    },
    onAuthStateChanged  (context, userAuth) {
      if (!userAuth) {
        return
      }
      const userRef = firebase.database().ref(`/users/${userAuth.uid}`)
      context.commit('setFirebasePointer', {key: 'userRef', value: userRef})
      userRef.on(
        'value',
        userDataSnapshot => {
          context.commit('setUserData', {...userAuth, ...userDataSnapshot.val()})
          const adminRef = firebase.database().ref(`/admins/${userAuth.uid}`)
          context.commit('setFirebasePointer', {key: 'adminRef', value: adminRef})
          adminRef.on(
            'value',
            (adminDataSnapshot) => context.commit(
              'setUserData',
              {
                ...userAuth,
                ...userDataSnapshot.val(),
                ...adminDataSnapshot.val(),
                isAdmin: true
              }
            )
          )
        }
      )
    },
    initAuthStateChangedListener (context, payload) {
      if (context.getters.firebasePointer('onAuthStateChangedListener')) {
        return
      }
      const onAuthStateChangedListener =
      firebase.auth().onAuthStateChanged(
        (newUserAuthStateChanged) => context.commit('setCurrentUser', newUserAuthStateChanged)
      )
      context.commit(
        'setFirebasePointer',
        {key: 'onAuthStateChangedListener', value: onAuthStateChangedListener}
      )
    },
    someAction (context, payload) {
      context.commit('someMutation', payload)
    }
  }
}
