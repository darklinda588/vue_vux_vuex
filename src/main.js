// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import Home from './components/HelloFromVux'

Vue.use(VueRouter)
Vue.use(Vuex)

// 这里是路由的设置~
const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

// 这里放了一个初始的数据源哦~可以通过像hellofromvux的组件里面那样改变，然后再通过这个里面的方法调用~~~
const vuexStore = new Vuex.Store({
  state: {
    user_name: ''
  },
  mutations: {
    showUserName (state) {
      alert(state.user_name)
    }
  }
})

// 去掉点击的300延迟~
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store: vuexStore,
  render: h => h(App)
}).$mount('#app-box')
