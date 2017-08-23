<template>
  <main>
    <h1>Editar post</h1>
    <div class="form">
      <form class="edit-post">
        <label>
          Id:
          <br>
          <input id="postId" type="text" name="titulo" v-model="postId" @input="edit">
        </label>
        <br>

        <label>
          Título:
          <br>
          <input id="postTitle" type="text" name="titulo" v-model="nome" @input="edit">
        </label>
        <br>

        <label>
          Post:
          <br>
          <textarea id="editarConteudoModal" name="conteudoModal" placeholder="add multiple lines"
             rows="10" cols="60" v-model="conteudoModal" @input="edit"/>
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
      postId: '',
      nome: '',
      conteudoModal: ''
    }
  },
  computed: {
    sourcePost () {
      return this.$store.getters['PostsModule/viewPost']
    }
  },
  methods: {
    setPost (post) {
      const newPost = {...post}
      this.postId = newPost.id
      this.nome = newPost.nome
      this.conteudoModal = newPost.conteudoModal
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
  @media (min-width: 1080px) {
    main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);
    }
    h1 {
      grid-column: 1 / 3;
      text-align: center;
    }
    .form #post {
      grid-row: 2;
    }
  }
</style>
