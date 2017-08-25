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

  get databaseRootRef () {
    return firebase.database().ref('/new')
  }

  getDatabaseRefs () {
    if (!this._databaseRefs) {
      this._databaseRefs = []
    }
    return this._databaseRefs
  }
  clearDatabaseRefs () {
    for (let databaseRef of this.getDatabaseRefs()) {
      if (databaseRef) {
        databaseRef.off()
      }
    }
    this._databaseRefs = []
  }

  /* ------------------------------------- POSTS ------------------------------------- */

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

}
