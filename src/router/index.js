import Vue from 'vue'
import Router from 'vue-router'
import AtleticaHome from '@/components/Atletica-Home'
import AtleticaPost from '@/components/Atletica-Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AtleticaHome
    },
    {
      path: '/post/:id',
      component: AtleticaPost,
      props: (route) => ({ id: route.params.id })
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    /**
     * Inspired by https://github.com/vuejs/vue-router/blob/dev/examples/scroll-behavior/app.js
     */
    let position = {}
    if (to && to.path === '/' && from && from.params && from.params.id) {
      position.selector = '#' + from.params.id
    } else if (to.hash) {
      position.selector = to.hash
    } else if (savedPosition) {
      position = savedPosition
    } else {
      position.x = 0
      position.y = 0
    }
    console.log({
      scrollBehavior: {
        to, from, savedPosition, position
      }
    })
    return position
  }
})
