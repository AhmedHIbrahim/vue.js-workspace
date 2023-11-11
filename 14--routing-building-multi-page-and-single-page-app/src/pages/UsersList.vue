<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from "../components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  methods: {
    confirmInput() {
      this.$router.push("/teams");
      // this.$router.back();
      // this.$router.forward();
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("UserList cmp beforeRouteEnter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("UserList cmp beforeRouteLeave");
    console.log(to, from);
    // if (this.changesSaved) {
    //   next();
    // } else {
    //   const wantToLeave = confirm("Are you sure you want to leave ?");
    //   next(wantToLeave);
    // }
    next();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
