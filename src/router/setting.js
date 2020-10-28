export default {
  path: '/setting',
  name: '个人设置',
  children: [
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/setting/index')
    }
  ]
}
