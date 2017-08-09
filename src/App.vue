<template>
  <div id="app">
    <atletica-nav></atletica-nav>
    <router-view></router-view>
    <atletica-footer></atletica-footer>
  </div>
</template>

<script>
import AtleticaNav from '@/components/Atletica-Nav'
import AtleticaFooter from '@/components/Atletica-Footer'

export default {
  name: 'atletica-app',
  components: {
    AtleticaNav,
    AtleticaFooter
  }
}
</script>

<style>
</style>
