<template>
  <div>
    <div class="container">
      <users-list></users-list>
    </div>
    <div class="container">
      <div class="block" :class="{ animate: blockIsAnimated }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition
        name="para"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <p v-if="paraIsVisible">This is the first pragraph</p>
      </transition>
      <button @click="toggleParagraph">Toggle 1st Pragraph</button>
    </div>
    <div class="container">
      <transition
        :css="false"
        @before-enter="beforeP2Enter"
        @enter="p2Enter"
        @after-enter="afterP2Enter"
        @before-leave="beforeP2Leave"
        @leave="p2Leave"
        @after-leave="afterP2Leave"
        @enter-cancelled="p2EnterCancelled"
        @leave-cancelled="p2LeaveCancelled"
      >
        <p v-if="para2IsVisible">This is the second pragraph</p>
      </transition>
      <button @click="toggleP2Paragraph">Toggle 2nd Pragraph</button>
    </div>
    <div class="container">
      <transition name="fade-button" mode="out-in">
        <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
        <button @click="hideUsers" v-else>Hide Users</button>
      </transition>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>
</template>

<script>
import UsersList from "./components/ListData.vue";

export default {
  components: { UsersList },
  data() {
    return {
      paraIsVisible: false,
      para2IsVisible: false,
      dialogIsVisible: false,
      usersAreVisible: false,
      blockIsAnimated: false,
      p2EnterInterval: null,
      p2LeaveInterval: null,
    };
  },
  methods: {
    beforeEnter(element) {
      console.log("before enter");
      console.log(element);
    },
    enter(element) {
      console.log("enter");
      console.log(element);
    },
    afterEnter(element) {
      console.log("afterEnter");
      console.log(element);
    },
    beforeLeave(element) {
      console.log("before leave");
      console.log(element);
    },
    leave(element) {
      console.log("leave");
      console.log(element);
    },
    afterLeave(element) {
      console.log("after leave");
      console.log(element);
    },

    p2EnterCancelled(el) {
      clearInterval(this.p2EnterInterval);
    },
    p2LeaveCancelled(el) {
      clearInterval(this.p2LeaveInterval);
    },
    beforeP2Enter(el) {
      el.style.opacity = 0;
    },
    p2Enter(el, done) {
      let round = 1;
      this.p2EnterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.p2EnterInterval);
          done();
        }
      }, 20);
    },
    afterP2Enter(el) {},
    beforeP2Leave(el) {
      el.style.opacity = 1;
    },
    p2Leave(el, done) {
      let round = 50;
      this.p2LeaveInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round--;
        if (round === 0) {
          clearInterval(this.p2LeaveInterval);
          done();
        }
      }, 20);
    },
    afterP2Leave(el, done) {},
    animateBlock() {
      this.blockIsAnimated = true;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    toggleP2Paragraph() {
      this.para2IsVisible = !this.para2IsVisible;
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
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

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}

.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.3s ease-out;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.para-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.para-leave-active {
  transition: all 0.3s ease-in;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>

// .v-enter-from { // /* opacity: 0; // transform: translateY(-30px); */ // } //
.v-enter-active { // /* transition: all 0.3s ease-out; */ // animation:
slide-scale 0.3s ease-out forwards; // } // .v-enter-to { // /* opacity: 1; //
transform: translateY(0px); */ // } // .v-leave-from { // /* opacity: 1; //
transform: translateY(0px); */ // } // .v-leave-active { // /* transition: all
0.3s ease-in; */ // animation: slide-scale 0.3s ease-out forwards; // } //
.v-leave-to { // /* opacity: 0; // transform: translateY(30px); */ // }
