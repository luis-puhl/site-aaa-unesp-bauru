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
    console.log({
      scrollBehavior: {
        to, from, savedPosition
      }
    })
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
