<template>
  <div id="app">
    <atletica-nav></atletica-nav>
    <atletica-header></atletica-header>
    <main>
      <atletica-section
        v-for="section in sections" v-bind:key="section.config.htmlID"
        v-bind:items="section.items" v-bind:config="section.config">
      </atletica-section>
      <!-- <router-view></router-view> -->
    </main>
    <atletica-contato></atletica-contato>
    <atletica-footer></atletica-footer>
  </div>
</template>

<script>
import AtleticaNav from '@/components/Atletica-Nav'
import AtleticaHeader from '@/components/Atletica-Header'
import AtleticaTile from '@/components/Atletica-Tile'
import AtleticaSection from '@/components/Atletica-Section'
import AtleticaContato from '@/components/Atletica-Contato'
import AtleticaFooter from '@/components/Atletica-Footer'

import { sections } from '@/api/local-data'

window.sections = sections

export default {
  name: 'atletica-app',
  components: {
    AtleticaNav,
    AtleticaHeader,
    AtleticaTile,
    AtleticaSection,
    'atletica-contato': AtleticaContato,
    AtleticaFooter
  },
  data () {
    return {
      sections
    }
  }
}
</script>

<style>
</style>
