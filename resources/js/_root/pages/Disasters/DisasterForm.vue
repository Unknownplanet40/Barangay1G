<template>
    <div>
        <b-modal
            size="lg"
            :id="modalId"
            @hide="resetForm"
            :title="action === 'add' ? 'Add Disaster' : 'Update Disaster'"
        >
            <b-form @submit="handleSubmit">
                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Name">
                            <b-form-input
                                v-model="form.name"
                                type="text"
                                :class="errors.name ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div class="invalid-feedback" v-if="errors.name">
                                {{ errors.name[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Description">
                            <b-form-input
                                v-model="form.description"
                                type="text"
                                :class="errors.description ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div
                                class="invalid-feedback"
                                v-if="errors.description"
                            >
                                {{ errors.description[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Location">
                            <b-form-input
                                v-model="form.location"
                                type="text"
                                :class="errors.location ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div
                                class="invalid-feedback"
                                v-if="errors.location"
                            >
                                {{ errors.location[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Date">
                            <b-form-input
                                v-model="form.date"
                                type="date"
                                :class="errors.date ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div class="invalid-feedback" v-if="errors.date">
                                {{ errors.date[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Type">
                            <b-form-select
                                v-model="form.type"
                                :options="
                                    categories.map((category) => ({
                                        value: category.id,
                                        text: category.name,
                                    }))
                                "
                                :class="errors.type ? 'is-invalid' : ''"
                            ></b-form-select>

                            <div class="invalid-feedback" v-if="errors.type">
                                {{ errors.type[0] }}
                            </div>
                            <div class="invalid-feedback" v-if="errors.date">
                                {{ errors.type[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Status">
                            <b-form-select
                                v-model="form.status"
                                :options="[
                                    { value: 'Resolve', text: 'Resolve' },
                                    { value: 'UnResolve', text: 'Unresolve' },
                                ]"
                                :class="errors.status ? 'is-invalid' : ''"
                            ></b-form-select>
                            <div class="invalid-feedback" v-if="errors.status">
                                {{ errors.status[0] }}
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
        disaster: {
            type: Object,
            default: () => ({
                name: "",
                description: "",
                location: "",
                date: "",
                type: "",
                status: "",
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
        categories: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            form: { ...this.disaster },
        };
    },
    watch: {
        disaster(newDisaster) {
            this.form = { ...newDisaster };
        },
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();
            this.$emit("submit", { ...this.form });
        },
        resetForm() {
            this.form = { ...this.disaster };
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
