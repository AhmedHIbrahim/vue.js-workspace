<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>

<style>
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}


.route-enter-from,
.route-leave-to {
  opacity: 0;
}
.route-enter-active {
  transition: opacity 0.3s ease-out;
}
.route-leave-active {
  transition: opacity 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
