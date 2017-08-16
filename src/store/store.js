import Vue from 'vue'
import Vuex from 'vuex'

import * as FirebaseApp from '@/api/firebaseApp'

export const ADD_POST = 'ADD_POST'
export const FIND_POST = 'FIND_POST'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const AtleticaStore = new Vuex.Store({
  state: {
    sections: [],
    posts: [],
    dummyPost: {
      id: 0,
      nome: 'Titulo do Tile',
      class: 'tile-tile',
      img: '',
      conteudoModal: '# Conteúdo do post'
    }
  },
  getters: {
    sections: state => {
      console.log('getter: sections')
      return state.sections
    },
    postById: (state, getters) => postId => {
      const currentPostInStore = state.posts.find(
        post => post.id === postId
      )
      console.log({'getter: postById': {state, getters, postId, currentPostInStore}})
      return currentPostInStore
    },
    dummyPost: state => {
      console.log('getter: dummyPost')
      return state.dummyPost
    },
    postByIdOrDummy: (state, getters) => postId => {
      console.log('getter: postByIdOrDummy')
      return getters.postById(postId) || getters.dummyPost
    }
  },
  mutations: {
    setPosts (state, posts) {
      console.log({'mutation: setPosts': {state, posts}})
      state.posts = posts
    },
    fetchPost (state, post) {
      console.log({'mutation: fetchPost': {state, post}})
      // drop the old post by its ID
      state.posts = state.posts.filter(
        statePost => statePost.id !== post.id
      )
      state.posts.push(post)
    },
    setSections (state, sections) {
      console.log({'mutation: setSections': {state, sections}})
      state.sections = sections
    }
  },
  actions: {
    getSections (context) {
      FirebaseApp.getSections().subscribe(
        sections => context.commit('setSections', sections)
      )
    },
    getPosts (context) {
      FirebaseApp.getPosts().subscribe(
        posts => context.commit('setPosts', posts)
      )
    },
    getPost (context, postId) {
      console.log('action: getPost #' + postId)
      if (!context.getters.postById(postId)) {
        // fill posts with this post
        FirebaseApp.getPost(postId).subscribe(
          post => context.commit('fetchPost', post)
        )
      }
    }
  },
  modules: {},
  strict: debug
})
