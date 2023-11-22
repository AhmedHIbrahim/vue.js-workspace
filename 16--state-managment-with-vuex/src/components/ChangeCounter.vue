<template>
  <div>
    <button @click="increment">ADD 2 BY INCREMENT</button>
    <button @click="increase({ value: 3 })">ADD 3 BY INCREASE</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // increment() {
    //   this.$store.dispatch("increment");
    // },
    // increase({value = 3}) {
    //   this.$store.dispatch("increase", value);
    // },
    // .. ALTERNATIVELY >
    ...mapActions("numbers", ["increment", "increase"]),
    // .. ALTERNATIVELY, then use  incrementy and increasey>
    // ...mapActions({
    //   incrementy: "increment",
    //   increasey: "increase",
    // }),
  },
};
</script>

<style></style>
