<template>
    <div>
        <b-modal
            size="lg"
            :id="modalId"
            @hide="resetForm"
            :title="action === 'add' ? 'Add Alert' : 'Update Alert'"
        >
            <b-form @submit="handleSubmit">
                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Title">
                            <b-form-input
                                v-model="form.title"
                                type="text"
                                :class="errors.title ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div class="invalid-feedback" v-if="errors.title">
                                {{ errors.title[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Category">
                            <b-form-input
                                v-model="form.category"
                                type="text"
                                :class="errors.category ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div
                                class="invalid-feedback"
                                v-if="errors.category"
                            >
                                {{ errors.category[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Status">
                            <b-form-select
                                v-model="form.status"
                                :options="[
                                    { value: 1, text: 'Active' },
                                    { value: 0, text: 'Inactive' },
                                ]"
                                :class="errors.status ? 'is-invalid' : ''"
                            ></b-form-select>
                            <div class="invalid-feedback" v-if="errors.status">
                                {{ errors.status[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b-form-group label="Description">
                            <b-form-textarea
                                v-model="form.description"
                                rows="6"
                                max-rows="6"
                                :class="errors.description ? 'is-invalid' : ''"
                            ></b-form-textarea>
                            <div
                                class="invalid-feedback"
                                v-if="errors.description"
                            >
                                {{ errors.description[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-button type="submit" variant="primary">
                    {{ action === "add" ? "Add" : "Update" }}
                </b-button>
            </b-form>

            <template #modal-footer>
                <b-button
                    type="button"
                    variant="secondary"
                    @click="$bvModal.hide(modalId)"
                >
                    Close
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        alert: {
            type: Object,
            default: () => ({
                title: "",
                description: "",
                category: "",
                status: 0,
            }),
        },
        action: {
            type: String,
            required: true,
        },
        modalId: {
            type: String,
            required: true,
        },
        errors: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            form: { ...this.alert },
        };
    },
    watch: {
        alert(newAlert) {
            this.form = { ...newAlert };
        },
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();
            this.$emit("submit", { ...this.form });
        },
        resetForm() {
            this.form = { ...this.alert };
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
