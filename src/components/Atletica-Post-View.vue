<template>
  <div class="modal-body">
     <h2 class="post-title">{{ post.nome }}</h2>
     <hr class="star-primary">
     <img v-bind:src="post.img" class="img-responsive img-centered" alt="">
     <div v-html="compiledMarkdown"></div>
     <button type="button" onClick="history.back()" class="btn btn-default">
       Voltar
     </button>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
const markdown = new MarkdownIt()
markdown.use(emoji)

export default {
  name: 'atletica-post-view',
  props: {
    post: {
      type: Object,
      required: true,
      default: function () {
        return null
      }
    }
  },
  computed: {
    compiledMarkdown () {
      let conteudoMarkdown = this.post.conteudoModal
      if (!conteudoMarkdown) {
        conteudoMarkdown = 'Este post ainda não tem conteúdo'
      }
      return markdown.render(conteudoMarkdown)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
}
</style>
