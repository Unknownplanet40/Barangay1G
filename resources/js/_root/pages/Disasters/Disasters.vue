<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">Disasters</h1>
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
                                    <b-col
                                        lg="6"
                                        class="my-1"
                                        style="
                                            display: flex;
                                            align-items: center;
                                        "
                                    >
                                        <b-button
                                            @click="showAddModal"
                                            variant="primary"
                                            class="mr-2"
                                        >
                                            Add Disaster
                                        </b-button>

                                        <Categories />
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
                                    hover
                                    :items="items"
                                    :fields="fields"
                                    :filter="filter"
                                    :current-page="currentPage"
                                    :per-page="perPage"
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    :sort-direction="sortDirection"
                                    :filter-included-fields="filterOn"
                                    @filtered="onFiltered"
                                >
                                    <template #cell(date)="data">
                                        {{
                                            new Date(
                                                data.item.date
                                            ).toDateString()
                                        }}
                                    </template>

                                    <template #cell(type)="data">
                                        {{ data.item.category.name }}
                                    </template>

                                    <template #cell(status)="row">
                                        <div
                                            v-if="
                                                row.item.status == 'UnResolve'
                                            "
                                        >
                                            <span class="badge badge-warning"
                                                >Unresolve</span
                                            >
                                        </div>

                                        <div v-else>
                                            <span class="badge badge-success"
                                                >Resolve</span
                                            >
                                        </div>
                                    </template>

                                    <template #cell(actions)="data">
                                        <b-button
                                            @click="showUpdateModal(data.item)"
                                            variant="primary"
                                            size="sm"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-arrow-repeat"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                                                />
                                            </svg>
                                            Edit
                                        </b-button>

                                        <b-button
                                            @click="
                                                deleteDisaster(data.item.id)
                                            "
                                            variant="danger"
                                            size="sm"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-trash"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                                                />
                                                <path
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                                                />
                                            </svg>
                                            Delete
                                        </b-button>
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
        <DisasterForm
            :disaster="selectedDisaster"
            :action="formAction"
            modal-id="disaster-form-modal"
            @submit="handleFormSubmit"
            :errors="errors"
            :categories="categories"
        />
    </div>
</template>

<script>
import {
    getDisasters,
    addDisaster,
    updateDisaster,
    deleteDisaster,
    getCategories,
} from "../../../services/api";
import DisasterForm from "./DisasterForm.vue";
import Categories from "./Categories.vue";

export default {
    name: "Disasters",
    components: {
        DisasterForm,
        Categories,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Dashboard", href: "/admin" },
                { text: "Disasters", active: true },
            ],
            items: [],
            fields: [
                { key: "id", label: "ID", sortable: true },
                { key: "name", label: "Name", sortable: true },
                { key: "description", label: "Description", sortable: true },
                { key: "location", label: "Location", sortable: true },
                { key: "date", label: "Date", sortable: true },
                { key: "type", label: "Type", sortable: true },
                { key: "status", label: "Status", sortable: true },
                { key: "actions", label: "Actions" },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
            sortBy: "",
            sortDesc: false,
            sortDirection: "asc",
            filter: null,
            filterOn: [],
            selectedDisaster: {
                name: "",
                description: "",
                location: "",
                date: "",
                type: "",
                status: "",
            },
            formAction: "add",
            errors: {},
            categories: [],
        };
    },
    mounted() {
        this.totalRows = this.items.length;
        this.getData();
        this.getCategories();
    },
    methods: {
        async getCategories() {
            try {
                const { data } = await getCategories();
                this.categories = data;
            } catch (error) {
                console.log(error);
            }
        },

        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        async getData() {
            this.$Progress.start();
            try {
                const { data } = await getDisasters();
                this.items = data.data.data;
                this.totalRows = this.items.length;
                this.$Progress.finish();
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                    this.$Progress.finish();
                }, 500);
            }
        },
        showAddModal() {
            this.selectedDisaster = {
                name: "",
                description: "",
                location: "",
                date: "",
                type: "",
                status: "",
            };
            this.formAction = "add";
            this.errors = {}; // Clear previous errors
            this.$bvModal.show("disaster-form-modal");
        },
        showUpdateModal(disaster) {
            console.log(disaster);
            disaster.type = disaster.category.id;
            this.selectedDisaster = { ...disaster };
            this.formAction = "update";
            this.errors = {}; // Clear previous errors
            this.$bvModal.show("disaster-form-modal");
        },

        showCategory() {},

        async deleteDisaster(id) {
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
                await deleteDisaster(id);
                this.items = this.items.filter((item) => item.id !== id);
                Toast.fire({
                    icon: "success",
                    title: "Disaster deleted successfully",
                });
            } catch (e) {
                Toast.fire({
                    icon: "error",
                    title: "Failed to delete disaster",
                });
            } finally {
                setTimeout(() => {
                    this.$Progress.finish();
                }, 500);
            }
        },

        async handleFormSubmit(disaster) {
            this.$Progress.start();
            const submitData = {
                name: disaster.name,
                description: disaster.description,
                location: disaster.location,
                date: disaster.date,
                type: disaster.type,
                status: disaster.status,
            };
            try {
                if (this.formAction === "add") {
                    const { data } = await addDisaster(submitData);
                    this.items.unshift(data.data);
                } else if (this.formAction === "update") {
                    const { data } = await updateDisaster(
                        disaster.id,
                        submitData
                    );
                    const index = this.items.findIndex(
                        (item) => item.id === disaster.id
                    );
                    if (index !== -1) {
                        this.items.splice(index, 1, data.data);
                    }
                }
                this.$bvModal.hide("disaster-form-modal");
                this.$refs.disasterForm.$emit("reset-form"); // Emit reset-form event
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
    },
};
</script>
