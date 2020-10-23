<template>
    <div>
        <h1>WorkingTimes</h1>
        <b-table :items="items" :fields="fields" striped responsive="sm" hover>
            <template v-slot:cell(actions)="data">
                <b-button size="sm" @click="onEndWorkingtimes(data.item.id)" class="mr-1" variant="warning">
                    End Workingtimes
                </b-button>
                <b-button size="sm" @click="onDeleteWorkingtimes(data.item.id)" class="mr-1" variant="warning">
                    Delete Workingtimes
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        name: "Workingtimes",
        props: {
            user: Object
        },
        created() {
            this.getWorkingTimesData();
        },
        data() {
            return {
                items: [],
                fields: ['id', 'start', 'end', 'actions']
            }
        },

        methods: {
            getWorkingTimesData(){

                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                fetch("http://localhost:4000/api/workingtimes/" + this.user.id, requestOptions)
                    .then(function (response) {
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        return response;
                    })
                    .then(response => response.json())
                    .then(result => {
                        this.items = result.data
                        .map(_ => {
                            return {
                                id: _.id,
                                start: _.start.slice(0,19).replace(/T/g,' '),
                                end: _.end.slice(0,19).replace(/T/g,' ')
                            }
                        })
                        console.log(this.items);
                        return (this.items);


                        // result.data.forEach(it => {
                        //   let date = new Date(it.time);
                        //   let year = date.getFullYear();
                        //   console.log(year);
                        //
                        // });
                        // var aestTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Paris"});
                        // console.log('Europe time: '+ (new Date(aestTime)).toISOString())
                    })
                    .catch(error => console.log('error', error));
            },
        onEndWorkingtimes(workingtime_id) {
            {
                console.log(workingtime_id);
                var currentDateWithFormat = new Date().toJSON().slice(0, 19).replace(/T/g, ' ');
                this.endInputWorkingTime = currentDateWithFormat;
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var rawWorkingTimes = JSON.stringify({
                    "workingtimes":
                        {
                            "end": currentDateWithFormat,
                        }
                });

                var requestOptionsWorkingTimes = {
                    method: 'PUT',
                    headers: myHeaders,
                    body: rawWorkingTimes,
                    redirect: 'follow'
                };

                var rawClocks = JSON.stringify({
                    "clocks":
                        {
                            "status": false,
                            "time": currentDateWithFormat
                        }
                });

                var requestOptionsClocks = {
                    method: 'POST',
                    headers: myHeaders,
                    body: rawClocks,
                    redirect: 'follow'
                };

                fetch("http://localhost:4000/api/workingtimes/" + workingtime_id, requestOptionsWorkingTimes)
                    .then(response => response.text())
                    .then(result => {
                        console.log(result);
                        fetch("http://localhost:4000/api/clocks/" + this.user.id, requestOptionsClocks)
                            .then(response => response.text())
                            .then(result => {
                                console.log(result)
                                this.getWorkingTimesData();

                            })
                            .catch(error => console.log('error', error))
                    })
                    .catch(error => console.log('error', error));
            }
        },
            onDeleteWorkingtimes(workingtimes_id){

                var requestOptions = {
                    method: 'DELETE',
                    redirect: 'follow'
                };

                fetch("http://localhost:4000/api/workingtimes/" + workingtimes_id, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                            result = JSON.parse(result);
                            console.log(result);
                        this.getWorkingTimesData();

                    })
                    .catch(error => console.log('error', error));
            }
        },
  }
</script>

<style scoped>

</style>