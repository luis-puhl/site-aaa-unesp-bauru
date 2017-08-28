<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 v-bind:id="section.id">{{ section.nome }}</h2>
          <hr class="star-primary">
        </div>
      </div>
      <div class="row">
        <atletica-tile v-for="item in section.posts" v-bind:key="item.id"
          v-bind:tile="item" v-bind:bootstrapItemClass="section.bootstrapItemClass"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AtleticaTile from '@/components/home/Atletica-Tile'

export default {
  name: 'atletica-section',
  components: {
    AtleticaTile
  },
  props: {
    'section': {
      type: Object,
      default: function () {
        return {
          id: 'section',
          nome: 'Título da Seção',
          bootstrapItemClass: 'col-sm-4',
          posts: [
            {
              id: 0,
              nome: 'Titulo do Tile',
              class: 'tile-tile',
              img: '',
              conteudoModal: '# Conteúdo do post'
            }
          ]
        }
      }
    }
  }
}
</script>

<style>
</style>
