// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import VueRouter from 'vue-router';
import 'bootstrap';
//import App from 'components/app.vue';
//import Routers from './router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//global register vue wizard
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

//连级多选器 npm i cascader-multi --save
import cascaderMulti from "cascader-multi";
Vue.use(cascaderMulti);


import { Button, Table } from 'iview';

Vue.component('Button', Button);
Vue.component('Table', Table);


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueFormWizard);


/*const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router,
  components: { App },
  template: '<App/>'
})


/*new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});*/
