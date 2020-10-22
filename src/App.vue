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
          <li class="nav-item active">
            <a v-if="userLoggedIn" v-on:click="clickClocking" class="nav-link">Clocking <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">{{ user.username }}</a>
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a v-if="userLoggedOut" v-on:click="clickLogin" class="dropdown-item">Log in</a>
              <a v-if="userLoggedOut" v-on:click="clickSignup" class="dropdown-item">Sign up</a>
              <a v-if="userLoggedIn" v-on:click="clickEdit" class="dropdown-item">Edit</a>
              <a v-if="userLoggedIn" v-on:click="userLogout" class="dropdown-item">Log out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <component v-bind:is="currentComponent" @successful-login="userLogin" @successful-logout="userLogout"
               @change-component="updateCurrentComponent" :user="user"></component>
  </div>
</template>

<script>
import Signup from "@/components/User/Signup";
import Homepage from "@/components/Homepage";
import Login from "@/components/User/Login";
import Edit from "@/components/User/Edit";
import Clocking from "@/components/Clocking/Clocking";

export default {
  name: 'App',
  components: {
    Homepage,
    Signup,
    Login,
    Edit,
    Clocking
  },
  methods: {
    userLogin(loggedUser) {
      this.user = loggedUser;
      this.userLoggedIn = true;
      this.userLoggedOut = false;
    },
    userLogout() {
      this.user = {
        username: "Log in", email: "", id: -1
      };
      this.userLoggedIn = false;
      this.userLoggedOut = true;
      this.currentComponent = "Homepage"
    },
    updateCurrentComponent(componentName) {
      this.currentComponent = componentName;
    },
    clickHome() {
      this.currentComponent = "Homepage";
    },
    clickClocking() {
      this.currentComponent = "Clocking";
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
  }
  ,
  data() {
    return {
      user: {
        username: "Log in",
        email: "",
        id: -1
      },
      currentComponent: "Homepage",
      userLoggedIn: false,
      userLoggedOut: true
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
