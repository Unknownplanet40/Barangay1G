<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">Services</h1>
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

        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <b-row>
                                    <b-col lg="6" class="my-1">
                                        <b-button
                                            @click="showAddModal"
                                            variant="primary"
                                        >
                                            Add Service
                                        </b-button>
                                    </b-col>
                                    <b-col lg="6" class="my-1">
                                        <b-form-group
                                            label="Filter"
                                            label-for="filter-input"
                                            label-cols-sm="3"
                                            label-align-sm="right"
                                            label-size="sm"
                                            class="mb-0"
                                        >
                                            <b-input-group size="sm">
                                                <b-form-input
                                                    id="filter-input"
                                                    v-model="filter"
                                                    type="search"
                                                    placeholder="Type to Search"
                                                ></b-form-input>

                                                <b-input-group-append>
                                                    <b-button
                                                        :disabled="!filter"
                                                        @click="filter = ''"
                                                        >Clear</b-button
                                                    >
                                                </b-input-group-append>
                                            </b-input-group>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="card-body table-responsive">
                                <b-table
                                    :items="items"
                                    :fields="fields"
                                    :current-page="currentPage"
                                    :per-page="perPage"
                                    :filter="filter"
                                    :filter-included-fields="filterOn"
                                    stacked="md"
                                    hover
                                    @filtered="onFiltered"
                                >
                                    <template #cell(title)="row">
                                        {{
                                            truncateDescription(row.item.title)
                                        }}
                                    </template>
                                    <template #cell(description)="row">
                                        {{
                                            truncateDescription(
                                                row.item.description
                                            )
                                        }}
                                    </template>

                                    <template #cell(date_start)="row">
                                        {{ row.item.date_start | date }}
                                    </template>

                                    <template #cell(date_end)="row">
                                        {{ row.item.date_end | date }}
                                    </template>

                                    <template #cell(status)="row">
                                        <b-badge
                                            variant="success"
                                            v-if="row.item.status == 1"
                                        >
                                            On Going
                                        </b-badge>
                                        <b-badge variant="danger" v-else>
                                            Ended
                                        </b-badge>
                                    </template>

                                    <template #cell(actions)="row">
                                        <b-button
                                            size="sm"
                                            variant="primary"
                                            @click="showUpdateModal(row.item)"
                                        >
                                            Update
                                        </b-button>

                                        <b-button
                                            size="sm"
                                            variant="danger"
                                            @click="deleteService(row.item.id)"
                                        >
                                            Delete
                                        </b-button>
                                    </template>

                                    <template #row-details="row">
                                        <b-card>
                                            <ul>
                                                <li
                                                    v-for="(
                                                        value, key
                                                    ) in row.item"
                                                    :key="key"
                                                >
                                                    {{ key }}: {{ value }}
                                                </li>
                                            </ul>
                                        </b-card>
                                    </template>
                                </b-table>
                            </div>

                            <div class="card-footer">
                                <b-row class="justify-content-md-center">
                                    <b-col sm="7" md="6" class="my-1">
                                        <b-pagination
                                            v-model="currentPage"
                                            :total-rows="totalRows"
                                            :per-page="perPage"
                                            align="fill"
                                            size="sm"
                                            class="my-0"
                                        ></b-pagination>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ServiceForm
            :service="selectedService"
            :action="formAction"
            modal-id="service-form-modal"
            @submit="handleFormSubmit"
            :errors="errors"
        />
    </div>
</template>

<script>
import {
    getServices,
    addService,
    updateService,
    deleteService,
} from "../../../services/api";
import ServiceForm from "./ServiceForm.vue";

export default {
    name: "Services",
    components: {
        ServiceForm,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Dashboard", href: "/admin" },
                { text: "Services", active: true },
            ],
            items: [],
            fields: [
                { key: "id", label: "ID", sortable: true },
                { key: "title", label: "Title", sortable: true },
                { key: "description", label: "Description", sortable: true },
                { key: "eligibility", label: "Eligibility", sortable: true },
                { key: "category", label: "Category", sortable: true },
                { key: "date_start", label: "Date Start", sortable: true },
                { key: "date_end", label: "Date End", sortable: true },
                { key: "status", label: "Status", sortable: true },
                { key: "actions", label: "Actions" },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            selectedService: {},
            formAction: "",
            errors: {},
            filter: null,
            filterOn: [],
        };
    },
    methods: {
        truncateDescription(description) {
            const maxLength = 100; // Set the maximum length for the description
            if (description.length > maxLength) {
                return description.substring(0, maxLength) + "...";
            }
            return description;
        },
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        async getData() {
            const { data } = await getServices();
            this.items = data.data;
            this.totalRows = data.total;
        },
        showAddModal() {
            this.selectedService = {
                title: "",
                description: "",
                eligibility: "",
                category: "",
                date_start: "",
                date_end: "",
                status: 0,
                file: null,
            };
            this.formAction = "add";
            this.$bvModal.show("service-form-modal");
        },
        showUpdateModal(service) {
            this.selectedService = { ...service };
            this.formAction = "update";
            this.$bvModal.show("service-form-modal");
        },
        async handleFormSubmit(formData) {
            this.$Progress.start();
            try {
                if (this.formAction === "add") {
                    const { data } = await addService(formData);
                    this.items.unshift(data.data);
                } else if (this.formAction === "update") {
                    console.log(formData);
                    formData.append("_method", "put");
                    const { data } = await updateService(
                        this.selectedService.id,
                        formData
                    );
                    const index = this.items.findIndex(
                        (item) => item.id === this.selectedService.id
                    );
                    if (index !== -1) {
                        this.items.splice(index, 1, data.data);
                    }
                }
                this.$bvModal.hide("service-form-modal");
                this.$refs.serviceForm.$emit("reset-form"); // Emit reset-form event
            } catch (e) {
                switch (e.response.status) {
                    case 422:
                        this.errors = e.response.data.errors;
                        Toast.fire({
                            icon: "error",
                            title: e.response.data.message,
                        });
                        break;
                    default:
                        this.errors = e.response.data.errors;
                        Toast.fire({
                            icon: "error",
                            title: "Server error, Please try again!",
                        });
                        break;
                }
            } finally {
                setTimeout(() => {
                    this.getData();
                    this.$Progress.finish();
                }, 500);
            }
        },

        async deleteService(id) {
            const confirmed = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                return result.isConfirmed;
            });
            if (!confirmed) return;
            this.$Progress.start();
            try {
                await deleteService(id);
                this.items = this.items.filter((item) => item.id !== id);
                Toast.fire({
                    icon: "success",
                    title: "Service deleted successfully",
                });
            } catch (e) {
                Toast.fire({
                    icon: "error",
                    title: "Failed to delete service",
                });
            } finally {
                setTimeout(() => {
                    this.$Progress.finish();
                }, 500);
            }
        },
    },
    created() {
        this.totalRows = this.items.length;
        this.getData();
    },
};
</script>
