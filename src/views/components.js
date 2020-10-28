// 注册全局组件
import SvgIcon from '@/components/SvgIcon'

const components = [
  SvgIcon
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  SvgIcon
}
