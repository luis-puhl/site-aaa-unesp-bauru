<template>
  <div class="col-sm-6 grid-item tile-gestao">
    <a v-bind:href="'#modal-' + gestao.id" class="grid-link" data-toggle="modal">
      <div class="grid-caption">
        <div class="grid-caption-content">
          <i class="fa fa-search-plus fa-3x"></i>
        </div>
      </div>
      <img v-bind:src="gestao.img" class="img-responsive" v-bind:alt="gestao.img">
      <h3 class="grid-title">{{ gestao.nome }}</h3>
    </a>
  </div>
</template>

<script>
export default {
  name: 'atletica-tile',
  data () {
    return {
      gestao: {
        id: 0,
        nome: 'Welcome to Your Vue.js PWA',
        img: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
