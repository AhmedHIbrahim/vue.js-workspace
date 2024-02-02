<template>
    <section class="container">
      <h2>{{ user.name }}</h2>
      <h2>{{ user.age }}</h2>
      <button @click="setAge">Update Age</button>
    </section>
  </template>
  
  <script>
  import { ref, reactive, isReactive, isRef, toRefs } from "vue";
  
  export default {
    setup() {
      const uName = ref("Omar"); // ref is used for all kind of types, including objects
      //uName.value = 'Bilgi'
      const user = reactive({
        // reactive is used specifically for object
        name: "Omar",
        age: 29,
      });
      const userRefs = toRefs(user);
  
      console.log(isReactive(user)); // true
      console.log(isReactive(user.name)); // false
      console.log(isRef(uName)); // true
      console.log(isRef(uName.value)); // false
      console.log(userRefs.name, userRefs.age); // 
  
      setTimeout(() => {
        user.age = 55;
      }, 2000);
  
      function setUserAge() {
        user.age = 105;
      }
  
      return { user, setAge: setUserAge };
    },
    // data() {
    //   return {
    //     userName: 'M',
    //   };
    // },
  };
  </script>
  
  <style>
  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: sans-serif;
  }
  
  body {
    margin: 0;
  }
  
  .container {
    margin: 3rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    text-align: center;
  }
  </style>
  