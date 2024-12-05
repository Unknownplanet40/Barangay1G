<template>
    <div>
        <b-modal
            size="lg"
            :id="modalId"
            @hide="resetForm"
            :title="action === 'add' ? 'Add Service' : 'Update Service'"
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
                        <b-form-group label="Eligibility">
                            <b-form-input
                                v-model="form.eligibility"
                                type="text"
                                :class="errors.eligibility ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div
                                class="invalid-feedback"
                                v-if="errors.eligibility"
                            >
                                {{ errors.eligibility[0] }}
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
                                    { value: 1, text: 'On Going' },
                                    { value: 0, text: 'Ended' },
                                ]"
                                :class="errors.status ? 'is-invalid' : ''"
                            ></b-form-select>
                            <div class="invalid-feedback" v-if="errors.status">
                                {{ errors.status[0] }}
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
                        <b-form-group label="Date Start">
                            <b-form-input
                                v-model="form.date_start"
                                type="date"
                                :class="errors.date_start ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div
                                class="invalid-feedback"
                                v-if="errors.date_start"
                            >
                                {{ errors.date_start[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Date End">
                            <b-form-input
                                v-model="form.date_end"
                                type="date"
                                :class="errors.date_end ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div
                                class="invalid-feedback"
                                v-if="errors.date_end"
                            >
                                {{ errors.date_end[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
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
                    <b-col cols="6">
                        <b-form-group label="File">
                            <b-form-file
                                v-model="form.file"
                                placeholder="Choose a file..."
                                drop-placeholder="Drop file here..."
                                @change="previewImage"
                            ></b-form-file>
                            <div class="invalid-feedback" v-if="errors.file">
                                {{ errors.file[0] }}
                            </div>

                            <div v-if="imagePreview">
                                <img
                                    :src="imagePreview"
                                    alt="Image Preview"
                                    class="img-thumbnail mt-2"
                                />
                            </div>
                            <div v-else>
                                <img
                                    :src="`/storage/${form.file_path}`"
                                    alt="Current Image"
                                    class="img-thumbnail mt-2"
                                />
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
        service: {
            type: Object,
            default: () => ({
                title: "",
                description: "",
                eligibility: "",
                category: "",
                date_start: "",
                date_end: "",
                status: 0,
                file: null,
                file_path: "",
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
            form: { ...this.service },
            imagePreview: null,
        };
    },
    watch: {
        service(newService) {
            this.form = { ...newService };
            this.imagePreview = null; // Reset image preview when service changes
        },
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();

            const formData = new FormData();
            for (const key in this.form) {
                formData.append(key, this.form[key]);
            }
            this.$emit("submit", formData);
        },
        resetForm() {
            this.form = { ...this.service };
            this.imagePreview = null; // Reset image preview when form is reset
        },
        previewImage(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imagePreview = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.imagePreview = null;
            }
        },
    },
};
</script>

<style scoped>
.img-thumbnail {
    max-width: 100%;
    height: auto;
}
</style>
