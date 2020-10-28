export default {
  path: '/resourcesManage',
  name: '资源管理',
  children: [
    {
      path: '/prescription',
      name: 'prescription',
      component: () => import('@/views/resourcesManage/prescription'),
      meta: {
        title: '中草药方剂管理'
      }
    },
    {
      path: '/acupuncture',
      name: 'acupuncture',
      component: () => import('@/views/resourcesManage/acupuncture'),
      meta: {
        title: '针灸管理'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/resourcesManage/product'),
      meta: {
        title: '成品管理'
      }
    }
  ]
}
