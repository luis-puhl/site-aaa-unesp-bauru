<template>
  <atletica-post :id=''>
  </atletica-post>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
