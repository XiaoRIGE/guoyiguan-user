/* eslint-disable no-console */
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Cookies from 'js-cookie'
const Layout = () => import('../layout/index.vue')
Vue.use(VueRouter)

// export const menuData = [
//   doctor
// ]
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    // redirect: '/index',
    // todo 检验登录状态
    // beforeEnter: (to, from, next) => {
    // const loginInfo = Cookies.get('loginInfo')
    // console.log(loginInfo)
    // loginInfo ? next() : next({ path: '/login' })
    // next()
    // },
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/doctor/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about'),
        meta: {
          title: '关于我们'
        }
      },
      {
        path: '/shop',
        name: 'shop',
        component: () => import('@/views/shop'),
        meta: {
          title: '健康商城'
        }
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/views/service'),
        meta: {
          title: '健康服务'
        }
      },
      // consult
      {
        path: '/consult',
        name: 'consult',
        component: () => import('@/views/consult'),
        meta: {
          title: '咨询中心'
        }
      },
      {
        path: '/personCenter',
        name: 'personCenter',
        component: () => import('@/views/personCenter'),
        meta: {
          title: '个人中心'
        }
      },
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/chat/index'),
        meta: {
          title: '聊天'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        meta: {
          title: '登录'
        }
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
