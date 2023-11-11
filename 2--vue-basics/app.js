const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      suffixedName: "",
      confirmedName: "",
      name: "",
      //fullName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
        // const that = this;
        // setTimeout(() => {
        //   that.counter = 0;
        // }, 2000);
      }
    },
    // name(newValue, oldValue) {
    //   this.fullName = newValue + " " + this.lastName;
    // },
    // lastName(newValue, oldValue) {
    //   this.fullName = this.name + " " + newValue;
    // },
  },
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }

      return this.name + " " + this.lastName;
    },
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      // this.counter--
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    setNameWithSuffix(event, suffix = "") {
      this.suffixedName = event.target.value + " " + suffix;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      event.preventDefault();
      alert("Submitted!");
    },
    submitFormWithModifier() {
      alert("Submitted with prevent modifier!");
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
