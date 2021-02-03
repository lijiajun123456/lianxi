import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../pages/index/index'),
      children: [
        {
          path: 'menu',
          name: '菜单',
          component: () => import('../pages/menu/menu.vue'),
          // beforeEnter(to, from, next) {
          //   fun('menu') ? next() : next('/')
          // }
        },
      ]
    },

  ]
})
