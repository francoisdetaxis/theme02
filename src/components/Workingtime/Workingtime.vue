<template>
    <div>
        <h1>Workingtime</h1>
            <div class="align-content-center">
                <h1>{{ user.email }}</h1>
                <button v-on:click="onStartInputWorkingTime" class="btn btn-lg btn-primary btn-block" type="button">Start working time</button>
            </div>
    </div>

</template>

<script>
    export default {
        name: "Workingtime",
        props: {
            user: Object
        },
        data() {
            return {
                startInputWorkingTime: null,
                endInputWorkingtime: null
            }
        },
        methods: {
            onStartInputWorkingTime() {
                {
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");

                    var raw = JSON.stringify({
                        "workingtimes":
                            {
                                "end": "2020-10-27 18:15:18",
                                "start": "2020-10-27 18:15:18"
                            }
                    });

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };

                    fetch("http://localhost:4000/api/workingtimes/" + this.user.id, requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
                }
            },
        }


    }
</script>

<style scoped>

</style>