<template>
  <!-- Header -->
  <header>
    <!-- src="../assets/logo-atletica-tiny.png" -->
    <!-- srcset="../assets/logo-atletica-tiny.png 1x, ../assets/logo-atletica-blur.png 0.05x" -->
    <div v-bind:style="imgResponsive">
      <img class="img-responsive"
        src="../assets/logo-atletica-tiny.png"
        alt="Logo Horizontal Associação Atlética Acadêmica Unesp Bauru"
        width="1140" height="251"
        v-bind:srcset="responsiveImage.srcSet"
        v-bind:style="{opacity: isPlaceholderPresent ? 0 : ''}"
        v-on:load="imgLoaded"
      >
    </div>
    <div class="intro-text">
      <hr class="star-light">
      <span class="skills">Associação Atlética Acadêmica Unesp Bauru</span>
    </div>
  </header>
</template>

<script>
import responsiveImage from '../assets/logo-atletica-tiny.png?placeholder=true&sizes[]=1140,sizes[]=500,sizes[]=200,sizes[]=20'

export default {
  name: 'atletica-header',
  data () {
    return {
      responsiveImage,
      imgResponsive: {
        height: responsiveImage.height + 'px',
        width: responsiveImage.width + 'px',
        // height: 252 + 'px',
        // width: 1140 + 'px',
        backgroundSize: 'cover',
        backgroundImage: 'url("' + responsiveImage.placeholder + '")'
      },
      isPlaceholderPresent: true
    }
  },
  methods: {
    imgLoaded () {
      console.log('img finished loding')
      this.isPlaceholderPresent = false
      this.imgResponsive.backgroundImage = ''
    }
  }
}
</script>

<style scoped>
header {
  padding: 5rem 0;
}
</style>
