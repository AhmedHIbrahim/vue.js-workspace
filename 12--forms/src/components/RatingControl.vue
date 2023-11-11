<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
// NOTE: to keep component async with the parent events, data activeOption was ignored (activeOptionX)
// ----- instead activeOption computed property was used
// ----- you can use modelValue directly though

export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  //   data() {
  //     return {
  //       activeOptionX: this.modelValue,
  //     };
  //   },
  //   computed: {
  //     activeOption() {
  //       return this.modelValue;
  //     },
  //   },
  methods: {
    activate(option) {
      console.log(option);
      // this.activeOptionX = option;
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}
.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
</style>
