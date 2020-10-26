<template>
  <div>
    <h1>My dashboard</h1>
    <p>Total worked time: {{ totalWorkedTime == null ? "No data" : (totalWorkedTime / (1000 * 60 * 60)).toFixed(1) + " hrs" }}</p>
    <p>Total time: {{ totalTime == null ? "No data" : (totalTime / (1000 * 60 * 60)).toFixed(1) + " hrs" }}</p>
    <p>Max date: {{ maxDate == null ? "No data" : maxDate }}</p>
    <p>Min date: {{ minDate == null ? "No data" : minDate }}</p>
    <button v-on:click="getWorkingtimes" type="button">TEST</button>
    <donut-chart
        id="donut"
        :data="donutData"
        colors='[ "#FF6384", "#36A2EB" ]'
        resize="true">
    </donut-chart>
  </div>

</template>

<script>
import {DonutChart} from 'vue-morris';

export default {

  name: "Dashboard",
  props: {
    user: Object
  },
  methods: {
    getWorkingtimes() {
      let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("http://localhost:4000/api/workingtimes/" + this.user.id + "?start=2000-01-01 01:01:01&end=9000-01-01 01:01:01", requestOptions)
          .then(function (response) {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response;
          })
          .then(response => response.json())
          .then(result => {
            result = result.data;
            // console.log(result);
            let dates = [];
            result.forEach(element => {
              // console.log(element);
              let end = new Date(element.end);
              let start = new Date(element.start);
              dates.push(end);
              dates.push(start);
              this.totalWorkedTime += (end.getTime() - start.getTime())
            });
            //calculate the total time between the min date and max date to get the total time.
            //getTime() returns the times in ms since 1970/01/01
            this.maxDate = new Date(Math.max.apply(null, dates));
            this.minDate = new Date(Math.min.apply(null, dates));
            this.totalTime = (this.maxDate.getTime() - this.minDate.getTime());

            //donutData[0] is the time worked.
            this.donutData[0].value = (this.totalWorkedTime / (1000 * 60 * 60)).toFixed(1);
            //donutData[1] is the time NOT worked.
            this.donutData[1].value = ((this.totalTime - this.totalWorkedTime) / (1000 * 60 * 60)).toFixed(1);
          })
          .catch(error => console.log('error', error));
    }
  },
  data() {
    return {
      donutData: [
        {label: 'Working Time', value: 300},
        {label: 'Rest time', value: 50},
      ],
      totalWorkedTime: null,
      totalTime: null,
      maxDate: null,
      minDate: null
    }
  },
  components: {
    DonutChart
  }
}
</script>

<style scoped>

</style>