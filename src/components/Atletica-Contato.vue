<template>
<section id="contato">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2>Contato</h2>
        <hr class="star-primary">
      </div>
    </div>
    <div class="row">
      <div class="col-12 embed-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.25956145799785!2d-49.03230384062438!3d-22.35074044511093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf5dfac77073d7%3A0xc1ab22387b84c5d4!2zQXNzb2NpYcOnw6NvIEFsdMOpdGljYSBBY2Fkw6ptaWNhIFVuZXNwIEJhdXJ1!5e0!3m2!1sen!2sus!4v1501876812354"
        width="750" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: 'atletica-contato'
}
</script>

<style scoped>
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  .embed-container iframe, .embed-container object, .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
