<template>
  <div id="app">
    <atletica-nav></atletica-nav>
    <div class="clear-top">
      <router-view></router-view>
    </div>
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
.clear-top {
  margin-top: 50px;
}
@media (min-width: 768px) {
  .clear-top {
    margin-top: 150px;
  }
}
</style>
