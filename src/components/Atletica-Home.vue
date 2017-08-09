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

import { sections } from '@/api/local-data'

export default {
  name: 'atletica-home',
  components: {
    AtleticaHeader,
    AtleticaContato,
    AtleticaSection
  },
  data () {
    return {
      sections
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
