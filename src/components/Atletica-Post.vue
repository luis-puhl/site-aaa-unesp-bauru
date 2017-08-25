<template>
  <div class="post container">
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <atletica-post-view v-bind:post="post"></atletica-post-view>
        <router-link v-if="canEdit" v-bind:to="{ name: 'editPost', id }" class="btn btn-default">
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
        return ''
      }
    }
  },
  created () {
    this.fetchCurrentPostId(this.id)
    this.fetchUser()
  },
  methods: {
    ...mapActions(
      'PostsModule',
      {fetchCurrentPostId: 'fetchCurrentPostId'}
    ),
    ...mapActions(
      ['fetchUser']
    )
  },
  computed: {
    ...mapGetters(
      'PostsModule',
      {post: 'viewPost'}
    ),
    ...mapGetters(
      ['canEdit']
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
