<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">Alerts</h1>
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
                                            Add Alert
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
                                    <template #cell(description)="row">
                                        {{
                                            truncateDescription(
                                                row.item.description
                                            )
                                        }}
                                    </template>

                                    <template #cell(status)="row">
                                        <b-badge
                                            :variant="
                                                row.item.status
                                                    ? 'success'
                                                    : 'danger'
                                            "
                                            >{{
                                                row.item.status
                                                    ? "Active"
                                                    : "Inactive"
                                            }}</b-badge
                                        >
                                    </template>

                                    <template #cell(actions)="row">
                                        <button
                                            class="btn btn-sm btn-success"
                                            @click="sendSmsHandler(row.item)"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-envelope-check-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"
                                                />
                                                <path
                                                    d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"
                                                />
                                            </svg>
                                        </button>

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
                                            @click="deleteAlert(row.item.id)"
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

        <AlertForm
            :alert="selectedAlert"
            :action="formAction"
            modal-id="alert-form-modal"
            @submit="handleFormSubmit"
            :errors="errors"
        />
    </div>
</template>

<script>
import {
    getAlerts,
    addAlert,
    updateAlert,
    deleteAlert,
    sendAlert,
} from "../../../services/api";
import AlertForm from "./AlertForm.vue";

export default {
    name: "Alerts",
    components: {
        AlertForm,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Dashboard", href: "/admin" },
                { text: "Alerts", active: true },
            ],
            items: [],
            fields: [
                { key: "id", label: "ID", sortable: true },
                { key: "title", label: "Title", sortable: true },
                { key: "description", label: "Description", sortable: true },
                { key: "category", label: "Category", sortable: true },
                { key: "status", label: "Status", sortable: true },
                { key: "actions", label: "Actions" },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            selectedAlert: {},
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
            const { data } = await getAlerts();
            this.items = data.data;
            this.totalRows = data.total;
        },
        showAddModal() {
            this.selectedAlert = {
                title: "",
                description: "",
                category: "",
                status: 0,
            };
            this.formAction = "add";
            this.$bvModal.show("alert-form-modal");
        },
        showUpdateModal(alert) {
            this.selectedAlert = { ...alert };
            this.formAction = "update";
            this.$bvModal.show("alert-form-modal");
        },
        async handleFormSubmit(alert) {
            this.$Progress.start();
            try {
                if (this.formAction === "add") {
                    const { data } = await addAlert(alert);
                    this.items.unshift(data.data);
                } else if (this.formAction === "update") {
                    const { data } = await updateAlert(
                        this.selectedAlert.id,
                        alert
                    );
                    const index = this.items.findIndex(
                        (item) => item.id === this.selectedAlert.id
                    );
                    if (index !== -1) {
                        this.items.splice(index, 1, data.data);
                    }
                }
                this.$bvModal.hide("alert-form-modal");
                this.$refs.alertForm.$emit("reset-form"); // Emit reset-form event
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

        async sendSmsHandler(alert) {
            const confirmed = await Swal.fire({
                title: "Are you sure?",
                text: "You want to send SMS to all residents?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, respond!",
            }).then((result) => {
                return result.isConfirmed;
            });

            if (!confirmed) return;

            this.$Progress.start();

            try {
                let formData = new FormData();
                const message = `Alert: ${alert.title}\nDescription: ${alert.description}\nCategory: ${alert.category}`;
                formData.append("message", message);

                const response = await sendAlert(formData);
            } catch (e) {
                Toast.fire({
                    icon: "error",
                    title: e.response.data.message,
                });
            } finally {
                setTimeout(() => {
                    this.$Progress.finish();
                }, 500);
            }
        },

        truncateDescription(description) {
            const maxLength = 100; // Set the maximum length for the description
            if (description.length > maxLength) {
                return description.substring(0, maxLength) + "...";
            }
            return description;
        },

        async deleteAlert(id) {
            const confirmed = await Swal.fire({
                title: "Are you sure?",
                text: "You want to delete this alert?",
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
                await deleteAlert(id);
                this.items = this.items.filter((item) => item.id !== id);
            } catch (e) {
                Toast.fire({
                    icon: "error",
                    title: e.response.data.message,
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
