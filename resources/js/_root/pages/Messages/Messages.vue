<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="grey-bg container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="">Messages</h1>
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
                                    <b-col lg="6" class="my-1"> </b-col>
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
                                    <template #cell(creator)="row">
                                        {{ row.item.creator.name }}
                                    </template>
                                    <template #cell(actions)="row">
                                        <b-button
                                            size="sm"
                                            variant="primary"
                                            @click="reply(row.item)"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-reply-all"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M8.098 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.7 8.7 0 0 0-1.921-.306 7 7 0 0 0-.798.008h-.013l-.005.001h-.001L8.8 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L4.114 8.254l-.042-.028a.147.147 0 0 1 0-.252l.042-.028zM9.3 10.386q.102 0 .223.006c.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96z"
                                                />
                                                <path
                                                    d="M5.232 4.293a.5.5 0 0 0-.7-.106L.54 7.127a1.147 1.147 0 0 0 0 1.946l3.994 2.94a.5.5 0 1 0 .593-.805L1.114 8.254l-.042-.028a.147.147 0 0 1 0-.252l.042-.028 4.012-2.954a.5.5 0 0 0 .106-.699"
                                                />
                                            </svg>
                                        </b-button>

                                        <b-button
                                            size="sm"
                                            variant="danger"
                                            @click="deleteConvo(row.item.id)"
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Convo
            :messages="selectedConvo"
            :action="formAction"
            modal-id="convo-modal"
            @reply="handleReply"
            :errors="errors"
        />
    </div>
</template>

<script>
import { getMessages, replyMessage } from "../../../services/api";
import Convo from "./Convo.vue";

export default {
    components: {
        Convo,
    },
    data() {
        return {
            breadcrumb: [
                { text: "Dashboard", href: "/admin" },
                { text: "Messages", active: true },
            ],
            items: [],
            fields: [
                { key: "id", label: "ID", sortable: true },
                { key: "title", label: "Title", sortable: true },
                { key: "creator", label: "Sender", sortable: true },
                { key: "actions", label: "Actions" },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            selectedConvo: {},
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
            const { data } = await getMessages();
            this.items = data.data;
            this.totalRows = data.total;
        },
        async reply(data) {
            this.selectedConvo = { ...data.messages };
            this.formAction = "convo";
            this.$bvModal.show("convo-modal");
        },
        async handleReply(content) {
            const replyData = {
                content,
                status: "unseen",
            };
            const conversationId = this.selectedConvo[0].conversation_id;
            await replyMessage(replyData, conversationId);
            this.getData();
            this.$bvModal.hide("convo-modal");
        },
        async handleFormSubmit() {},
        async deleteConvo(id) {
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
                await deleteConversation(id);
                this.items = this.items.filter((item) => item.id !== id);
                Toast.fire({
                    icon: "success",
                    title: "Message deleted successfully",
                });
            } catch (e) {
                Toast.fire({
                    icon: "error",
                    title: "Failed to delete message",
                });
            } finally {
                setTimeout(() => {
                    this.$Progress.finish();
                }, 500);
            }
        },
    },
    mounted() {
        this.getData();
    },
};
</script>
