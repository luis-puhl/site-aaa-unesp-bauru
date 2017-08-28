import * as firebase from 'firebase'

export const PostsModule = {
  namespaced: true,
  state: {
    dummyPost: {
      id: null,
      nome: 'Post Não encontrado',
      class: '',
      img: 'http://alozano.clas.uconn.edu/wp-content/uploads/sites/490/2017/01/deadlink.png',
      conteudoModal: '## O post que você procura não está aqui 😞.\n\n### [Melhor voltar para casa 🏠](/)'
    },
    currentPostId: '',

    newPostKey: false,
    newPost: false,

    allPosts: []
  },
  getters: {
    viewPost (state, getters, rootState, rootGetters) {
      const post = rootState.posts.find(
        post => post.id === state.currentPostId
      )
      return post || state.dummyPost
    },

    newPost (state, getters, rootState, rootGetters) {
      return state.newPost
    },

    allPostsSection (state, getters, rootState, rootGetters) {
      return {
        id: 'posts',
        nome: 'Todos os Posts',
        posts: [...rootGetters.posts]
      }
    }
  },
  mutations: {
    setCurrentPostId (state, payload) {
      state.currentPostId = payload
    },

    setNewPostKey (state, payload) {
      state.newPostKey = payload
    },
    setNewPost (state, payload) {
      state.newPost = payload
    },

    setAllPosts (state, payload) {
      console.log('PostsModule setAllPosts', payload)
      state.allPosts = payload
    },

    postDeleted (state, payload) {
      state.allPosts = state.allPosts.filter(post => post.key !== payload.key)
    }
  },
  actions: {
    fetchCurrentPostId (context, payload) {
      context.commit('setCurrentPostId', payload)
      context.dispatch('updatePost', context.getters.viewPost)
    },
    updatePost (context, payload) {
      context.commit('FirebaseModule/initFirebaseApp', null, { root: true })
      firebase.database().ref(`posts/${payload.key}`).update(
        payload
      )
    },
    addPost (context /*, payload */) {
      context.commit('initFirebaseApp', null, { root: true })
      const newPostKey = firebase.database().ref('posts/').push(
        context.state.dummyPost
      ).key
      context.commit('setNewPostKey', newPostKey)
      firebase.database().ref(`posts/${newPostKey}`).once(
        'value',
        newPostSnapShot => context.commit('setNewPost', {...newPostSnapShot.val(), key: newPostKey})
      )
      firebase.database().ref(`posts/${newPostKey}`).update(
        {...context.state.dummyPost, id: newPostKey}
      )
    },

    deletePost (context, payload) {
      context.commit('initFirebaseApp', null, { root: true })
      firebase.database().ref(`posts/${payload.key}`).remove(
        () => {
          context.commit('postDeleted', payload)
          if (typeof payload.callMeBaby === 'function') {
            payload.callMeBaby()
          }
        }
      )
    }
  }
}
