<template>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Time Manager</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                    aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample04">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a v-on:click="clickHome" class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="" id="dropdown04" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">{{ currentUser ? null : "Log in" }}</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown04">
                            <a v-on:click="clickLogin" class="dropdown-item">Log in</a>
                            <a v-on:click="clickSignup" class="dropdown-item">Sign up</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <component v-bind:is="currentComponent"></component>
    </div>
</template>

<script>
    import Signup from "@/components/User/Signup";
    import Homepage from "@/components/Homepage";
    import Login from "@/components/User/Login";

    export default {
        name: 'App',
        components: {
            Homepage,
            Signup,
            Login
        },
        methods: {
            clickHome() {
                this.currentComponent = "Homepage";
            },
            clickLogin() {
                this.currentComponent = "Login";
            },
            clickSignup() {
                this.currentComponent = "Signup";
            }
        },
        data (){
            return {
                currentComponent:"Homepage"
            }
        },
        props: {
            currentUser: String
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
