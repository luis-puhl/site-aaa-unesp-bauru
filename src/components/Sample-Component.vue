<template>
  <div>
    fill the template always with ONE html element
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'sample-component',
  components: {}
  created () {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  compted: {
    someComputedData () {
      return 'computed'
    },
    ...mapGetters('module', ['getter'])
  },
  methos: {
    someMethod () {
      // action
    },
    ...mapActions('module', ['action'])
  }
}
</script>

<style scoped>
div {
  color: #35495E;
}
</style>
