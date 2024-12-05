<template>
    <data class="wrapper">
        <TopBar />
        <LeftSideBar />
        <router-view> </router-view>
    </data>
</template>
<script>
import LeftSideBar from "../components/shared/LeftSideBar.vue";
import TopBar from "../components/shared/TopBar.vue";

export default {
    name: "rootLayout",
    components: {
        LeftSideBar,
        TopBar,
    },
    mixins: [],
    props: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {},
};
</script>
<style lang="" scoped></style>
