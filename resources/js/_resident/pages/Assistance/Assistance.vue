<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">Assistants</h1>
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
                                            Add Assistant
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
                                    <template #cell(resident_name)="row">
                                        {{
                                            row.item.resident.first_name +
                                            " " +
                                            row.item.resident.last_name
                                        }}
                                    </template>

                                    <template #cell(date_request)="row">
                                        {{ row.item.date_request | date }}
                                    </template>

                                    <template #cell(description)="row">
                                        {{
                                            truncateDescription(
                                                row.item.description
                                            )
                                        }}
                                    </template>

                                    <template #cell(status)="row">
                                        <div v-if="row.item.status == '0'">
                                            <span class="badge badge-danger"
                                                >Pending</span
                                            >
                                        </div>
                                        <div v-else-if="row.item.status == '1'">
                                            <span class="badge badge-success"
                                                >Assisting</span
                                            >
                                        </div>
                                        <div v-else>
                                            <span class="badge badge-primary"
                                                >Completed</span
                                            >
                                        </div>
                                    </template>

                                    <template #cell(actions)="row">
                                        <b-button
                                            size="sm"
                                            variant="primary"
                                            :disabled="
                                                row.item.status === '1' ||
                                                row.item.status === '2'
                                            "
                                            @click="showUpdateModal(row.item)"
                                        >
                                            Update
                                        </b-button>

                                        <b-button
                                            size="sm"
                                            variant="danger"
                                            :disabled="
                                                row.item.status === '1' ||
                                                row.item.status === '2'
                                            "
                                            @click="
                                                deleteAssistant(row.item.id)
                                            "
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

        <AssistantForm
            :assistant="selectedAssistant"
            :action="formAction"
            modal-id="assistant-form-modal"
            @submit="handleFormSubmit"
            :errors="errors"
        />
    </div>
</template>

<script>
import {
    getAssistants,
    addAssistant,
    updateAssistant,
    deleteAssistant,
    getResidentAssistances,
} from "../../../services/api";
import AssistantForm from "./AssistanceForm.vue";

export default {
    name: "Assistants",
    components: {
        AssistantForm,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Dashboard", href: "/admin" },
                { text: "Assistants", active: true },
            ],
            items: [],
            fields: [
                { key: "id", label: "ID", sortable: true },
                {
                    key: "resident_name",
                    label: "Name",
                    sortable: true,
                },
                {
                    key: "assistant_type",
                    label: "Assistant Type",
                    sortable: true,
                },
                { key: "description", label: "Description", sortable: true },
                { key: "date_request", label: "Date Request", sortable: true },
                { key: "status", label: "Status", sortable: true },
                { key: "actions", label: "Actions" },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            selectedAssistant: {},
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
            const { data } = await getResidentAssistances();
            this.items = data.data;
            this.totalRows = data.total;
        },
        showAddModal() {
            this.selectedAssistant = {
                resident_id: "",
                assistant_type: "",
                description: "",
                date_request: "",
                lat: "",
                lng: "",
                file_type: "",
                file_path: "",
                status: 0,
                file: null,
            };
            this.formAction = "add";
            this.$bvModal.show("assistant-form-modal");
        },
        showUpdateModal(assistant) {
            this.selectedAssistant = { ...assistant };
            this.formAction = "update";
            this.$bvModal.show("assistant-form-modal");
        },
        async handleFormSubmit(formData) {
            this.$Progress.start();
            try {
                if (this.formAction === "add") {
                    console.log(formData);
                    const { data } = await addAssistant(formData);
                    this.items.unshift(data.data);
                } else if (this.formAction === "update") {
                    formData.append("_method", "put");
                    const { data } = await updateAssistant(
                        this.selectedAssistant.id,
                        formData
                    );
                    const index = this.items.findIndex(
                        (item) => item.id === this.selectedAssistant.id
                    );
                    if (index !== -1) {
                        this.items.splice(index, 1, data.data);
                    }
                }
                this.$bvModal.hide("assistant-form-modal");
                this.$refs.assistantForm.$emit("reset-form"); // Emit reset-form event
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
        async deleteAssistant(id) {
            try {
                await deleteAssistant(id);
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
            }
        },
        truncateDescription(description) {
            const maxLength = 100; // Set the maximum length for the description
            if (description.length > maxLength) {
                return description.substring(0, maxLength) + "...";
            }
            return description;
        },
    },
    created() {
        this.totalRows = this.items.length;
        this.getData();
    },
};
</script>
