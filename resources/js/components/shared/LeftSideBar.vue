<template>
    <div>
        <aside
            style="background-color: #01165a"
            class="main-sidebar sidebar-dark-primary elevation-4"
        >
            <a class="brand-link d-flex align-items-center">
                <img
                    src="/images/bararangaylogo.png"
                    alt="Barangay Malagasang Logo"
                    class="img-circle elevation-3"
                    style="
                        opacity: 0.8;
                        width: 50px;
                        height: 50px;
                        margin-left: 5px;
                    "
                />
                <h6 class="font-weight-bold ml-2 mb-0">
                    Barangay Malagasang
                    <br />
                    1-G
                </h6>
            </a>

            <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img
                            src="/images/userlogo.png"
                            class="img-circle elevation-2"
                            alt="User Image"
                        />
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">
                            {{ $store.state.user_profile.username }}</a
                        >
                    </div>
                </div>

                <nav class="mt-2">
                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                        v-if="$store.state.user_profile.role !== 'resident'"
                    >
                        <li
                            v-for="link in adminLeftSidebarLinks"
                            :key="link.route"
                            class="nav-item"
                        >
                            <router-link
                                v-if="
                                    link.auth.find(
                                        (auth) =>
                                            auth ===
                                            $store.state.user_profile.role
                                    )
                                "
                                class="nav-link dashboard-nav"
                                :to="link.route"
                                exact
                            >
                                <img
                                    class="nav-icon"
                                    :src="link.img"
                                    alt="icon"
                                />
                                <!-- <i class="nav-icon" :class="link.icon"></i> -->
                                {{ link.label }}
                            </router-link>
                        </li>
                    </ul>
                    <ul
                        class="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                        v-else
                    >
                        <li
                            v-for="link in residentLeftSidebarLinks"
                            :key="link.route"
                            class="nav-item"
                        >
                            <router-link
                                v-if="
                                    link.auth.find(
                                        (auth) =>
                                            auth ===
                                            $store.state.user_profile.role
                                    )
                                "
                                class="nav-link dashboard-nav"
                                :to="link.route"
                                exact
                            >
                                <img
                                    class="nav-icon"
                                    :src="link.img"
                                    alt="icon"
                                />
                                <!-- <i class="nav-icon" :class="link.icon"></i> -->
                                {{ link.label }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    </div>
</template>

<script>
import { adminLeftSidebarLinks } from "../../constants/index";
import { residentLeftSidebarLinks } from "../../constants/index";

export default {
    name: "LeftSideBar",
    data() {
        return {
            adminLeftSidebarLinks,
            residentLeftSidebarLinks,
        };
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
