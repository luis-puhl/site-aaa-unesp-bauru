import * as firebase from 'firebase'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'

import { sections } from '@/api/local-data'

export const FirebaseApp = {
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

FirebaseApp.init()

export const firebaseDatabase = FirebaseApp.database
export const firebaseStorage = FirebaseApp.storage

export function getSections () {
  console.log('FirebaseApp: getSections')
  return new BehaviorSubject(sections)
}

export function getPosts () {
  console.log('FirebaseApp: getPosts')
  const posts = sections.reduce(
    (posts, section) => posts.concat(section.items),
    []
  )
  const postsSubject = new BehaviorSubject(posts)
  FirebaseApp.database.ref('/gestoes').on(
    'value',
    dataSnapshot => {
      const data = dataSnapshot.val()
      console.log({'getPosts firebaseResult': data})
      postsSubject.next(data)
    }
  )
  return postsSubject.filter(value => value !== null)
}

export function getPost (id) {
  console.log('FirebaseApp: getPost')
  const posts = sections.reduce(
    (posts, section) => posts.concat(section.items),
    []
  )
  const postsSubject = new BehaviorSubject(posts.find(post => post.id === id))
  FirebaseApp.database.ref(`/gestoes`).on(
    'value',
    dataSnapshot => {
      const data = dataSnapshot.val()
      console.log({'getPost': id, 'firebaseResult': data})
      postsSubject.next(data.find(post => post.id === id))
    }
  )
  return postsSubject.filter(value => value !== null)
}
