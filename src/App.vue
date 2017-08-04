<template>
  <div id="app">
    <atletica-nav></atletica-nav>
    <atletica-header></atletica-header>
    <main>
      <atletica-gestoes></atletica-gestoes>
      <router-view></router-view>
    </main>
    <atletica-contato></atletica-contato>
  </div>
</template>

<script>
import AtleticaNav from '@/components/Atletica-Nav'
import AtleticaHeader from '@/components/Atletica-Header'
import AtleticaTile from '@/components/Atletica-Tile'
import AtleticaGestoes from '@/components/Atletica-Gestoes'
import AtleticaContato from '@/components/Atletica-Contato'

export default {
  name: 'atletica-app',
  components: {
    AtleticaNav,
    AtleticaHeader,
    AtleticaTile,
    AtleticaGestoes,
    AtleticaContato
  }
}
</script>

<style>
</style>
