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

import data from './api/aaa-unesp-bauru-export.json'

window.data = data

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
      mockData: data,
      sections: [
        { gestoes: data['gestoes'] },
        { treinos: data['treinos'] },
        { torcidas: data['torcidas'] },
        { produtos: data['produtos'] },
        { parceiros: data['parceiros'] },
        { eventos: data['eventos'] }
      ].map(
        section => ({
          items: Object.values(section)[0],
          k: Object.keys(section)[0],
          config: {
            nome: 'nome',
            htmlID: 'id'
          }
        })
      ).map(
        section => ({
          section,
          nome: ((k) => {
            switch (k) {
              case 'treinos':
                return 'Treinos'
              case 'torcidas':
                return 'Torcidas'
              case 'produtos':
                return 'Produtos'
              case 'parceiros':
                return 'Clube de Parceiros'
              case 'eventos':
                return 'Galeria de Eventos'
              default:
                return 'section'
            }
          })(section.k)
        })
      )
    }
  }
}
</script>

<style>
</style>
