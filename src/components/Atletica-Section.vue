<template>
  <section id="gestoes">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>{{ config.nome }}</h2>
          <hr class="star-primary">
        </div>
      </div>
      <div class="row">
        <atletica-tile v-for="gestao in items" v-bind:tile="gestao" v-bind:key="gestao.id">
        </atletica-tile>
      </div>
    </div>
  </section>
</template>

<script>
import AtleticaTile from '@/components/Atletica-Tile'

export default {
  name: 'atletica-gestoes',
  props: [
    'config',
    'items'
  ],
  components: {
    AtleticaTile
  }
}
</script>

<style>
</style>
