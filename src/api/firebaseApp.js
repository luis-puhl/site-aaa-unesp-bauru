import * as firebase from 'firebase'

import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/fromEvent'

import * as LocalData from '@/api/local-data'

export class AtleticaFirebaseApp {

  static _instance
  static getInstance () {
    self.instance
  }
  static get instance () {
    if (!self._instance) {
      self._instance = new AtleticaFirebaseApp()
    }
    window.firebaseapp = self._instance
    return self._instance
  }

  constructor () {
    // Initialize Firebase
    firebase.initializeApp(this.config)

    this.auth = firebase.auth()
    this.database = firebase.database()

    // this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly')=
  }

  config = {
    apiKey: 'AIzaSyAP3Ad6_c_YZwUMWXEixUU4Uulg_jKV0HE',
    authDomain: 'aaa-unesp-bauru.firebaseapp.com',
    databaseURL: 'https://aaa-unesp-bauru.firebaseio.com',
    projectId: 'aaa-unesp-bauru',
    storageBucket: 'aaa-unesp-bauru.appspot.com',
    messagingSenderId: '69608239635'
  }
  _postsSubject

  get databaseRootRef () {
    return firebase.database().ref('/new')
  }

  _googleAuthProvider
  get googleAuthProvider () {
    if (!this._googleAuthProvider) {
      this._googleAuthProvider = new firebase.auth.GoogleAuthProvider()
    }
    return this._googleAuthProvider
  }

  get staticSections () {
    return LocalData.sections
  }
  get staticPosts () {
    return LocalData.sections.reduce(
      (posts, section) => posts.concat(section.items),
      []
    )
  }

  getSections () {
    return new BehaviorSubject(this.staticSections)
  }

  get postsSubject () {
    if (this._postsSubject) {
      return this._postsSubject
    }
    const posts = this.staticPosts
    const postsSubject = new BehaviorSubject(posts)
    this.databaseRootRef.child('posts').on(
      'value',
      dataSnapshot => {
        const data = dataSnapshot.val()
        postsSubject.next(data)
      }
    )
    this._postsSubject = postsSubject.filter(value => value !== null)
    .map(posts => Object.keys(posts).map(key => ({key, ...posts[key]})))
    return this._postsSubject
  }

  getPost (id) {
    return this.postsSubject.map(
      posts => posts.find(post => post.id === id)
    )
  }
  addPost (post) {
    post.key = this.databaseRootRef.child('posts').push().key
    const updates = {
      ['posts/' + post.key]: post
    }
    return Observable.fromPromise(this.databaseRootRef.update(updates))
  }
  updatePost (post) {
    if (!post || !post.key) {
      return
    }
    const updates = {
      ['posts/' + post.key]: post
    }
    this.databaseRootRef.update(updates)
  }

  get allUsers () {
    const users = new BehaviorSubject(null)
    firebase.database().ref('/users').on('value', (v) => users.next(v.val()))

    return users
      .filter(v => v !== null)
      .map(users => Object.keys(users).map(
        key => ({key, ...users[key]})
      ))
  }

  /**
   * displayName: (...)
   * email: (...)
   * phoneNumber: (...)
   * photoURL: (...)
   * providerId: (...)
   * uid: (...)
   */
  _userData = false
  get userData () {
    if (!this._userData) {
      this._userData = new BehaviorSubject(null)
      firebase.auth().onAuthStateChanged(
        (user) => this._userData.next(user)
      )
    }
    return this._userData
      .filter(v => v !== null)
      .map(
        userData => ({
          uid: userData.uid,
          data: {
            ...userData.providerData[0]
          }
        })
      )
  }

  login () {
    if (firebase.auth().currentUser) {
      return this.userData
    }
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(
      // () => firebase.auth().signInWithRedirect(this.googleAuthProvider)
      () => firebase.auth().signInWithPopup(this.googleAuthProvider)
      .then(
        (result) => {
          this.updateUserInfo()
          this._userData.next(result.user)
        }
      ).catch(
        (error) => console.error(error)
      )
    ).catch(
      (error) => console.error(error)
    )
    return this.userData
  }

  logout () {
    if (this.userData) {
      return firebase.auth().signOut()
    }
  }

  updateUserInfo () {
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
        () => this.database.ref(`users/${user.uid}`).once('value', (v) => console.log({updateUserInfo__done: user, database: v, databaseVal: v.val()}))
      )
      .catch(
        (e) => console.log({updateUserInfo__error: e})
      ) &&
      console.log({updateUserInfo: user})
    )
  }
}
