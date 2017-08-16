<template>
  <main>
    <h1>Editar post</h1>
    <atletica-post v-bind:id="id"></atletica-post>
  </main>
</template>

<script>
import AtleticaPost from '@/components/Atletica-Post'
export default {
  name: 'atletica-post-edit',
  components: {
    AtleticaPost
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
    this.$store.dispatch('getPost', this.id)
  },
  computed: {
    post () {
      return this.$store.getters.postByIdOrDummy(this.id)
    }
  },
  watch: {
    '$route' (to, from) {
      console.log({
        routeWatch: {to, from}
      })
      return to
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
