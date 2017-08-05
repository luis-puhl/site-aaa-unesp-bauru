<template>
  <section v-bind:id="config.htmlID">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>{{ config.nome }}</h2>
          <hr class="star-primary">
        </div>
      </div>
      <div class="row">
        <atletica-tile v-for="item in items" v-bind:tile="item" v-bind:key="item.id" v-bind:bootstrapItemClass="config.bootstrapItemClass">
        </atletica-tile>
      </div>
    </div>
  </section>
</template>

<script>
import AtleticaTile from '@/components/Atletica-Tile'

export default {
  name: 'atletica-section',
  props: {
    'config': {
      type: Object,
      default: function () {
        return {
          htmlID: 'section',
          nome: 'Titulo da Section',
          bootstrapItemClass: 'col-sm-4'
        }
      }
    },
    'items': {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    AtleticaTile
  }
}
</script>

<style>
</style>
