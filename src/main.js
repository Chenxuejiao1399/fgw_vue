// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import { Notification } from 'element-ui'
import axios from 'axios'
import store from '@/store/store.js'
import querystring from 'querystring'
import {
  commonTools
} from '@/js/common'
//把 `axios` 加到 `Vue` 的原型中

import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.querystring = querystring
Vue.prototype.$commonTools = commonTools
Vue.prototype.$notify = Notification
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://icampaign.com.cn/customers/ndrc/index.php',

  Vue.use(ElementUI)
Vue.config.productionTip = false

// 检查用户登录状态
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let uid = commonTools.getCookie('uid') //从cookie中取用户uid
    // console.log("main.js", uid)
    if (uid) {
      next()
    } else {
      if (to.path == '/login') {
        next() //注意在router.beforeEach中一定要用next()来跳出导航循环
      } else {
        //如果用户去的页面不是登录页则跳转登录页
        Notification.error({
          title: '提示',
          message: '您还未登录，请先登录',
          showClose: false,
          offset: 100
        })
        next('/login')
      }
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
