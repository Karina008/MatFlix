<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    
    data() {
      return {
        chartData: {
          labels: ["0~9", "10~19", "20~29", "30~39","40~49","50~59","60~69"
          ],
          datasets: [{
            label: '연령별 이용자수',
            borderWidth: 1,
            backgroundColor: [
              'green',
              'blue',
              'red',
              'yellow',
              'orange',
              'white',
              'purple'
            ],
            borderColor: [
              'green',
              'blue',
              'red',
              'yellow',
              'orange',
              'white',
              'purple'
            ],
            pointBorderColor: '#2554FF',
            data: [this.$session.get("chartdata").age0, this.$session.get("chartdata").age10, this.$session.get("chartdata").age20, this.$session.get("chartdata").age30,
            this.$session.get("chartdata").age40, this.$session.get("chartdata").age50, this.$session.get("chartdata").age60,]
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
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
    }
  }
</script>