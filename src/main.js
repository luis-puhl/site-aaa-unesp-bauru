// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AtleticaApp from './App'
import router from './router'

import './css/freelancer.css'
import './css/atletica.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<atletica-app/>',
  components: {
    'atletica-app': AtleticaApp
  }
})
