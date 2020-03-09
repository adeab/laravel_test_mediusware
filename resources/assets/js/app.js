
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
require('./jquery-ui');
require('./Chart');
require('./bulk');

//adeab's codes

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

import { Form, HasError, AlertError } from 'vform';

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
import VueRouter from 'vue-router';
import crud from './components/Crud';

Vue.use(VueRouter)
let routes = [
    
    { path: '/crud', component: crud }
  ]

  const router = new VueRouter({
    
    routes // short for `routes: routes`
  })



Vue.component('crud', require('./components/Crud.vue'));


const app = new Vue({
    el: '#myapp',
    router,
    components: {
      crud
       
      }
});

//end of adeab's codes

