<template>
    <div>
        <b-button variant="success" @click="showCategory">Categories</b-button>

        <!-- Modal -->
        <b-modal id="category-modal" title="Categories" hide-footer>
            <form @submit.prevent="submitForm">
                <b-form-group label="Category Name" label-for="category-name">
                    <b-form-input
                        id="category-name"
                        v-model="form.name"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group>
                    <b-row>
                        <b-col offset-md="10">
                            <b-button type="submit" variant="primary"
                                >Save</b-button
                            >
                        </b-col>
                    </b-row>
                </b-form-group>
            </form>
            <b-table :items="categories" :fields="fields" responsive="sm">
                <template #cell(actions)="row">
                    <b-button
                        size="sm"
                        variant="success"
                        @click="editCategory(row.item)"
                        >Edit</b-button
                    >

                    <b-button
                        size="sm"
                        variant="danger"
                        @click="deleteCategory(row.item.id)"
                    >
                        Delete
                    </b-button>
                </template>
            </b-table>
        </b-modal>
    </div>
</template>

<script>
import {
    getCategories,
    addCategories,
    updateCategories,
    deleteCategories,
    saveCategory,
} from "../../../services/api";
export default {
    data() {
        return {
            categories: [],
            fields: [
                { key: "name", label: "Name" },
                { key: "actions", label: "Actions" },
            ],
            form: {
                id: null,
                name: "",
            },
        };
    },
    methods: {
        showCategory() {
            this.getData();
            this.$bvModal.show("category-modal");
        },
        async getData() {
            this.$Progress.start();
            try {
                const { data } = await getCategories();
                console.log(data);
                this.categories = data;
            } catch (e) {
                console.log(e);
            } finally {
                setTimeout(() => {
                    this.$Progress.finish();
                }, 500);
            }
        },
        async submitForm() {
            await saveCategory(this.form).then(() => {
                this.getData();
                this.resetForm();
                this.$bvModal.hide("category-modal");
            });
        },
        resetForm() {
            this.form.id = null;
            this.form.name = "";
        },
        editCategory(category) {
            this.form.id = category.id;
            this.form.name = category.name;
        },
        async deleteCategory(id) {
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
                await deleteCategories(id);
            } catch (e) {
                console.log(e);
            } finally {
                setTimeout(() => {
                    this.getData();
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
