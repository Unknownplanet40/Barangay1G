<template>
  <div>
    <div class="row">
        <form @submit.prevent="searchYearlyReport">
            <div class="input-group mb-3">
                <select v-model="search.year" class="form-control">
                    <option value="">Select Year</option>
                    <option :value="year" v-for="year in years" :key="year">
                        {{ year }}
                    </option>
                </select>
                <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </div>
            </div>
        </form>

   
    </div>
    <div class="row">
        <div class="col-10">
            <bar-chart :chart-data="barChartData" :options="barChartOptions" :height="200" />

        </div>
        <div class="col-2">
            <ul class="list-group list-group-flush" v-for="(data, index) in graph_data" :key="index">
                <li class="list-group-item text-center"> 
                    <h5 class="text-center" >{{data.month}}</h5>
                    <button type="submit" class="btn btn-link" :class="'color-'+index" @click="showPieData(data)">
                        {{data.total}}
                    </button>
                </li>
             
            </ul>
        </div>

    </div>

   


    <b-modal centered size="lg"  ref="reportPerMonth" hide-footer title="Monthly Report">
            <div class="d-block">
                <div class="row">
                    <pie-chart :chart-data="chartDatasPie" :height="200"></pie-chart>
                    
                    <div v-if="Object.keys(most_traveled).length == 0">
                            
                    </div>
                    <div v-else class="mt-4">
                        <p class="text-center">Most traveled destination for this month <span style="font-style:italic;">"{{most_traveled.travel.destination}}"</span> </p> 
                    </div>
                  
                </div>
                <div class="text-right">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        v-on:click="hideMonthlyReport"
                    >
                        Close
                    </button>
                </div>
            </div>
        </b-modal>

  </div>
</template>

<script>
import BarChart from './BarChart.js'
import PieChart from "./PieChart.js";
import * as reportServices from '../../../../services/report_service';
const barLabels = [];
// const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const barBackgroundColors = ['red', 'green', 'gold', 'orange', 'blue', 'brown', 'purple', 'crimson', 'teal', 'gray', 'aqua', 'lime', 'wheat']

export default {
  components: {
    BarChart,
    PieChart
  },
    data() {
        return {
            barChartData: null,
            barChartOptions: null,
            search: {
                year: '',
            },
            years: '',
            chartLabels : [],
            graph_data : {},
            monthly_report : {},
            most_traveled : {},

            
            chartDatasPie: null,
        }
    },
    computed : {
        inittahun() {
            let years = [];
            for (var i = 2015; i <= new Date().getFullYear(); i++) {
                years.push(i );
            }

            this.years = years;
        },
    },
    watch: {
        chartData: function() {
            this.renderChart(this.chartData, this.options);
        }
    },
   
    mounted() {
        this.fillData();
        this.getMonthlyReport();
       
    },

    

    methods: {

        showPieData: async function(data){
            this.$refs.reportPerMonth.show();
            this.monthly_report = {...data}

           
            
            try {
                const response = await reportServices.get_monthly_report(this.monthly_report.month_num, this.search.year)
                this.most_traveled = response.data.reduce((a,b) => Number(a.passengers) > Number(b.passengers) ? a : b)
                // console.log(Math.max.apply(Math, response.data.passengers));
                this.month_data = response.data
                console.log(response.data);
                const labaelDb = []
                const passengers = []
                $.each(response.data, function(key, value) {
                    labaelDb.push(value.travel.destination)
                    passengers.push(value.passengers)
                })
                
                this.chartDatasPie = {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: labaelDb,
                datasets: [
                        {
                            label: "Data One",
                            backgroundColor: barBackgroundColors,
                            data: passengers,
                        },
                    ],
                }

            } catch(e) {

            }
        },

        hideMonthlyReport(){
            this.$refs.reportPerMonth.hide();
        },
        getMonthlyReport: async function(){
            try { 
                const response = await reportServices.get_monthly_bookings();
                console.log(response.data)
                console.log(this.inittahun);
            } catch(e) {

            }
        },

        searchYearlyReport: async function(){
            try {
                const response = await reportServices.get_search_yearly_report(this.search.year)
                const monthlyLabels = []
                const labels = [];
                const data = [];
                const reset_arr = [];
                var year = this.search.year
                console.log(year)
                $.each(response.data, function(key, value) {
                    labels.push(value.month)
                    monthlyLabels.push(value.month)
                    data.push(value.count)
                    reset_arr.push({'key': key, 'month':value.month, 'total': value.count, 'month_num': value.month_num})
                })
                this.graph_data = reset_arr;
                this.chartLabels = labels;
                this.barChartData = {
                    labels: labels,
                    datasets: [
                        {
                            // label: ' total',
                            backgroundColor: barBackgroundColors,
                            data: data
                        }
                    ]
                }

                this.barChartOptions = {
                    responsive: true,
                    legend: {
                        display: false,
                        labels: {
                            generateLabels() {
                            return monthlyLabels.map((label, index) => ({
                                // text: label,
                                // fillStyle: barBackgroundColors[index]
                            }))
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Yearly Report'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }


            }catch(e){

            }
        },


        fillData(){ 
           
            // this.barChartData = {
            //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            //     datasets: [
            //         {
            //             label: barLabels,
            //             backgroundColor: barBackgroundColors,
            //             data: [10, 15, 20]
            //         }
            //     ]
            // },

            // this.barChartOptions = {
            //     responsive: true,
            //     legend: {
            //         display: true,
            //         labels: {
            //             generateLabels() {
            //             return barLabels.map((label, index) => ({
            //                 text: label,
            //                 fillStyle: barBackgroundColors[index]
            //             }))
            //             }
            //         }
            //     },
            //     title: {
            //         display: true,
            //         text: 'Yearly Report'
            //     },
            //     scales: {
            //         yAxes: [{
            //             ticks: {
            //                 beginAtZero: true
            //             }
            //         }]
            //     }
            // }
        }
    },


    
    
}
</script>

<style>
.color-0{
    color:red;
}
.color-1{
    color:green;
}
.color-2{
    color:gold;
}
.color-3{
    color:orange;
}
.color-4{
    color:blue;
}
.color-5{
    color:purple;
}
.color-6{
    color:crimson;
}
.color-7{
    color:teal;
}
.color-8{
    color:gray;
}
.color-9{
    color:aqua;
}
.color-10{
    color:lime;
}
.color-11{
    color:wheat;
}

</style>