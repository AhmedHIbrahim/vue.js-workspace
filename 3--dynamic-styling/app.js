const app = Vue.createApp({
  data() {
    return {
      selectedBox: "",
    };
  },
  computed: {
    boxDStyles() {
      return {
        active: this.selectedBox === "D",
      };
    },
  },
  methods: {
    selectBox(boxId) {
      this.selectedBox = boxId;
    },
  },
});

app.mount("#styling");
