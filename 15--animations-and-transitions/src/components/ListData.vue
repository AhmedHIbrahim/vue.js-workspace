<template>
  <div>
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
    <div>
      <input type="text" ref="userInputRef" />
      <button @click="addUser">Add User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Ali", "Omar", "Mohamed", "Ahmed", "Yosuef"],
    };
  },
  methods: {
    addUser: function () {
      this.users.unshift(this.$refs.userInputRef.value);
      this.$refs.userInputRef.value = "";
    },
    removeUser: function (user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-move {
  transition: transform 0.8s ease-out;
}
</style>
