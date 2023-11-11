<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Submit Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>You must enter the goal</h2>
        <p>Please enter a valid goal!!!!</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue == "") {
        this.inputIsInvalid = true;
      } else {
        this.inputIsInvalid = false;
      }
      console.log(this.inputIsInvalid);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style></style>
