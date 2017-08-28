<template>
  <main>
    <atletica-header></atletica-header>
    <atletica-section v-if="canEdit"
      v-bind:section="allPostsSection" />

    <atletica-section
      v-for="section in sections" v-bind:key="section.id"
      v-bind:section="section" />
    <atletica-contato></atletica-contato>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AtleticaSection from '@/components/home/Atletica-Section'

import AtleticaHeader from '@/components/home/Atletica-Header'
import AtleticaContato from '@/components/home/Atletica-Contato'

export default {
  name: 'atletica-home',
  components: {
    AtleticaHeader,
    AtleticaContato,
    AtleticaSection
  },
  created () {
    this.fetchAllPosts()
    this.fetchSections()
    this.fetchPublicationList()
  },
  computed: {
    ...mapGetters('HomeModule', ['sections']),
    ...mapGetters('PostsModule', ['allPostsSection']),
    ...mapGetters('UsersModule', ['canEdit'])
  },
  methods: {
    ...mapActions(['fetchAllPosts']),
    ...mapActions('HomeModule', ['fetchSections', 'fetchPublicationList']),
    checkCanEdit () {
      if (this.canEdit) {
        this.fetchAllPosts()
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.checkCanEdit()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
