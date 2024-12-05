<template>
    <div>
        <b-modal
            size="lg"
            :id="modalId"
            @hide="resetForm"
            @shown="initMap"
            :title="action === 'add' ? 'Add Assistant' : 'Update Assistant'"
        >
            <b-form @submit="handleSubmit">
                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Date Request">
                            <b-form-input
                                v-model="form.date_request"
                                type="date"
                                :class="errors.date_request ? 'is-invalid' : ''"
                            ></b-form-input>
                            <div
                                class="invalid-feedback"
                                v-if="errors.date_request"
                            >
                                {{ errors.date_request[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Assistant Type">
                            <b-form-select
                                v-model="form.assistant_type"
                                :options="assistantTypeOptions"
                                :class="
                                    errors.assistant_type ? 'is-invalid' : ''
                                "
                            ></b-form-select>
                            <div
                                class="invalid-feedback"
                                v-if="errors.assistant_type"
                            >
                                {{ errors.assistant_type[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Description">
                            <b-form-textarea
                                v-model="form.description"
                                rows="8"
                                max-rows="8"
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
                        <b-form-group label="Map">
                            <div id="map" style="height: 200px"></div>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6">
                        <b-form-group label="File">
                            <b-form-file
                                v-model="form.file"
                                :state="Boolean(form.file)"
                                placeholder="Choose a file..."
                                drop-placeholder="Drop file here..."
                                @change="previewImage"
                                :class="errors.file ? 'is-invalid' : ''"
                            ></b-form-file>
                            <div class="invalid-feedback" v-if="errors.file">
                                {{ errors.file[0] }}
                            </div>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6"> </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b-form-group label="Image Preview">
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

                <br />

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
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Set default icon paths
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
    props: {
        assistant: {
            type: Object,
            default: () => ({
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
            form: { ...this.assistant },

            imagePreview: null,
            map: null,
            marker: null,
            lat: "",
            lng: "",
            assistantTypeOptions: [
                { value: null, text: "Please select an option" },
                { value: "Property damage", text: "Property damage" },
                { value: "Fire incident", text: "Fire incident" },
                { value: "Minor injuries", text: "Minor injuries" },
                { value: "Fatalities", text: "Fatalities" },
                { value: "Hazards", text: "Hazards" },
                { value: "Medical Incident", text: "Medical Incident" },
                { value: "Rescue", text: "Rescue" },
                { value: "Flood", text: "Flood" },
            ],
        };
    },
    watch: {
        assistant(newAssistant) {
            this.form = { ...newAssistant };
            this.imagePreview = null; // Reset image preview when assistant changes
            if (this.map) {
                this.updateMap();
            }
        },
    },
    methods: {
        data() {
            const today = new Date().toISOString().split("T")[0];
            return {
                form: {
                    date_request: today,
                },
                errors: {
                    date_request: null,
                },
            };
        },
        handleSubmit(event) {
            event.preventDefault();
            this.form.lat = this.form.lat || this.lat;
            this.form.lng = this.form.lng || this.lng;
            this.form.status = 0; // Set status to pending
            const formData = new FormData();
            for (const key in this.form) {
                formData.append(key, this.form[key]);
            }
            this.$emit("submit", formData);
            // this.$emit("submit", { ...this.form });
        },
        resetForm() {
            this.form = { ...this.assistant };
            this.imagePreview = null; // Reset image preview when form is reset
            if (this.map) {
                this.updateMap();
            }
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
        initMap() {
            this.map = L.map("map").setView([this.lat, this.lng], 13); // Default to Manila coordinates
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.map);

            this.map.on("click", this.onMapClick);

            this.updateMap();
        },
        updateMap() {
            if (this.action === "add") {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                });
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            this.form.lat = position.coords.latitude;
                            this.form.lng = position.coords.longitude;
                            this.updateMap();
                        },
                        (error) => {
                            console.error("Error getting location: ", error);
                        }
                    );
                } else {
                    console.error(
                        "Geolocation is not supported by this browser."
                    );
                }
            }

            if (this.marker) {
                this.map.removeLayer(this.marker);
            }
            if (this.form.lat && this.form.lng) {
                this.marker = L.marker([this.form.lat, this.form.lng]).addTo(
                    this.map
                );
                this.map.setView([this.form.lat, this.form.lng], 13);
            }
        },
        onMapClick(e) {
            this.form.lat = e.latlng.lat;
            this.form.lng = e.latlng.lng;
            this.updateMap();
        },
        getCurrentLocation() {
            if (this.action) {
                console.log("there is an action");
            }
            // navigator.geolocation.getCurrentPosition((position) => {
            //     this.lat = position.coords.latitude;
            //     this.lng = position.coords.longitude;
            // });
            // if (navigator.geolocation) {
            //     navigator.geolocation.getCurrentPosition(
            //         (position) => {
            //             this.form.lat = position.coords.latitude;
            //             this.form.lng = position.coords.longitude;
            //             this.updateMap();
            //         },
            //         (error) => {
            //             console.error("Error getting location: ", error);
            //         }
            //     );
            // } else {
            //     console.error("Geolocation is not supported by this browser.");
            // }
        },
    },
    mounted() {
        this.getCurrentLocation();
    },
};
</script>

<style scoped>
.img-thumbnail {
    max-width: 100%;
    height: auto;
}
</style>
