<template>
  <!-- Footer -->
  <footer class="text-center">
    <div class="footer-above">
      <div class="container">
        <div class="row">
          <div class="footer-col col-md-4">
            <h3>Localização</h3>
            <p>Av. Eng. Luiz Edmundo Carrijo Coube, 14-01
            <br>Núcleo Residencial Presidente Geisel, Bauru, SP 17033-360</p>
          </div>
          <div class="footer-col col-md-4">
            <h3>Atlética na Web</h3>
            <ul class="list-inline">
              <li>
                <a href="https://www.facebook.com/atleticaunespbauru1" title="Atlética no Facebook" class="btn-social btn-outline">
                  <i class="fa fa-fw fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/atleticaunespbauru1"  title="Atlética no Instagram" class="btn-social btn-outline">
                  <i class="fa fa-fw fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/luis-puhl/site-aaa-unesp-bauru" title="Site da Atlética no Github" class="btn-social btn-outline">
                  <i class="fa fa-fw fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col col-md-4">
            <router-link to="/login">
              <h3 title="Login">Área dos membros</h3>
            </router-link>
            <p><a href="http://startbootstrap.com">Start Bootstrap</a> is an open source library of Bootstrap themes and templates.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-below">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            Copyright &copy; Luís Puhl 2017
            <br>
            <a href="https://choosealicense.com/licenses/mit/">MIT License</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'atletica-footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
