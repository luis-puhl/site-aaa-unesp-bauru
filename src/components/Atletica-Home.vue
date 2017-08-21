<template>
  <main>
    <atletica-header></atletica-header>
    <atletica-section
      v-for="section in sections" v-bind:key="section.id"
      v-bind:section="section" />
    <atletica-contato></atletica-contato>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import AtleticaSection from '@/components/Atletica-Section'

import AtleticaHeader from '@/components/Atletica-Header'
import AtleticaContato from '@/components/Atletica-Contato'

export default {
  name: 'atletica-home',
  components: {
    AtleticaHeader,
    AtleticaContato,
    AtleticaSection
  },
  computed: {
    ...mapGetters(
      'HomeModule',
      ['sections']
    )
  },
  created () {
    // this.$store.dispatch('getSections')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
