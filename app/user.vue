<template>
  <div class="foo">
    <p>Users!</p>
    <ul>
      <li v-for="person in results">
        {{ person.name.last }}, {{ person.name.first }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  route: {
    data({ to: { params: { nat } } }) {
      return fetch(`https://randomuser.me/api?results=10&nat=${nat}`)
        .then((raw) => raw.json());
    },
  },

  data() {
    return {
      results: null,
      info: null,
    };
  },
});
</script>
