<template>
  <div class="contain">
    <div>
      <h1>{{ logedInMesage || 'Login na Área dos membros' }}</h1>
      <hr class="star-primary">
      <button type="button" name="button" class="btn" v-on:click="login">
        <i class="fa fa-fw fa-google"></i>
        Login com Google
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'atletica-login',
  methods: {
    ...mapActions(['login'])
  },
  computed: {
    ...mapGetters(['logedInMesage'])
  }
}
</script>

<style scoped>
div.contain {
  padding: 2rem 0;
  text-align: center;
  margin: 0 auto;
}
div.contain > div {
  margin: 0 auto;
}
i.fa {
  font-size: 3rem;
}
button {
  font-size: 2rem;
  margin: 2rem;
}
</style>
