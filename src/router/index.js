import Vue from 'vue'
import Router from 'vue-router'
import AtleticaHome from '@/components/Atletica-Home'
import AtleticaPost from '@/components/Atletica-Post'

Vue.use(Router)

export default new Router({
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
  ]
})
