<template>
  <!-- Header -->
  <header>
    <!-- <img src="../assets/logo-atletica-tiny.png" alt="" class="img-responsive">  -->
    <!-- srcset="../assets/logo-atletica-tiny.png 1x, ../assets/logo-atletica-blur.png 0.05x" -->
    <div class="img-responsive" v-bind:style="imgResponsive">
      <!-- width="1140" height="251" -->
      <img class="img-responsive"
        alt="Logo Horizontal Associação Atlética Acadêmica Unesp Bauru"
        v-bind:src="responsiveImage.src"
        v-bind:srcset="responsiveImage.srcSet"
        v-bind:style="{opacity: isPlaceholderPresent ? 0 : ''}"
        v-on:load="imgLoaded"
      />
    </div>
    <div class="intro-text">
      <hr class="star-light">
      <span class="skills">Associação Atlética Acadêmica Unesp Bauru</span>
    </div>
  </header>
</template>

<script>
import responsiveImage from '@/assets/logo-atletica-tiny.png?placeholder=true&sizes[]=1140,sizes[]=500,sizes[]=200,sizes[]=20'

export default {
  name: 'atletica-header',
  data () {
    return {
      responsiveImage,
      imgResponsive: {
        // height: responsiveImage.height + 'px',
        // width: responsiveImage.width + 'px',
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
      this.isPlaceholderPresent = false
      this.imgResponsive.backgroundImage = ''
    }
  }
}
</script>

<style scoped>
header {
  padding: 5rem 0;
  margin: 0 auto;
}
div.img-responsive {
  margin: 0 auto;
}
</style>
