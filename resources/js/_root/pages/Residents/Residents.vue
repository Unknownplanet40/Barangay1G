<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">Residents</h1>
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
                                            Add Residents
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
                                            Update
                                        </b-button>

                                        <b-button
                                            size="sm"
                                            variant="danger"
                                            @click="deleteResident(row.item.id)"
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

        <ResidentForm
            :resident="selectedResident"
            :action="formAction"
            modal-id="resident-form-modal"
            @submit="handleFormSubmit"
            :errors="errors"
        />
    </div>
</template>

<script>
import {
    getResidents,
    addResident,
    updateResident,
    deleteResident,
} from "../../../services/api";
import ResidentForm from "./ResidentForm.vue";

export default {
    name: "Residents",
    components: {
        ResidentForm,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Dashboard", href: "/admin" },
                { text: "Residents", active: true },
            ],
            items: [],
            fields: [
                { key: "id", label: "ID", sortable: true },
                { key: "name", label: "Name", sortable: true },
                { key: "phone_number", label: "Phone Number", sortable: true },
                { key: "gender", label: "Gender", sortable: true },
                { key: "address", label: "Address", sortable: true },
                { key: "is_active", label: "Is Active", sortable: true },
                { key: "actions", label: "Actions" },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            selectedResident: {
                first_name: "",
                last_name: "",
                date_of_birth: "",
                age: "",
                phone_number: "",
                gender: "",
                address: "",
                user: {
                    username: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                },
            },
            formAction: "",
            errors: {},
            filter: null,
            filterOn: [],
        };
    },
    methods: {
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        async getData() {
            const { data } = await getResidents();
            this.items = data.data.data;
            this.totalRows = data.total;
        },
        showAddModal() {
            console.log(this.selectedResident);

            this.selectedResident = {
                first_name: "",
                last_name: "",
                date_of_birth: "",
                age: "",
                phone_number: "",
                gender: "",
                address: "",
                user: {
                    username: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                },
            };
            this.formAction = "add";
            this.$bvModal.show("resident-form-modal");
        },
        showUpdateModal(resident) {
            this.selectedResident = { ...resident };
            this.formAction = "update";
            this.$bvModal.show("resident-form-modal");
        },
        async handleFormSubmit(resident) {
            this.$Progress.start();
            const submitData = {
                name: resident.first_name + " " + resident.last_name,
                username: resident.user.username,
                email: resident.user.email,
                password: resident.user.password,
                password_confirmation: resident.user.password_confirmation,
                first_name: resident.first_name,
                last_name: resident.last_name,
                date_of_birth: resident.date_of_birth,
                age: resident.age,
                address: resident.address,
                phone_number: +resident.phone_number,
                gender: resident.gender,
                is_active: resident.is_active,
            };
            try {
                if (this.formAction === "add") {
                    const { data } = await addResident(submitData);
                    this.items.unshift(data.data);
                } else if (this.formAction === "update") {
                    const { data } = await updateResident(
                        resident.id,
                        submitData
                    );
                    const index = this.items.findIndex(
                        (item) => item.id === resident.id
                    );
                    if (index !== -1) {
                        this.items.splice(index, 1, data.data);
                    }
                }
                this.$bvModal.hide("resident-form-modal");
                this.$refs.residentForm.$emit("reset-form"); // Emit reset-form event
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

        async deleteResident(id) {
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
                await deleteResident(id);
                this.items = this.items.filter((item) => item.id !== id);
                Toast.fire({
                    icon: "success",
                    title: "Resident deleted successfully",
                });
            } catch (e) {
                Toast.fire({
                    icon: "error",
                    title: "Failed to delete resident",
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
