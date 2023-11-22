<template>
  <div>
    <base-container title="Vuex" v-if="isAuth">
      <the-counter></the-counter>
      <favorite-value></favorite-value>
      <button @click="addOne">Add 10</button>
      <change-counter></change-counter>
    </base-container>
    <base-container title="auth">
      <user-auth></user-auth>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import TheCounter from "./components/TheCounter.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  methods: {
    addOne() {
      // this.$store.commit("increase", { value: 10 });
      // .. ALTERNATIVELY >
      // this.$store.commit({
      //   type: "increase",
      //   value: 10,
      // });
      // .. ALTERNATIVELY IF YOU WANT TO WAIT >
      // dispatching an action after 2 sec
      this.$store.dispatch({
        type: "numbers/increase",
        value: 10,
      });
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
