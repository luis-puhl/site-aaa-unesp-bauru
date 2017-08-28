<template>
  <h1>Adicionando novo post {{ postKey }}</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'atletica-post-add',
  created () {
    this.$store.dispatch('PostsModule/addPost')
    .then(
      () => this.$router.push(`/post/${this.newPostKey}/edit`)
    )
  },
  computed: {
    ...mapState('PostsModule', ['newPostKey'])
  }
}
</script>

<style scoped>
div {
  color: #35495E;
}
</style>
