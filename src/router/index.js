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
        name: '',
        component: () => import('@/views/doctor/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/home',
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
      // 健康商城模块
      {
        path: '/shop',
        name: 'shop',
        component: () => import('@/views/shop/index'),
        meta: {
          title: '健康商城'
        }
      },
      {
        path: '/shop/goodDetail',
        name: 'goodDetail',
        component: () => import('@/views/shop/goodDetail'),
        meta: {
          title: '商品详情'
        }
      },
      {
        path: '/shop/shopCart',
        name: 'shopCart',
        component: () => import('@/views/shop/shopCart'),
        meta: {
          title: '我的购物车'
        }
      },
      {
        path: '/shop/shopSettlement',
        name: 'shopSettlement',
        component: () => import('@/views/shop/shopSettlement'),
        meta: {
          title: '购物车结算'
        }
      },
      // 健康服务模块
      {
        path: '/service',
        name: 'service',
        component: () => import('@/views/service/index'),
        meta: {
          title: '健康服务'
        }
      },
      {
        path: '/service/serviceScope',
        name: 'serviceScope',
        component: () => import('@/views/service/serviceScope'),
        meta: {
          title: '服务范围'
        }
      },
      {
        path: '/service/clinicDetail',
        name: 'clinicDetail',
        component: () => import('@/views/service/clinicDetail'),
        meta: {
          title: '诊所详情'
        }
      },
      {
        path: '/service/doctorDetail',
        name: 'doctorDetail',
        component: () => import('@/views/service/doctorDetail'),
        meta: {
          title: '医师详情'
        }
      },
      // 資訊中心
      {
        path: '/consult',
        name: 'consult',
        component: () => import('@/views/consult/index'),
        meta: {
          title: '资讯中心'
        }
      },
      {
        path: '/consult/consultDetail',
        name: 'consultDetail',
        component: () => import('@/views/consult/consultDetail'),
        meta: {
          title: '资讯詳情'
        }
      },
      // 個人中心模塊
      {
        path: '/personCenter',
        name: 'personCenter',
        component: () => import('@/views/personCenter/index'),
        meta: {
          title: '个人中心'
        }
      },
      // 修改密码
      {
        path: '/personCenter/editPwd',
        name: 'editPwd',
        component: () => import('@/views/personCenter/editPwd'),
        meta: {
          title: '修改密码'
        }
      },
      // 修改手机号
      {
        path: '/personCenter/editPhone',
        name: 'editPhone',
        component: () => import('@/views/personCenter/editPhone'),
        meta: {
          title: '修改手机号'
        }
      },
      // 我的订单详情
      {
        path: '/personCenter/orderDetail',
        name: 'orderDetail',
        component: () => import('@/views/personCenter/orderDetail'),
        meta: {
          title: '我的订单'
        }
      },
      // patientReview
      // 患者回顧
      {
        path: '/personCenter/patientReview',
        name: 'patientReview',
        component: () => import('@/views/personCenter/patientReview'),
        meta: {
          title: '患者回顧'
        }
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/personCenter/register'),
        meta: {
          title: '新用户注册'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/personCenter/login'),
        meta: {
          title: '登录'
        }
      },
      // forget
      {
        path: '/forget',
        name: 'forget',
        component: () => import('@/views/personCenter/forget'),
        meta: {
          title: '忘记密码'
        }
      },
      // 协议 用户协议/隐私协议
      {
        path: '/personCenter/aggrement',
        name: 'aggrement',
        component: () => import('@/views/personCenter/aggrement'),
        meta: {
          title: '忘记密码'
        }
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/personCenter/message'),
        meta: {
          title: '消息'
        }
      },
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/chat/index'),
        meta: {
          title: '聊天'
        }
      }
      // {
      //   path: '/login',
      //   name: 'login',
      //   component: () => import('@/views/login'),
      //   meta: {
      //     title: '登录'
      //   }
      // }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
