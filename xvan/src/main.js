import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import home from '@/components/mainPage';

Vue
  .use(Router)
  .use(VueMaterial)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/mthboard',
      name: 'home',
      component: home
    },
    {
      path: '/prc',
      name: 'home',
      component: home
    },
  ]
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
