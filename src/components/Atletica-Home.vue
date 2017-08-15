<template>
  <main>
    <atletica-header></atletica-header>
    <atletica-section
      v-for="section in sections" v-bind:key="section.config.htmlID"
      v-bind:items="section.items" v-bind:config="section.config">
    </atletica-section>
    <atletica-contato></atletica-contato>
  </main>
</template>

<script>
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
    sections () {
      return this.$store.state.sections
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
