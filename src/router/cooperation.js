// cooperation
export default {
  path: '/cooperation',
  name: '门诊协作',
  children: [
    {
      path: '/consultation',
      name: 'consultation',
      component: () => import('@/views/cooperation/consultation'),
      meta: {
        title: '会诊'
      }
    },
    {
      path: '/referral',
      name: 'referral',
      component: () => import('@/views/cooperation/referral'),
      meta: {
        title: '转诊'
      }
    }
  ]
}
