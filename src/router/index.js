/* eslint-disable no-console */
import Vue from 'vue'
import VueRouter from 'vue-router'
import doctor from './doctor'// 医师
import patientCenter from './patientCenter'// 患者中心
import cooperation from './cooperation'// 门诊协作
import resourcesManage from './resourcesManage'// 资源管理
import setting from './setting'// 个人设置
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
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: () => import('@/views/doctor/home'),
      //   meta: {
      //     title: '医生工作台'
      //   }
      // },
      // {
      //   path: '/subscribe',
      //   name: 'subscribe',
      //   component: () => import('@/views/doctor/subscribe'),
      //   meta: {
      //     title: '门诊预约'
      //   }
      // },
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
      },
      ...doctor.children,
      ...patientCenter.children,
      ...cooperation.children,
      ...resourcesManage.children,
      ...setting.children
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
