<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">
                            Services <i class="fas fa-concierge-bell"></i>
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
                        <div class="mt-4">
                            <div
                                v-for="(service, index) in services"
                                :key="index"
                            >
                                <b-card no-body class="overflow-hidden">
                                    <b-row no-gutters>
                                        <b-col md="4">
                                            <b-card-img
                                                :src="`/storage/${service.file_path}`"
                                                alt="Image"
                                                class="custom-img-size"
                                            ></b-card-img>
                                        </b-col>
                                        <b-col md="8">
                                            <b-card-body>
                                                <b-card-title
                                                    class="font-weight-bold custom-title-size"
                                                >
                                                    {{ service.title }}
                                                </b-card-title>
                                                <b-card-text>
                                                    <p class="text-indent">
                                                        {{
                                                            service.description
                                                        }}
                                                    </p>
                                                    <br />

                                                    <span>
                                                        <strong
                                                            >Eligibility:</strong
                                                        >
                                                        {{
                                                            service.eligibility
                                                        }}
                                                    </span>
                                                    <br />
                                                    <br />

                                                    <span>
                                                        <strong
                                                            >Category:</strong
                                                        >
                                                        {{ service.category }}
                                                    </span>
                                                    <br />
                                                    <br />

                                                    <br />

                                                    <span>
                                                        <strong
                                                            >Start Date:</strong
                                                        >
                                                        {{
                                                            service.date_start
                                                                | date
                                                        }}
                                                        <strong
                                                            >End Date:</strong
                                                        >
                                                        {{
                                                            service.date_end
                                                                | date
                                                        }}
                                                    </span>
                                                </b-card-text>
                                            </b-card-body>
                                        </b-col>
                                    </b-row>
                                </b-card>
                            </div>
                        </div>
                        <!-- <div
                            class="callout callout-info"
                            v-for="(service, index) in services"
                            :key="index"
                        >
                            <h5>{{ service.title }}</h5>

                            <p>{{ service.description }}</p>

                            <p>
                                <b-icon icon="calendar" />
                                {{ service.date_start | date }} -
                                {{ service.date_end | date }}
                            </p>

                            <p>
                                <b-icon icon="map-marker" />
                                {{ service.location }}
                            </p>
                        </div> -->
                        <infinite-loading @infinite="infiniteHandler">
                            <span slot="no-more">No more services</span>
                            <span slot="no-results">No services found</span>
                        </infinite-loading>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import { getResidentServices } from "../../../services/api";

export default {
    name: "Services",
    components: {
        InfiniteLoading,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Home", to: "/" },
                { text: "Services", active: true },
            ],
            services: [],
            currentPage: 1,
            totalPages: 1,
        };
    },
    methods: {
        async getResidentServices(page = 1) {
            try {
                const response = await getResidentServices({
                    page: page,
                });
                this.currentPage = response.data.data.current_page;
                this.totalPages = response.data.data.last_page;
            } catch (error) {
                console.log(error);
            }
        },

        async infiniteHandler($state) {
            if (this.currentPage <= this.totalPages) {
                try {
                    const response = await getResidentServices({
                        page: this.currentPage,
                    });
                    this.services = [
                        ...this.services,
                        ...response.data.data.data,
                    ];
                    this.currentPage += 1;
                    $state.loaded();
                } catch (error) {
                    console.log(error);
                    $state.complete();
                }
            } else {
                $state.complete();
            }
        },
    },
    mounted() {
        this.getResidentServices();
    },
};
</script>

<style>
.custom-img-size {
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-indent {
    text-indent: 2em; /* Adjust the indent size as needed */
}

.custom-title-size {
    font-size: 1.5rem; /* Adjust the font size as needed */
}
</style>
