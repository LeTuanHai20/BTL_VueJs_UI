import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/views/Account/Account';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Account,
      redirect: 'canifa',
      children: [
        {
          path: 'canifa'
        }
      ]
    },
    
  ]
})
