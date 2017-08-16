<template>

  <!-- Navigation -->
  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Atlética UNESP Bauru</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="hidden">
            <a href="#page-top"></a>
          </li>
          <li class="page-scroll">
            <a href="/#sobre">Sobre</a>
          </li>
          <li class="page-scroll">
            <a href="/#gestoes">Gestões</a>
          </li>
          <li class="page-scroll">
            <a href="/#treinos">Treinos</a>
          </li>
          <li class="page-scroll">
            <a href="/#torcidas">Torcidas</a>
          </li>
          <li class="page-scroll">
            <a href="/#produtos">Produtos</a>
          </li>
          <li class="page-scroll">
            <a href="/#parceiros">Parceiros</a>
          </li>
          <li class="page-scroll">
            <a href="/#eventos">Galeria</a>
          </li>
          <li class="page-scroll">
            <a href="/#contato">Contato</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
  name: 'atletica-nav',
  mounted: () => {
    /* eslint-disable no-undef */
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    })
    /* eslint-disable no-undef */
    $('#mainNav').affix({
      offset: {
        top: 100
      }
    })
  }
}
</script>

<style>
</style>
