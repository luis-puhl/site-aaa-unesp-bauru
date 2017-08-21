import * as firebase from 'firebase'

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

  constructor () {
    // Initialize Firebase
    firebase.initializeApp(this.config)
    this.database = firebase.database()
    this.storage = firebase.storage()
    this.databaseRootRef = this.database.ref('/new')
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
    return this._postsSubject
  }

  getPost (id) {
    return this.postsSubject.map(
      posts => posts.find(post => post.id === id)
    )
  }
  addPost (post) {
    const newPostKey = this.databaseRootRef.child('posts').push().key
    const updates = {
      ['posts/' + newPostKey]: post
    }
    this.databaseRootRef.update(updates)
  }
}
