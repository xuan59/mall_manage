import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/layout/container'
import Login from '@/pages/login/login'
import Index from '@/pages/index'
import GoodsCatalog1 from '@/pages/goods/goodsCatalog1'
import GoodsSku from '@/pages/goods/goodsSku'

Vue.use(Router)

export default new Router({
  mode: 'history', //去掉路由地址上的#
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Container',
      component: Container,
      children: [
        //首页
        {
          path: '/',
          name: 'Index',
          component: Index,
        },
        {
          path: '/index',
          name: 'Index',
          component: Index,
        },
        //商品分类
        {
            path: '/goods/catalog1',
            name: 'GoodsCatalog1',
            component: GoodsCatalog1,
        }, 
        //商品分类
        {
        path: '/goods/sku',
        name: 'GoodsSku',
        component: GoodsSku,
      }, 
      ]
    },
  ]
})
