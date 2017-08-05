<template>
  <div id="app">
    <atletica-nav></atletica-nav>
    <atletica-header></atletica-header>
    <main>
      <atletica-section v-bind:items="gestoes" v-bind:config="{nome: 'Gestões'}"></atletica-section>
      <atletica-section v-bind:items="treinos" v-bind:config="{nome: 'Treinos'}"></atletica-section>
      <atletica-section v-bind:items="torcidas" v-bind:config="{nome: 'Torcidas'}"></atletica-section>
      <atletica-section v-bind:items="produtos" v-bind:config="{nome: 'Produtos'}"></atletica-section>
      <atletica-section v-bind:items="parceiros" v-bind:config="{nome: 'Clube de Parceiros'}"></atletica-section>
      <atletica-section v-bind:items="eventos" v-bind:config="{nome: 'Galeria de Eventos'}"></atletica-section>
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
      gestoes: data['gestoes'],
      treinos: data['treinos'],
      torcidas: data['torcidas'],
      produtos: data['produtos'],
      parceiros: data['parceiros'],
      eventos: data['eventos']
    }
  }
}
</script>

<style>
</style>
