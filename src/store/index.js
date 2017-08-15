import Vue from 'vue'
import Vuex from 'vuex'

import { getPosts } from '@/api/firebaseApp'

export const ADD_POST = 'ADD_POST'
export const FIND_POST = 'FIND_POST'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const AtleticaStore = new Vuex.Store({
  state: {
    dummyPost: {
      id: 0,
      nome: 'Titulo do Tile',
      class: 'tile-tile',
      img: '',
      conteudoModal: '# Conteúdo do post'
    }
  },
  getters: {
    /*
    posts: state => {
      return getPosts()
    },
    postById: (state, getters) => postId => {
      console.log({'postById->init': {state, getters, postId}})
      return getPost(postId)
    }
    */
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    getPosts ({ commit }) {
      getPosts().subscribe(
        posts => commit('setPosts', posts)
      )
    }
  },
  modules: {
  },
  strict: debug
})
