<template>
  <div class="col-sm-6 grid-item tile" v-bind:class="[tile.class]">
    <a v-bind:href="'#modal-' + tile.id" class="grid-link" data-toggle="modal">
      <div class="grid-caption">
        <div class="grid-caption-content">
          <i class="fa fa-search-plus fa-3x"></i>
        </div>
      </div>
      <img v-bind:src="tile.img" class="img-responsive" v-bind:alt="tile.img">
      <h3 class="grid-title">{{ tile.nome }}</h3>
    </a>
  </div>
</template>

<script>
export default {
  name: 'atletica-tile',
  props: {
    'tile': {
      type: Object,
      default: function () {
        return {
          id: 0,
          nome: 'Welcome to Your Vue.js PWA',
          class: 'tile-gestao',
          img: ''
        }
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
