<template>
  <main>
    <h1>Editar post</h1>
    <div class="form">
      <form class="edit-post">
        <label>
          Id:<br>
          <input type="text" size="60" id="postId" name="titulo" v-model="newPost.id" @input="edit">
        </label>
        <br>

        <label>
          Título:<br>
          <input type="text" size="60" id="postTitle" name="titulo" v-model="newPost.nome" @input="edit">
        </label>
        <br>

        <label>
          Imagem:<br>
          <input type="text" size="60" id="image" name="imagem" v-model="newPost.img" @input="edit">
        </label>
        <br>

        <label>
          Post:<br>
          <textarea id="editarConteudoModal" name="conteudoModal" placeholder="add multiple lines"
             rows="50" cols="60" v-model="newPost.conteudoModal" @input="edit"/>
        </label>
        <br>

        <br>
        <select id="postSection" name="postSection">
          <option value="option">option</option>
        </select>
        <button type="button" name="button">
          Publicar
        </button>
      </form>
    </div>
    <atletica-post-view id="post" v-if="sourcePost" v-bind:post="sourcePost"></atletica-post-view>
  </main>
</template>

<script>
import AtleticaPostView from '@/components/Atletica-Post-View'

export default {
  name: 'atletica-post-edit',
  components: {
    AtleticaPostView
  },
  created () {
    this.$store.dispatch('PostsModule/fetchCurrentPostId', this.id)
    this.setPost(this.sourcePost)
  },
  props: {
    id: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  data () {
    return {
      newPost: {
        id: '',
        nome: '',
        conteudoModal: '',
        img: ''
      }
    }
  },
  computed: {
    sourcePost () {
      return this.$store.getters['PostsModule/viewPost']
    }
  },
  methods: {
    setPost (post) {
      this.newPost = {...post}
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
        default:
          console.log('parte de post não encontrada: ' + targetId)
      }
      this.$store.dispatch('PostsModule/updatePost', post)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label {
    margin-bottom: 1rem;
  }
  div.form {
    margin: 3rem;
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
