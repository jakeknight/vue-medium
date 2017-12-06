// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase from 'firebase'
import { config } from './auth/auth-config'

Vue.config.productionTip = false

Vue.use(require('vue-moment'))

// Firebase
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
