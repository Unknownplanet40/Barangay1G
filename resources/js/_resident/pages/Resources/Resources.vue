<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">Materials <i class="fas fa-book"></i></h1>
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
                                v-for="(resource, index) in resources"
                                :key="index"
                            >
                                <b-card no-body class="overflow-hidden">
                                    <b-row no-gutters>
                                        <b-col md="6">
                                            <div
                                                v-if="
                                                    isImage(resource.file_path)
                                                "
                                            >
                                                <b-card-img
                                                    :src="`/storage/${resource.file_path}`"
                                                    alt="Image"
                                                    class="custom-img-size"
                                                ></b-card-img>
                                            </div>
                                            <div v-else>
                                                <video
                                                    :src="`/storage/${resource.file_path}`"
                                                    controls
                                                    class="custom-img-size"
                                                ></video>
                                            </div>
                                        </b-col>
                                        <b-col md="6">
                                            <b-card-body>
                                                <b-card-title
                                                    class="font-weight-bold custom-title-size"
                                                >
                                                    {{ resource.title }}
                                                </b-card-title>
                                                <b-card-text>
                                                    <p class="text-indent">
                                                        {{
                                                            resource.description
                                                        }}
                                                    </p>
                                                    <p>
                                                        <strong
                                                            >Category:</strong
                                                        >
                                                        {{ resource.category }}
                                                    </p>
                                                    <p>
                                                        <strong
                                                            >Uploaded
                                                            Date:</strong
                                                        >
                                                        {{
                                                            resource.created_at
                                                                | date
                                                        }}
                                                    </p>
                                                </b-card-text>
                                            </b-card-body>
                                        </b-col>
                                    </b-row>
                                </b-card>
                            </div>
                        </div>
                        <infinite-loading @infinite="infiniteHandler">
                            <span slot="no-more">No more materials</span>
                            <span slot="no-results">No materials found</span>
                        </infinite-loading>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import { getResidentResources } from "../../../services/api";
import { get } from "jquery";

export default {
    name: "Resources",
    components: {
        InfiniteLoading,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Home", to: "/" },
                { text: "Materials", active: true },
            ],
            resources: [],
            currentPage: 1,
            totalPages: 1,
        };
    },
    methods: {
        async getResidentResources(page = 1) {
            try {
                const response = await getResidentResources({ page });
                this.currentPage = response.data.data.current_page;
                this.totalPages = response.data.data.last_page;
            } catch (error) {
                console.log(error);
            }
        },

        async infiniteHandler($state) {
            if (this.currentPage <= this.totalPages) {
                try {
                    const response = await getResidentResources({
                        page: this.currentPage,
                    });
                    this.resources = [
                        ...this.resources,
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
        isImage(filePath) {
            const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg"];
            const extension = filePath.split(".").pop().toLowerCase();
            return imageExtensions.includes(extension);
        },
    },

    mounted() {
        this.getResidentResources();
    },
};
</script>

<style scoped>
.custom-img-size {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow */
}

.text-indent {
    text-indent: 2em; /* Adjust the indent size as needed */
}

.custom-title-size {
    font-size: 1.5rem; /* Adjust the font size as needed */
}
</style>
