<template>
  <main>
    <h1>Editar post</h1>

    <div class="loading" v-if="loading">
      Aguarde, carregando post...
    </div>
    <div class="form" v-else>
      <form class="edit-post">
        <button type="button" name="button" class="btn btn-default">
          Publicar
        </button>
        <hr>

        <label>
          Key:<br>
          <input type="text" size="60" id="postKey" name="key" v-model="editPost.key" readonly>
        </label>
        <br>

        <label>
          Id:<br>
          <input type="text" size="60" id="postId" name="titulo" v-model="editPost.id" @input="edit">
        </label>
        <br>

        <label>
          Título:<br>
          <input type="text" size="60" id="postTitle" name="titulo" v-model="editPost.nome" @input="edit">
        </label>
        <br>

        <label>
          Imagem:<br>
          <input type="text" size="60" id="imagem" name="imagem" v-model="editPost.img" @input="edit">
        </label>
        <br>

        <label class="select-section">
          Seção:<br>
          <select id="postSection" name="postSection">
            <option value="option">option</option>
          </select>
        </label>
        <br>

        <label>
          Post:<br>
          <small>
            <a href="https://markdown-it.github.io/">Como utlizar esse editor</a>
            ou
            <a href="https://www.webpagefx.com/tools/emoji-cheat-sheet/">mais emojis 😄</a>
          </small>
          <textarea id="editarConteudoModal" name="conteudoModal" placeholder="add multiple lines"
             rows="50" cols="60" v-model="editPost.conteudoModal" @input="edit"/>
        </label>
        <br>

        <br>
        <button type="button" name="button" class="btn btn-default" @click="postDeleteAlert = !postDeleteAlert">
          Apagar post
        </button>
        <div class="postDeleteAlert alert alert-danger" role="alert" v-if="postDeleteAlert">
          <p>Por favor, confirme que quer apagar essa postagem.</p>
          <p>Sabemos que você tem seus motivos, mas lembre-se que:</p>
          <blockquote cite="https://en.wikipedia.org/wiki/Uncle_Ben#.22With_great_power_comes_great_responsibility.22">
            Com grandes poderes, vem grandes resposabilidades.
          </blockquote>
          <button type="button" name="button" class="btn btn-lg btn-warning" @click="apagarPost">
            Apagar post! Sem misericórdia!
          </button>
        </div>
      </form>
    </div>

    <atletica-post-view id="post" v-if="sourcePost" v-bind:post="sourcePost"></atletica-post-view>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AtleticaPostView from '@/components/posts/Atletica-Post-View'

export default {
  name: 'atletica-post-edit',
  components: {
    AtleticaPostView
  },
  props: {
    postKey: {
      type: String,
      default: function () {
        return '404'
      }
    },
    addPost: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  data () {
    return {
      loading: true,
      editPost: {
        id: '',
        nome: '',
        conteudoModal: '',
        img: ''
      },
      postDeleteAlert: false
    }
  },
  created () {
    if (this.addPost) {
      this.dispatchAddPost()
    } else {
      this.fetchCurrentPostId(this.postKey).then(
        (postDataSnapshot) => {
          this.loading = false
          this.setPost(postDataSnapshot.val())
        }
      )
    }
  },
  computed: {
    ...mapGetters('PostsModule', ['viewPost', 'newPost']),
    sourcePost () {
      if (this.addPost) {
        return this.newPost
      }
      return this.viewPost
    }
  },
  methods: {
    ...mapActions(['fetchAllPosts']),
    ...mapActions(
      'PostsModule',
      {
        fetchCurrentPostId: 'fetchCurrentPostId',
        dispatchAddPost: 'addPost',
        updatePost: 'updatePost',
        deletePost: 'deletePost'
      }
    ),
    setPost (post) {
      this.sourcePost
      this.editPost = {...post}
    },
    edit (event) {
      const targetId = event.target.id
      const targetValue = event.target.value
      const post = {...this.sourcePost}
      if (!post.key) {
        return
      }
      switch (targetId) {
        case 'postId':
          post.id = targetValue
          break
        case 'postTitle':
          post.nome = targetValue
          break
        case 'editarConteudoModal':
          post.conteudoModal = targetValue
          break
        case 'imagem':
          post.img = targetValue
          break
        default:
          console.log('parte de post não encontrada: ' + targetId)
      }
      this.updatePost(post)
    },
    apagarPost () {
      this.deletePost({
        key: this.sourcePost.key,
        callMeBaby: () => this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading {
    font-size: 4rem;
    color: orange;
  }
  label {
    margin-bottom: 1rem;
  }
  div.form {
    margin: 3rem;
  }
  select {
    width: 49rem;
  }
  @media (min-width: 1080px) {
    main {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);
    }
    h1 {
      grid-column: 1 / 4;
      text-align: center;
    }
    .form #post {
      grid-row: 2;
    }
    div.form {
      grid-column: 1;
    }
    #post {
      grid-column: 2 / 4;
    }
  }
</style>
