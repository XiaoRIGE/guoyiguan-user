export default {
  path: '/patientCenter',
  name: '患者中心',
  children: [
    {
      path: '/patientCenter',
      name: 'patientCenter',
      component: () => import('@/views/patientCenter/index'),
      meta: {
        title: '患者中心'
      }
    }
  ]
}
