<template>
  <div>
    <base-dialog :show="!!error" title="Error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed title="Authanticating..." :show="isLoading">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form>
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="text" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password</p>
        <div class="form-buttons">
          <base-button @click.prevent="submitForm">{{
            submitButtonCaption
          }}</base-button>
          <base-button
            @click.prevent="switchAuthModel"
            type="button"
            mode="flat"
            >{{ switchModeButtonCaption }}</base-button
          >
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Login";
      } else {
        return "Signup";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Signup instead";
      } else {
        return "Login instead";
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      // send http request
      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", actionPayload);
        } else {
          await this.$store.dispatch("signup", actionPayload);
        }

        const redirectUrl = "/" + (this.$route.query.redirect || "coaches");

        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message || "Failed to authanticate, try later";
      }
      this.isLoading = false;
    },
    switchAuthModel() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}
.form-buttons {
  display: flex;
  flex-direction: row;
  justify-items: center;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
