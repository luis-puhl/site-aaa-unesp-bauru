import * as firebase from 'firebase'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/fromEvent'

function userDataMapper (userData) {
  return (!!userData && {
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
      profile: userData.profile,
      isAdmin: userData.isAdmin || false,
      ...userData.data
    }
  })
}

function userDataValidator (userData) {
  if (userData === false) {
    return true
  }

  if (!userData) {
    console.error('userData is not valid', userData)
    return false
  }

  const mainKeys = ['uid', 'data']
  const userKeys = Object.keys(userData).sort()
  const hasMainKeys = mainKeys.every(
    (element, index, array) => userKeys.indexOf(element) !== -1
  )
  if (!hasMainKeys) {
    console.error('userData is not valid, no main Keys found', userData, mainKeys)
    return false
  }

  const dataKeys = [
    'email',
    'emailVerified',
    'displayName',
    'isAnonymous',
    // 'lastLogin',
    // 'phoneNumber',
    'photoURL',
    'providerId',
    'profile',
    'isAdmin'
  ]
  const userDataKeys = Object.keys(userData.data).sort()
  const hasDataKeys = dataKeys.every(
    (element, index, array) => userDataKeys.indexOf(element) !== -1
  )
  if (!hasDataKeys) {
    console.error('userData is not valid, no data Keys found', userData, dataKeys)
    return false
  }
  return true
}

export const UsersModule = {
  namespaced: true,
  state: {
    currentUser: false,
    allUsers: []
  },
  getters: {
    currentUser (state, getters, rootState, rootGetters) {
      const currentUser = userDataMapper(state.currentUser)
      return userDataValidator(currentUser) ? currentUser : false
    },
    allUsers (state, getters, rootState, rootGetters) {
      const allUsers = state.allUsers.filter(user => !!user)
      // console.log('UsersModule getters allUsers', allUsers)
      return allUsers
      .filter(user => user.uid !== state.currentUser.uid)
      .concat([state.currentUser])
    },

    canEdit (state, getters, rootState, rootGetters) {
      try {
        return getters.currentUser.data.isAdmin
      } catch (e) { }
      return false
    },
    logedInMesage (state, getters, rootState, rootGetters) {
      try {
        return 'Bem-vindo ' + getters.currentUser.data.displayName
      } catch (e) { }
      return null
    }
  },
  mutations: {
    setCurrentUser (state, payload) {
      payload = userDataMapper(payload)
      // console.log('mutation: setCurrentUser', payload)
      state.currentUser = userDataValidator(payload) ? payload : false
    },
    setAllUsers (state, users) {
      // console.log('mutation: setAllUsers', users)
      if (!users) {
        users = [state.currentUser]
      }
      state.allUsers = users.filter(user => user.uid !== state.currentUser.uid)
    },
    logedOut (state) {
      // console.log('mutation: logedOut')
      state.currentUser = false
      state.allUsers = []
      // clearDatabaseRefs
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
            // console.log('loged in with firebase', result)
            const updatedUser = {...result.user, lastLogin: Date.now(), ...result.additionalUserInfo}
            context.commit('setCurrentUser', updatedUser)
            context.dispatch('updateUserInfo')
            context.dispatch('fetchAllUsers')
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
        firebase.auth().signOut().then(
          () => {
            context.commit('logedOut')
            context.commit('clearDatabaseRefs', null, { root: true })
          }
        )
      }
    },

    fetchUser (context /*, payload */) {
      // if (context.state.currentUser) {
      //   return
      // }
      // const currentUser = firebase.auth().currentUser
      // console.log('fetchUser', currentUser)
      context.dispatch('initAuthStateChangedListener')
      // context.commit('setCurrentUser', currentUser)
    },
    fetchAllUsers (context /*, payload */) {
      const users = new BehaviorSubject([])
      const allUsersRef = firebase.database().ref('/users')
      context.commit('setFirebasePointer', {key: 'allUsersRef', value: allUsersRef}, { root: true })
      allUsersRef.on('value', (allUsersDataSnapShot) => users.next(allUsersDataSnapShot.val()))

      users
      .filter(users => !!users)
      .map(
        users => {
          if (!Array.isArray(users)) {
            users = Object.keys(users).map(key => ({uid: key, data: {...users[key]}}))
          }
          return users.filter(user => !!user)
        }
      )
      .subscribe(
        (users) => context.commit('setAllUsers', users)
      )
    },

    updateUserInfo (context /*, payload */) {
      const user = context.getters.currentUser
      const data = {}
      for (var key in user.data) {
        if (user.data.hasOwnProperty(key)) {
          if (user.data[key]) {
            data[key] = user.data[key]
          }
        }
      }
      firebase.database().ref(`users/${user.uid}`).set(
        data
        // ,
        // () => firebase.database().ref(`users/${user.uid}`).once(
        //   'value',
        //   (v) => console.log('UsersModule actions updateUserInfo__done', v.val())
        // )
      )
    },
    onAuthStateChanged  (context, payload) {
      const userAuth = payload
      if (!userAuth) {
        return
      }
      // recupera os dados do usuário
      const userRef = firebase.database().ref(`/users/${userAuth.uid}`)
      context.commit('setFirebasePointer', {key: 'userRef', value: userRef}, { root: true })
      userRef.on(
        'value',
        userDataSnapshot => context.dispatch('onAuthStateChangedUser', {userAuth, userDataSnapshot})
      )
    },
    onAuthStateChangedUser (context, payload) {
      const {userAuth, userDataSnapshot} = payload
      context.commit('setCurrentUser', {...userAuth, ...userDataSnapshot.val()})
      // recupera os dados do administrador
      const adminRef = firebase.database().ref(`/admins/${userAuth.uid}`)
      context.commit('setFirebasePointer', {key: 'adminRef', value: adminRef}, { root: true })
      adminRef.on(
        'value',
        (adminDataSnapshot) => context.dispatch('onAuthStateChangedAdmin', {userAuth, userDataSnapshot, adminDataSnapshot})
      )
    },
    onAuthStateChangedAdmin (context, payload) {
      const {userAuth, userDataSnapshot, adminDataSnapshot} = payload
      context.commit(
        'setCurrentUser',
        {
          ...userAuth,
          ...userDataSnapshot.val(),
          ...adminDataSnapshot.val(),
          isAdmin: true
        }
      )
    },
    initAuthStateChangedListener (context, payload) {
      if (context.rootGetters.firebasePointer('onAuthStateChangedListener')) {
        return
      }
      const onAuthStateChangedListener =
      firebase.auth().onAuthStateChanged(
        (newUserAuthStateChanged) => {
          context.commit('setCurrentUser', newUserAuthStateChanged)
          context.dispatch('onAuthStateChanged', newUserAuthStateChanged)
        }
      )
      context.commit(
        'setFirebasePointer',
        {key: 'onAuthStateChangedListener', value: onAuthStateChangedListener},
        { root: true }
      )
    }
  }
}
