export default {
  path: '/doctor',
  name: '医师',
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/doctor/home')
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: () => import('@/views/doctor/subscribe'),
      meta: {
        title: '门诊预约'
      }
    },
    {
      path: '/review',
      name: 'review',
      component: () => import('@/views/doctor/review'),
      meta: {
        title: '门诊回顾'
      }
    }
  ]
}
