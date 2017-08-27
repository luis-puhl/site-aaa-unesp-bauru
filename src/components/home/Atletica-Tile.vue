<template>
  <div class="grid-item tile" v-bind:id="tile.id" v-bind:class="[tile.class, bootstrapItemClass]">
    <router-link :to="'post/' + tile.id" class="grid-link">
      <div class="grid-caption">
        <div class="grid-caption-content">
          <i class="fa fa-search-plus fa-3x"></i>
        </div>
      </div>
      <div class="img-cropper">
        <img v-bind:src="tile.img" class="img-responsive tile-image" v-bind:alt="tile.img">
      </div>
      <h3 class="grid-title">{{ tile.nome }}</h3>
    </router-link>
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
          nome: 'Titulo do Tile',
          class: 'tile-tile',
          img: ''
        }
      }
    },
    'bootstrapItemClass': {
      type: String,
      default: function () {
        return 'col-sm-4'
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img-cropper{
    width:100%;
    padding-bottom:80%;
    margin:1em auto;
    overflow:hidden;
    position:relative;
    max-height: 400px
  }

  .img-cropper img {
    position:absolute;
    width:auto;
    min-width:100%;
    min-height:100%;
  }
  img.tile-image {
    max-height: 400px
  }
  .grid-item {
    margin: 0 0 15px;
    right: 0;
  }
</style>
