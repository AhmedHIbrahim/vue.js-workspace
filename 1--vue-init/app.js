const app = Vue.createApp({
  data() {
    // data: function(){...}
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org",
      courseGoalA: "Finish the course and master Vue",
      courseGoalB: "Master Vue and build amazing websites!",
      courseGoalHTML: "Master Vue and build amazing websites!",
    };
  },
  methods: {
    outputStaticGoal() {
      const randomNumber = Math.random();

      if (randomNumber > 0.5) {
        return "Learn Vue";
      } else {
        return "Master Vue";
      }
    },

    outputDataGoal() {
      const randomNumber = Math.random();

      if (randomNumber > 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
