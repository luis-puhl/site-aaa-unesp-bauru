export default {
  name: 'atletica-tile',
  props: ['gestao'],
  template: `
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
</div>`,
}
