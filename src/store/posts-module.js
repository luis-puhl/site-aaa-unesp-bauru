import * as firebase from 'firebase'

export const PostsModule = {
  namespaced: true,
  state: {
    dummyPost: {
      id: 0,
      nome: 'Titulo do Tile',
      class: 'tile-tile',
      img: '',
      conteudoModal: '# Conteúdo do post'
    },
    currentPostId: '',

    newPostKey: false,
    newPost: false,

    allPosts: []
  },
  getters: {
    dummyPost (state, getters, rootState, rootGetters) {
      return state.dummyPost
    },
    postById (state, getters, rootState, rootGetters) {
      return postId => {
        return rootState.posts.find(
          post => post.id === postId
        )
      }
    },
    postByIdOrDummy: (state, getters, rootState, rootGetters) => postId => {
      return getters.postById(postId) || getters.dummyPost
    },
    viewPost (state, getters, rootState, rootGetters) {
      return getters.postByIdOrDummy(state.currentPostId)
    },

    newPost (state, getters, rootState, rootGetters) {
      return state.newPost
    },

    allPostsSection (state, getters, rootState, rootGetters) {
      return {
        id: 'posts',
        nome: 'Todos os Posts',
        posts: [...state.allPosts]
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
      state.allPosts = payload
    }
  },
  actions: {
    fetchCurrentPostId (context, payload) {
      context.commit('setCurrentPostId', payload)
      context.dispatch('updatePost', context.getters.viewPost)
    },
    updatePost (context, payload) {
      firebase.database().ref(`new/posts/${payload.key}`).update(
        payload
      )
    },
    addPost (context /*, payload */) {
      const newPostKey = firebase.database().ref('new/posts/').push(
        context.state.dummyPost
      ).key
      context.commit('setNewPostKey', newPostKey)
      firebase.database().ref(`new/posts/${newPostKey}`).on(
        'value',
        newPostSnapShot => context.commit('setNewPost', {...newPostSnapShot.val(), key: newPostKey})
      )
      firebase.database().ref(`new/posts/${newPostKey}`).update(
        {...context.state.dummyPost, id: newPostKey}
      )
    },

    fetchAllPosts (context /*, payload */) {
      if (context.rootGetters.firebasePointer('allPostsRef')) {
        return
      }
      const allPostsRef = firebase.database().ref(`new/posts`)
      context.commit(
        'setFirebasePointer',
        {key: 'allPostsRef', value: allPostsRef},
        { root: true }
      )
      allPostsRef.on(
        'value',
        allPostsSnapShot => context.commit(
          'setAllPosts',
          Object.keys(allPostsSnapShot.val()).map(key => ({...allPostsSnapShot.val()[key], key}))
        )
      )
    }
  }
}
