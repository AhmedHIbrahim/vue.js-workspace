<template>
  <div>
    <h2>{{ userId }}</h2>
    <h2>{{ fullName }}</h2>
    <h2>{{ userAge }}</h2>
    <button @click="saveData">save</button>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  props: ["firstName", "lastName", "userAge"],

  setup(props, context) {
    const userId = inject("userId");

    // LIFE-CYCLE
    onBeforeMount(function () {
      console.log("onBeforeMount");
    });
    onMounted(function () {
      console.log("onMounted");
    });
    onBeforeUpdate(function () {
      console.log("onBeforeUpdate");
    });
    onUpdated(function () {
      console.log("onUpdated");
    });
    onBeforeUnmount(function () {
      console.log("onBeforeUnmount");
    });
    onUnmounted(function () {
      console.log("onUnmounted");
    });

    const fullName = computed(function () {
      return props.firstName + " " + props.lastName;
    });

    const saveData = () => {
      context.emit("save-data", fullName.value); // in options api: this.$emit('save-data', fullName)
    };

    return {
      fullName,
      saveData,
      userId,
    };
  },
};
</script>

<style></style>
