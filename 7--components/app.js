const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Omar",
          email: "omar@mars.p",
          phone: "0548934789",
        },
        {
          id: 2,
          name: "Yousef",
          email: "yousef@mars.p",
          phone: "0548324789",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li :key="friend.id">
    <h2>{{friend.name}}</h2>
    <button v-on:click="toggleDetails()">
      {{detailsAreVisiable ? 'Hide': 'Show'}}
      Details</button>
    <ul v-if="detailsAreVisiable">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
`,
  props: {
    friend: Object, 
  },
  data() {
    return {
      detailsAreVisiable: false,
    };
  },
  methods: {
    toggleDetails() {
      console.log("CLICK");
      this.detailsAreVisiable = !this.detailsAreVisiable;
    },
  },
});

app.mount("#app");
