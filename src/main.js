import Vue from 'vue'
// import { MessageBox, Row, Col, Button, Input, Loading, Dialog, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Avatar from './components/avatar.vue'
// import SvgIcon from './components/SvgIcon.vue'
// import Index from './index.vue'//原demo
import APP from './App.vue'
import store from './store/index'
import router from './router/index'
import tim from 'tim'
import TIM from 'tim-js-sdk'
import components from './views/components.js'
import './assets/icon/iconfont.css'
import './assets/icon/tim.css'
// 基于vue-i18n实现国际化
import VueI18n from 'vue-i18n'
// 引入自定义、重置等样式
import './assets/scss/index.scss'

window.tim = tim
window.TIM = TIM
window.store = store
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。
Vue.prototype.tim = tim
Vue.prototype.TIM = TIM
Vue.prototype.$store = store
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.use(Button)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Input)
// Vue.use(Loading)
// Vue.use(Dialog)
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)
Vue.use(components)
Vue.use(ElementUI)
Vue.use(VueI18n)
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: require('@/assets/languages/zh.json'),
    tw: require('@/assets/languages/zh-tw.json')
  }
})
Vue.component('avatar', Avatar)
new Vue({
  router,
  i18n,
  render: h => h(APP)
}).$mount('#app')
