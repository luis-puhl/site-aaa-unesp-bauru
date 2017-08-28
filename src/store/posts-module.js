
export const PostsModule = {
  namespaced: true,
  state: {
    postTemplate: {
      key: null,
      id: 'novopost',
      nome: 'Titulo do Post',
      img: '',
      conteudoModal: 'Conteúdo do novo post :newspaper:'
    },
    dummyPost: {
      key: '404',
      id: '404',
      nome: 'Post Não encontrado',
      img: 'http://alozano.clas.uconn.edu/wp-content/uploads/sites/490/2017/01/deadlink.png',
      conteudoModal: '## O post que você procura não está aqui 😞.\n\n### [Melhor voltar para casa 🏠](/)'
    },
    currentPostId: '404',

    newPostKey: false,
    newPost: false,

    allPosts: []
  },
  getters: {
    viewPost (state, getters, rootState, rootGetters) {
      const post = rootGetters.posts.find(
        post => post.id === state.currentPostId || post.key === state.currentPostId
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
      state.allPosts = payload
    },

    postDeleted (state, payload) {
      state.allPosts = state.allPosts.filter(post => post.key !== payload.key)
    },
    editPost (state, payload) {
      state.editPost = payload
    }
  },
  actions: {
    fetchCurrentPostId (context, postKey) {
      context.commit('setCurrentPostId', postKey)

      context.dispatch('FirebaseModule/initFirebaseApp', null, { root: true })
      const firebase = context.rootGetters['FirebaseModule/firebaseInstance']
      return firebase.database().ref(`posts/${postKey}`).once(
        'value',
        postSnapshot => context.commit('updatePost', postSnapshot.val(), { root: true })
      )
      // context.dispatch('updatePost', viewPost)
    },
    updatePost (context, viewPost) {
      context.dispatch('FirebaseModule/initFirebaseApp', null, { root: true })
      const firebase = context.rootGetters['FirebaseModule/firebaseInstance']

      context.commit('updatePost', viewPost, { root: true })
      firebase.database().ref(`posts/${viewPost.key}`).update(
        viewPost
      )
    },

    addPost (context /*, payload */) {
      context.dispatch('FirebaseModule/initFirebaseApp', null, { root: true })
      const firebase = context.rootGetters['FirebaseModule/firebaseInstance']
      console.log('PostsModule addPost')

      const newPostKey = firebase.database().ref('posts/').push(
        context.state.postTemplate
      ).key
      context.commit('setNewPostKey', newPostKey)

      firebase.database().ref(`posts/${newPostKey}`).update({
        key: newPostKey
      })

      return firebase.database().ref(`posts/${newPostKey}`).once(
        'value',
        newPostSnapShot => context.commit('setNewPost', {...newPostSnapShot.val(), key: newPostKey})
      )
    },

    deletePost (context, payload) {
      context.dispatch('FirebaseModule/initFirebaseApp', null, { root: true })
      const firebase = context.rootGetters['FirebaseModule/firebaseInstance']

      firebase.database().ref(`posts/${payload.key}`).remove(
        () => {
          context.commit('postDeleted', payload)
          if (typeof payload.callMeBaby === 'function') {
            payload.callMeBaby()
          }
        }
      )
    },

    publishPost (context, payload) {
      context.dispatch('FirebaseModule/initFirebaseApp', null, { root: true })
      const firebase = context.rootGetters['FirebaseModule/firebaseInstance']

      firebase.database().ref(`public/${payload.key}`).set({ dataPublicacao: Date.now() })

      return firebase.database().ref(`sections/${payload.sectionKey}/postsKeys`).push({
        dataPublicacao: Date.now(),
        postKey: payload.key
      })
    }
  }
}
