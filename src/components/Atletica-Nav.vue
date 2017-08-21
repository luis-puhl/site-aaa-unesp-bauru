<template>

  <!-- Navigation -->
  <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle"
        data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">
          Atlética UNESP Bauru
        </router-link>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="hidden">
            <a href="#mainNav"></a>
          </li>
          <li class="page-scroll">
            <router-link to="/#sobre">Sobre</router-link>
          </li>
          <li class="page-scroll">
            <router-link to="/#gestoes">Gestões</router-link>
          </li>
          <li class="page-scroll">
            <router-link to="/#treinos">Treinos</router-link>
          </li>
          <li class="page-scroll">
            <router-link to="/#torcidas">Torcidas</router-link>
          </li>
          <li class="page-scroll">
            <router-link to="/#produtos">Produtos</router-link>
          </li>
          <li class="page-scroll">
            <router-link to="/#parceiros">Parceiros</router-link>
          </li>
          <li class="page-scroll">
            <router-link to="/#eventos">Galeria</router-link>
          </li>
          <li class="page-scroll">
            <router-link to="/#contato">Contato</router-link>
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
