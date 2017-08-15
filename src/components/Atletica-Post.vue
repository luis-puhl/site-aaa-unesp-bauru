<template>
  <div class="post container">
    <div class="row">
       <div class="col-lg-8 col-lg-offset-2">
          <div class="modal-body">
             <h2 class="post-title">{{ post.nome }}</h2>
             <hr class="star-primary">
             <img v-bind:src="post.img" class="img-responsive img-centered" alt="">
             <div v-html="compiledMarkdown"></div>
             <button type="button" onClick="history.back()" class="btn btn-default">Voltar</button>
          </div>
       </div>
     </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'atletica-post',
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
      post: this.$store.state.dummyPost
    }
  },
  watch: {
    '$route' (to, from) {
      console.log({
        routeWatch: {to, from}
      })
      return to
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log({
      beforeRouteUpdate: {to, from, next}
    })
    // react to route changes...
    // don't forget to call next()
    return next()
  },
  created () {
    this.$store.dispatch('getPosts').then(
      post => {
        console.log({'atletica-post -> subscribe': post, 'atletica-post': this})
        this.post = post
      }
    )
  },
  computed: {
    compiledMarkdown: function () {
      let conteudoMarkdown = this.post.conteudoModal
      if (!conteudoMarkdown) {
        conteudoMarkdown = 'Este post ainda não tem conteúdo'
      }
      return marked(conteudoMarkdown, { sanitize: true })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
}
.post {
  margin-top: 50px;
}
@media (min-width: 768px) {
  .post {
    margin-top: 150px;
  }
}
</style>
