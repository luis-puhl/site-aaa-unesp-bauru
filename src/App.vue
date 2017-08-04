<template>
  <div id="app">
    <atletica-nav></atletica-nav>
    <atletica-header></atletica-header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <atletica-gestoes></atletica-gestoes>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AtleticaNav from '@/components/Atletica-Nav'
import AtleticaHeader from '@/components/Atletica-Header'
import AtleticaTile from '@/components/Atletica-Tile'
import AtleticaGestoes from '@/components/Atletica-Gestoes'

export default {
  name: 'atletica-app',
  components: {
    AtleticaNav,
    AtleticaHeader,
    AtleticaTile,
    AtleticaGestoes
  }
}
</script>

<style>
</style>
