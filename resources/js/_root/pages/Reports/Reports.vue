<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">
                            Reports <i class="fas fa-chart-line"></i>
                        </h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <b-breadcrumb
                                class="breadcrumb-item"
                                :items="breadcrumb"
                            ></b-breadcrumb>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <form @submit.prevent="submitReport">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="float-left">Date :</p>
                                        </div>

                                        <div class="col-sm-9">
                                            <b-form-datepicker
                                                id="example-datepicker"
                                                v-model="report.date"
                                            ></b-form-datepicker>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-grid gap-2 col-12 mx-auto">
                                    <button
                                        class="btn btn-primary col-12 mx-auto mb-2"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-header">
                                <h4>Report Generated</h4>
                            </div>
                            <div class="card-body">
                                <div class="card-body table-responsive p-0">
                                    <p>
                                        Total Assistance: {{ assistanceCount }}
                                    </p>
                                    <p>
                                        Total Assistance This Year:
                                        {{ assistancePerYear }}
                                    </p>
                                    <p>
                                        Total Assistance This Month:
                                        {{ assistancePerMonth }}
                                    </p>
                                    <p>
                                        Total Assistance This Week:
                                        {{ assistancePerWeek }}
                                    </p>
                                </div>
                                <BarChart
                                    :chart-data="barChartData"
                                    :options="barChartOptions"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarChart from "./reports/BarChart.js";
import PieChart from "./reports/PieChart.js";

import { getAssistanceData } from "../../../services/api";
const barLabels = [];
const barBackgroundColors = [
    "red",
    "green",
    "gold",
    "orange",
    "blue",
    "brown",
    "purple",
    "crimson",
    "teal",
    "gray",
    "aqua",
    "lime",
    "wheat",
];

export default {
    name: "Reports",
    components: {
        BarChart,
        PieChart,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Home", to: "/" },
                { text: "Reports", active: true },
            ],
            report: {
                year: "",
                month: "",
                location: "any",
                date: "",
            },

            errors: "",
            options: {
                format: "YYYY",
                useCurrent: false,
            },

            appointment_data: [],
            report_data: {},

            barChartData: null,
            barChartOptions: null,
            chartLabels: [],
            graph_data: {},
            monthly_report: {},
            selected_month: {},
            chartDatasPie: null,
            assistanceCount: 0,
            assistancePerYear: 0,
            assistancePerMonth: 0,
            assistancePerWeek: 0,
        };
    },
    watch: {
        chartData: function () {
            this.renderChart(this.chartData, this.options);
        },
    },
    computed: {
        years() {
            const year = new Date().getFullYear();
            return Array.from(
                { length: year - 2000 },
                (value, index) => 2001 + index
            );
        },
    },
    methods: {
        async fetchAssistanceData() {
            try {
                const data = await getAssistanceData();
                console.log(data);
                this.assistanceCount = data.yearly.reduce(
                    (sum, item) => sum + item.count,
                    0
                );
                this.calculateAssistanceTotals(data);
                this.prepareBarChartData(data);
            } catch (error) {
                this.errors = error.message;
            }
        },
        calculateAssistanceTotals(data) {
            const currentYear = new Date().getFullYear();
            console.log(data);

            const currentMonth = new Date().getMonth() + 1; // getMonth() is zero-based
            const currentWeek = this.getWeekNumber(new Date());
            const yearlyData = data.yearly.find(
                (item) => item.year === currentYear
            );
            const monthlyData = data.monthly.find(
                (item) => item.month === currentMonth
            );
            const weeklyData = data.weekly.find(
                (item) => item.week === currentWeek
            );

            this.assistancePerYear = yearlyData ? yearlyData.count : 0;
            this.assistancePerMonth = monthlyData ? monthlyData.count : 0;
            this.assistancePerWeek = weeklyData ? weeklyData.count : 0;
        },
        getWeekNumber(date) {
            const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
            const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
            return Math.ceil(
                (pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7
            );
        },
        prepareBarChartData(data) {
            const labels = [];
            const dataset = [];

            data.monthly.forEach((item) => {
                const month = new Date(0, item.month - 1).toLocaleString(
                    "default",
                    { month: "short" }
                );

                labels.push(month);
                dataset.push(item.count);
            });

            this.barChartData = {
                labels: labels,
                datasets: [
                    {
                        label: "Assistance Count",
                        backgroundColor: barBackgroundColors,
                        data: dataset,
                    },
                ],
            };

            this.barChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
            };
        },
        submitReport() {
            // Handle form submission logic here
            console.log("Report submitted:", this.report);
        },
    },
    mounted() {
        this.fetchAssistanceData();
    },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
