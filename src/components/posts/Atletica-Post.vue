<template>
  <div class="post container">
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <atletica-post-view v-bind:post="viewPost"></atletica-post-view>
        <router-link class="btn btn-default" v-if="canEdit && id !== '404'" v-bind:to="`/post/${ viewPost.key }/edit`">
          Editar
        </router-link>
      </div>
     </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AtleticaPostView from '@/components/posts/Atletica-Post-View'

export default {
  name: 'atletica-post',
  components: {
    AtleticaPostView
  },
  props: {
    id: {
      type: String,
      default: function () {
        return '404'
      }
    }
  },
  created () {
    this.fetchAllPosts()
    this.fetchCurrentPostId(this.id)
    this.fetchUser()
  },
  computed: {
    ...mapGetters('PostsModule', ['viewPost']),
    ...mapGetters('UsersModule', ['canEdit'])
  },
  methods: {
    ...mapActions(['fetchAllPosts']),
    ...mapActions('PostsModule', ['fetchCurrentPostId']),
    ...mapActions('UsersModule', ['fetchUser'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.col-lg-8 {
  margin-bottom: 3rem;
}
</style>
