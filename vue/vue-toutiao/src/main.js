// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './style/index.css'
// import './style/main.less'
import './rem.js'
import router from './router'
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
import store from './store/index'
Vue.config.productionTip = false

Vue.use((foo)=>{
  //foo===Vue
  foo.component('header-bar',HeaderBar)
  foo.component('footer-bar',FooterBar)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
