import Vue from 'vue';

import './plugins';
import App from './App.vue';
import store from './store';
import mixins from './mixins';
import router from './router';
import * as filters from './filters';

Vue.mixin(mixins);

Object.keys(filters).forEach((filter) => {
  Vue.filter(filter, filters[filter]);
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
