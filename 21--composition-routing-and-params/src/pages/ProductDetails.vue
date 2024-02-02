<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script>
import { ref, inject, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  //props: ["pid"],
  setup() {
    const route = useRoute();

    const loadedProducts = inject("products");

    const selectedProduct = computed(() =>
      loadedProducts.value.find((product) => product.id === route.params.pid)
    );

    const description = computed(() => selectedProduct.value.description);
    const title = computed(() => selectedProduct.value.title);
    const price = computed(() => selectedProduct.value.price);

    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
