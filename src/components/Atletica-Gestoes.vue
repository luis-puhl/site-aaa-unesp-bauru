<template>
  <section id="gestoes">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>Gestões</h2>
          <hr class="star-primary">
        </div>
      </div>
      <div class="row">
        <atletica-tile v-for="gestao in gestoes" v-bind:tile="gestao" v-bind:key="gestao.id">
        </atletica-tile>
      </div>
    </div>
  </section>
</template>

<script>
import data from '../api/aaa-unesp-bauru-export.json'
import AtleticaTile from '@/components/Atletica-Tile'

export default {
  name: 'atletica-gestoes',
  components: {
    AtleticaTile
  },
  data () {
    return {
      gestoes: data['gestoes']
    }
  }
}
</script>

<style>
</style>
