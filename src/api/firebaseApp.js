import * as firebase from 'firebase'

import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'

import * as LocalData from '@/api/local-data'

export class AtleticaFirebaseApp {
  config = {
    apiKey: 'AIzaSyAP3Ad6_c_YZwUMWXEixUU4Uulg_jKV0HE',
    authDomain: 'aaa-unesp-bauru.firebaseapp.com',
    databaseURL: 'https://aaa-unesp-bauru.firebaseio.com',
    projectId: 'aaa-unesp-bauru',
    storageBucket: 'aaa-unesp-bauru.appspot.com',
    messagingSenderId: '69608239635'
  }
  databaseRootRef
  _postsSubject
  static _instance

  constructor () {
    // Initialize Firebase
    firebase.initializeApp(this.config)

    // this.storage = firebase.storage()
    this.auth = firebase.auth()
    this.database = firebase.database()

    this.databaseRootRef = this.database.ref('/new')
    this.googleAuthProvider = new firebase.auth.GoogleAuthProvider()
    // this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly')=
  }

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

  login () {
    const userSubject = new BehaviorSubject(null)
    firebase.auth().signInWithPopup(this.googleAuthProvider).then(
      (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        this.token = result.credential.accessToken
        // The signed-in user info.
        this.user = result.user
        // ...
        userSubject.next(this.user)
      }
    ).catch(
      (error) => {
        // Handle Errors here.
        this.errorCode = error.code
        this.errorMessage = error.message
        // The email of the user's account used.
        this.email = error.email
        // The firebase.auth.AuthCredential type that was used.
        this.credential = error.credential
        // ...
        throw error
      }
    )
    return userSubject.filter(user => user != null)
  }
}
