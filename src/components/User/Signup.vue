<template>
    <form class="form-signin">
        <img class="mb-4" src="../../assets/logo.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
        <label for="signupInputEmail" class="sr-only">Email address</label>
        <input type="email" id="signupInputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="signupInputPassword" class="sr-only">Password</label>
        <input type="password" id="signupInputPassword" class="form-control" placeholder="Username" required>
        <button v-on:click="createUser" class="btn btn-lg btn-primary btn-block" type="submit" >Sign up</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
    </form>
</template>

<script>
    export default {
        name: "Signup",
        methods: {
            createUser (){
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({"users":{"username":"test","email":"123@man"}});

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                console.log("**********************************************************************************")

                fetch("http://localhost:4000/api/users", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }
        }
    }
</script>

<style scoped>
    html,
    body {
        height: 100%;
    }

    body {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }

    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>