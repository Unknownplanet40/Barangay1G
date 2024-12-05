<template>
    <div>
        <b-modal
            size="lg"
            :id="modalId"
            @hide="resetForm"
            :title="action === 'add' ? 'Add Official' : 'Update Official'"
        >
            <b-form @submit="handleSubmit">
                <h5 class="mb-2">Account info</h5>
                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Username">
                            <b-form-input
                                v-model="form.user.username"
                                type="text"
                                :class="errors.username ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div
                                class="invalid-feedback"
                                v-if="errors.username"
                            >
                                {{ errors.username[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Email">
                            <b-form-input
                                v-model="form.user.email"
                                type="email"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Password">
                            <b-form-input
                                v-model="form.user.password"
                                type="password"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Confirm Password">
                            <b-form-input
                                v-model="form.user.password_confirmation"
                                type="password"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <hr />
                    </b-col>
                </b-row>

                <h5 class="my-2">Official info</h5>
                <b-row>
                    <b-col cols="6">
                        <b-form-group label="First Name">
                            <b-form-input
                                v-model="form.first_name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Last Name">
                            <b-form-input
                                v-model="form.last_name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Date of Birth">
                            <b-form-input
                                type="date"
                                v-model="form.date_of_birth"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Age">
                            <b-form-input
                                type="number"
                                v-model="form.age"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Phone Number">
                            <b-form-input
                                type="tel"
                                v-model="form.phone_number"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col cols="6">
                        <b-form-group label="Gender">
                            <b-form-select
                                v-model="form.gender"
                                :options="['Male', 'Female']"
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Address">
                            <b-form-textarea
                                v-model="form.address"
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Position">
                            <b-form-input
                                v-model="form.position"
                            ></b-form-input>
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
        official: {
            type: Object,
            default: () => ({
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
                    username: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                },
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
            form: { ...this.official },
        };
    },
    watch: {
        official(newOfficial) {
            this.form = { ...newOfficial };
        },
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();
            this.$emit("submit", { ...this.form });
            // this.$bvModal.hide(this.modalId);
        },
        resetForm() {
            this.form = { ...this.official };
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
