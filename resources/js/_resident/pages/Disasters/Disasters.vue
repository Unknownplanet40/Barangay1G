<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">
                            Disasters <i class="fas fa-bullhorn"></i>
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
                    <div class="col-12">
                        <div
                            class="callout callout-warning"
                            v-for="(disaster, index) in disasters"
                            :key="index"
                        >
                            <h5>{{ disaster.name }}</h5>

                            <p>{{ disaster.description }}</p>

                            <p>
                                <b-icon icon="calendar" />
                                {{ disaster.date | date }}
                            </p>

                            <p>
                                <b-icon icon="map-marker" />
                                {{ disaster.location }}
                            </p>
                        </div>
                        <infinite-loading @infinite="infiniteHandler">
                            <span slot="no-more">No more disasters</span>
                            <span slot="no-results">No disasters found</span>
                        </infinite-loading>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import {
    getResidentDisasters,
    getResidentDisasterPerPage,
} from "../../../services/api";

export default {
    name: "resident-disasters",
    components: {
        InfiniteLoading,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Home", to: "/" },
                { text: "Disasters", active: true },
            ],
            disasters: [],
            currentPage: 1,
            totalPages: 1,
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData(page = 1) {
            this.$Progress.start();
            try {
                const response = await getResidentDisasters({ page });
                this.currentPage = response.data.data.current_page;
                this.totalPages = response.data.data.last_page;
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                    this.$Progress.finish();
                }, 1000);
            }
        },
        async infiniteHandler($state) {
            if (this.currentPage <= this.totalPages) {
                try {
                    const response = await getResidentDisasterPerPage({
                        page: this.currentPage,
                    });
                    this.disasters = [
                        ...this.disasters,
                        ...response.data.data.data,
                    ];
                    this.currentPage += 1;
                    $state.loaded();
                } catch (error) {
                    $state.complete();
                }
            } else {
                $state.complete();
            }
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
