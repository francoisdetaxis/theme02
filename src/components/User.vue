<template lang="html">
    <div>
        <Login/>
        <signup/>
    </div>

</template>

<script>
    import Login from "@/components/User/Login";
    import Signup from "@/components/User/Signup";

    export default {
        name: 'User',
        components: {Signup, Login},
        props: {
            msg: String,
            currentUser: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

