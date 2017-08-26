<template>
  <div class="post container">
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <atletica-post-view v-bind:post="post"></atletica-post-view>
        <router-link class="btn btn-default" v-if="canEdit" v-bind:to="{ name: 'editPost', id: postKey }">
          Editar
        </router-link>
      </div>
     </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AtleticaPostView from '@/components/Atletica-Post-View'

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
  data () {
    return {
      postKey: '404'
    }
  },
  created () {
    this.fetchCurrentPostId(this.id)
    this.fetchUser()
  },
  computed: {
    ...mapGetters(
      'PostsModule',
      {post: 'viewPost'}
    ),
    ...mapGetters(
      'UsersModule',
      ['canEdit']
    )
  },
  methods: {
    ...mapActions(
      'PostsModule',
      {fetchCurrentPostId: 'fetchCurrentPostId'}
    ),
    ...mapActions(
      'UsersModule',
      ['fetchUser']
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.col-lg-8 {
  margin-bottom: 3rem;
}
</style>
