// Import the component like any JS file.
import ListApp from '~/app/app.vue';
import Lists from '~/app/lists/lists.vue';
import Vue from 'vue/dist/vue';

// Register it as a global component
Vue.component('list-app', ListApp);
Vue.component('app-lists', Lists);

var app = new Vue({
  el: '#app',
  template: `<list-app />`,
  // components: {
  //   // Or pass it in as a local component
  //   Lists
  // }
});
