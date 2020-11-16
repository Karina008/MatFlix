<script>
  import { Pie } from 'vue-chartjs'

  export default {
    extends: Pie,
    // props: {
    //     manchart: {
    //         type: Object,
    //     },
    // },
    data () {
      return {
        chartData: {
          labels: ["남성", "여성",],
          datasets: [{
              borderWidth: 1,
              borderColor: [
              'blue',
              'red'            
              ],
              backgroundColor: [
              'blue',
              'red',                
              ],
              data: [this.$session.get("chartdata").man, this.$session.get("chartdata").woman,]
            }]
        },
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },

    created() {
    },

    mounted() {
      this.renderChart(this.chartData, this.options)
    },

    destroyed() {
    this.$session.remove("chartdata")
  }
  }
</script>

<style>

</style>