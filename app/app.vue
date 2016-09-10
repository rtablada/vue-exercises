<template>
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- use v-link directive for navigation. -->
    <a v-link="{ name: 'user', params: {nat: 'us'} }">Murica</a>
    <a v-link="{ name: 'user', params: {nat: 'uk'} }">Allo Govna!</a>
    <a v-link="{ name: 'user', params: {nat: 'fr'} }">Do you hear the people sing?</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
  </p>
  <!-- route outlet -->
  <router-view></router-view>
</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      msg: 'Hello Vueify'
    }
  },
});
</script>
