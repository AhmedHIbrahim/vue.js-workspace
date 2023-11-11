<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click.prevent="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        NO DATA FOUND!
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    async loadExperiences() {
      try {
        this.isLoading = true;
        this.error = null;
        const response = await fetch(
          "https://vue-http-23cbb7-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json"
        );

        if (response.ok) {
          const data = await response.json();
          const results = [];
          for (const id in data) {
            results.push({ id, ...data[id] });
          }
          console.log(results);
          this.results = results;
        }
      } catch (e) {
        console.log(">", e);
        this.error = "Failed to fetch data - please try again";
      }
      this.isLoading = false;
    },
  },

  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
