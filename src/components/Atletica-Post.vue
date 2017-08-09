<template>
 <div class="post portfolio-modal">
    <div class="modal-content">
       <div class="close-modal" data-dismiss="modal">
          <div class="lr">
             <div class="rl">
             </div>
          </div>
       </div>
       <div class="container">
          <div class="row">
             <div class="col-lg-8 col-lg-offset-2">
                <div class="modal-body">
                   <h2>{{ post.nome }}</h2>
                   <hr class="star-primary">
                   <img v-bind:src=" post.img " class="img-responsive img-centered" alt="">
                   <div v-html="compiledMarkdown"></div>
                   <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
</template>

<script>
import { posts } from '@/api/local-data'
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
  computed: {
    post: function () {
      const dummyPost = {
        id: 0,
        nome: 'Titulo do Tile',
        class: 'tile-tile',
        img: '',
        conteudoModal: '# Conteúdo do post'
      }
      if (!this.id) {
        return dummyPost
      }
      const currPosts = posts.filter(
        post => post.id === this.id
      )
      if (!currPosts || currPosts.length <= 0) {
        return dummyPost
      }
      return currPosts[0]
    },
    compiledMarkdown: function () {
      console.log(this)
      return marked(this.post.conteudoModal, { sanitize: true })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.post {
  padding-top: 150px;
}
</style>
