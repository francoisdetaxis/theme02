<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a v-on:click="clickHome" class="navbar-brand">Time Manager</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
              aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a v-on:click="clickHome" class="nav-link">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">{{ currentUser }}</a>
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a v-if="showLogin" v-on:click="clickLogin" class="dropdown-item">Log in</a>
              <a v-if="showSignup" v-on:click="clickSignup" class="dropdown-item">Sign up</a>
              <a v-if="showEdit" v-on:click="clickEdit" class="dropdown-item">Edit</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <component v-bind:is="currentComponent" @successful-login="userLogin" @change-component="updateCurrentComponent" :currentUser="currentUser"></component>
  </div>
</template>

<script>
import Signup from "@/components/User/Signup";
import Homepage from "@/components/Homepage";
import Login from "@/components/User/Login";
import Edit from "@/components/User/Edit";

export default {
  name: 'App',
  components: {
    Homepage,
    Signup,
    Login,
    Edit
  },
  methods: {
    userLogin(currentUser) {
      // console.log("INSIDE updateCurrentUser")
      // console.log(currentUser);
      this.currentUser = currentUser;
      this.showEdit = true;
      this.showLogin = false;
      this.showSignup = false;
    },
    updateCurrentComponent(componentName) {
      this.currentComponent = componentName;
    },
    clickHome() {
      this.currentComponent = "Homepage";
    },
    clickLogin() {
      this.currentComponent = "Login";
    },
    clickSignup() {
      this.currentComponent = "Signup";
    },
    clickEdit() {
      this.currentComponent = "Edit";
    }
  },
  data() {
    return {
      currentComponent: "Homepage",
      currentUser: "Log in",
      showEdit: false,
      showLogin: true,
      showSignup: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  /*height: 100vh;*/
}

body {
  padding-bottom: 20px;
}

.navbar {
  margin-bottom: 20px;
}
</style>
