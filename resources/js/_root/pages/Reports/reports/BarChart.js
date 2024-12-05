import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Bar,
  mixins: [reactiveProp],
  // props: {
  //   data: {
  //     type: Object,
  //     required: true,
  //   },
  //   options: {
  //     type: Object,
  //     required: true,
  //   }
  // },
  props: ['options', 'chartData'], 
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}