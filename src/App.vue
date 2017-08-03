<template>
  <div id="app">
    <atletica-nav></atletica-nav>
    <atletica-header></atletica-header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <atletica-tile></atletica-tile>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AtleticaNav from '@/components/Atletica-Nav'
import AtleticaHeader from '@/components/Atletica-Header'
import AtleticaTile from '@/components/Atletica-Tile'

export default {
  name: 'atletica-app',
  components: {
    AtleticaNav,
    AtleticaHeader,
    AtleticaTile
  }
}
</script>

<style>
</style>
