<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">Officials</h1>
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
                                            Add Official
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
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    :sort-direction="sortDirection"
                                    stacked="md"
                                    hover
                                    @filtered="onFiltered"
                                >
                                    <template #cell(name)="row">
                                        {{ row.item.first_name }}
                                        {{ row.item.last_name }}
                                    </template>

                                    <template #cell(phone_number)="row">
                                        0{{ row.item.phone_number }}
                                    </template>

                                    <template #cell(is_active)="row">
                                        <b-badge
                                            variant="success"
                                            v-if="row.item.user.is_active == 1"
                                        >
                                            Active
                                        </b-badge>
                                        <b-badge variant="danger" v-else>
                                            Inactive
                                        </b-badge>
                                    </template>

                                    <template #cell(actions)="row">
                                        <b-button
                                            size="sm"
                                            variant="primary"
                                            @click="showUpdateModal(row.item)"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-pencil-square"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                                />
                                            </svg>
                                        </b-button>
                                        <b-button
                                            size="sm"
                                            variant="danger"
                                            @click="deleteOfficial(row.item.id)"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-trash3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                                                />
                                            </svg>
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

        <OfficialForm
            :official="selectedOfficial"
            :action="formAction"
            modal-id="official-form-modal"
            @submit="handleFormSubmit"
            :errors="errors"
        />
    </div>
</template>

<script>
import {
    getOfficials,
    addOfficial,
    updateOfficial,
    deleteOfficial,
} from "../../../services/api";
import OfficialForm from "./OfficialForm.vue";

export default {
    name: "Officials",
    components: {
        OfficialForm,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Dashboard", href: "/admin" },
                { text: "Officials", active: true },
            ],
            items: [],
            fields: [
                { key: "id", label: "ID", sortable: true },
                { key: "name", label: "Name", sortable: true },
                { key: "phone_number", label: "Phone Number", sortable: true },
                { key: "gender", label: "Gender", sortable: true },
                { key: "position", label: "Position", sortable: true },
                { key: "is_active", label: "Status", sortable: true },
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
            selectedOfficial: {
                first_name: "",
                last_name: "",
                date_of_birth: "",
                age: "",
                phone_number: "",
                gender: "",
                address: "",
                position: "",
                user: {
                    is_active: false,
                },
            },
            formAction: "add",
            errors: {},
        };
    },
    mounted() {
        this.totalRows = this.items.length;
        this.getData();
    },
    methods: {
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        async getData() {
            this.$Progress.start();
            try {
                const { data } = await getOfficials();
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
            this.selectedOfficial = {
                last_name: "",
                date_of_birth: "",
                age: "",
                phone_number: "",
                gender: "",
                address: "",
                position: "",
                user: {
                    is_active: false,
                    username: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                },
            };
            this.formAction = "add";
            this.$bvModal.show("official-form-modal");
        },
        showUpdateModal(official) {
            this.selectedOfficial = { ...official };
            this.formAction = "update";
            this.$bvModal.show("official-form-modal");
        },
        async handleFormSubmit(official) {
            this.$Progress.start();
            const submitData = {
                name: official.first_name + " " + official.last_name,
                username: official.user.username,
                email: official.user.email,
                password: official.user.password,
                password_confirmation: official.user.password_confirmation,

                first_name: official.first_name,
                last_name: official.last_name,
                date_of_birth: official.date_of_birth,
                age: official.age,
                address: official.address,
                phone_number: +official.phone_number,
                gender: official.gender,
                position: official.position,
            };
            try {
                if (this.formAction === "add") {
                    // await addOfficial(official);

                    const { data } = await addOfficial(submitData);
                    console.log(data);
                    this.items.unshift(data.data);
                } else {
                    const { data } = await updateOfficial(
                        official.id,
                        submitData
                    );
                    const index = this.items.findIndex(
                        (item) => item.id === official.id
                    );
                }
                this.$bvModal.hide("official-form-modal");
                this.$refs.officialForm.$emit("reset-form");
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
        async deleteOfficial(id) {
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
                await deleteOfficial(id);
                // this.getData();

                this.items = this.items.filter((item) => item.id !== id);
                Toast.fire({
                    icon: "success",
                    title: "Assistant deleted successfully",
                });
            } catch (e) {
                Toast.fire({
                    icon: "error",
                    title: "Failed to delete assistant",
                });
            } finally {
                setTimeout(() => {
                    this.$Progress.finish();
                }, 500);
            }
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
