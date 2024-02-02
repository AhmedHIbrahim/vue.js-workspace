<template>
  <div>
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      :user-age="userAge"
      @save-data="saveData"
    ></user-data>
    <input type="text" placeholder="First Name" @input="setFirstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />

    <button @click="incrementAge">Increment Age</button>
  </div>
</template>

<script>
import { ref, computed, watch, provide } from "vue";
import UserData from "./components/UserData.vue";

export default {
  components: {
    UserData,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const userAge = ref(0);
    const userId = ref("U1");

    provide("userId", userId);

    // can be replaced by v-model appraoch
    const saveData = (value) => {
      console.log(value);
    };

    const setFirstName = (event) => {
      firstName.value = event.target.value;
    };
    const incrementAge = () => {
      userAge.value += 1;
    };

    const fullName = computed(function () {
      return firstName.value + " " + lastName.value;
    });

    watch([fullName, userAge], function (newValues, oldValues) {
      console.log("Old name: " + oldValues[0], oldValues[1]);
      console.log("New name: " + newValues[0], newValues[1]);
    });

    return {
      setFirstName,
      fullName,
      firstName,
      lastName, // important export
      userAge,
      incrementAge,
      saveData,
    };
  },
};
</script>

<style></style>
