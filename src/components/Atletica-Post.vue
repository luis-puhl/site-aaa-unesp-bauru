<template>
  <div class="post container">
    <div class="row">
       <div class="col-lg-8 col-lg-offset-2">
          <div class="modal-body">
             <h2 class="post-title">{{ post.nome }}</h2>
             <hr class="star-primary">
             <img v-bind:src="post.img" class="img-responsive img-centered" alt="">
             <div v-html="compiledMarkdown"></div>
             <button type="button" onClick="history.back()" class="btn btn-default">
               Voltar
             </button>
             <router-link :to="{ name: 'editPost', id }" class="btn btn-default">
               Editar
             </router-link>
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
  created () {
    this.$store.dispatch('getPost', this.id)
  },
  computed: {
    post () {
      return this.$store.getters.postByIdOrDummy(this.id)
    },
    compiledMarkdown () {
      let conteudoMarkdown = this.post.conteudoModal
      if (!conteudoMarkdown) {
        conteudoMarkdown = 'Este post ainda não tem conteúdo'
      }
      return marked(conteudoMarkdown, { sanitize: true })
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
}
</style>
