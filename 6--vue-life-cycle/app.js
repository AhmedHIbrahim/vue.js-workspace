const app = Vue.createApp({
  // template: "<div class>HI FROM TEMPLATE</div>",
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.log(this.$refs.userText.value);
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("BEFORE CREATE");
  },
  created() {
    console.log("CREATED");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate(){
    console.log("beforeUpdate");
  },
  updated(){
    console.log("updated");
  },
  beforeUnmount(){
    console.log("beforeUnmount");
  },
  unmounted(){
    console.log("unmounted");
  },
});

app.mount("#app");

//app.unmount("#app");

// -- PROXY DEMO

/*
const demo = {
  message: "Hello!",
  fullMessage: "Hello WORLD",
};

const handlers = {
  set(target, key, value) {
    if (key === "message") {
      target.fullMessage = value + " WORLD";
    }
    target.message = value;
  },
};
const prx = new Proxy(demo, handlers);

console.log(prx.fullMessage);

prx.message = "Hello!!!";

console.log(prx.fullMessage);

*/
