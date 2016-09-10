import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import User from './user.vue';

Vue.use(VueRouter);

const Bar = Vue.extend({
  template: '<p>This is bar!</p>',
});

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  linkActiveClass: 'active',
});

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
  '/:nat': {
    name: 'user',
    component: User,
  },
  '/bar': {
    component: Bar,
  },
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');
