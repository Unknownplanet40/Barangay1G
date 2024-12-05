<template>
    <div>
        <!-- Navbar -->
        <nav
            class="main-header navbar navbar-expand navbar-white navbar-light bs-primary"
            style="background-color: #01165a"
        >
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-widget="pushmenu"
                        href="#"
                        role="button"
                    >
                        <!-- <img
                            src="/images/icons/menu.png"
                            alt="menu"
                            size="24"
                        /> -->
                        <i class="fas fa-bars" style="color: white"></i
                    ></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <span
                        class="nav-link"
                        style="color: #ffffff !important; font-weight: bold"
                        >Disaster Management System</span
                    >
                </li>
                <li class="nav-item d-none d-sm-inline-block"></li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <!-- Navbar Search -->

                <li class="nav-item">
                    <a
                        class="nav-link"
                        data-widget="control-sidebar"
                        data-controlsidebar-slide="true"
                        href="#"
                        role="button"
                        v-on:click="logout"
                    >
                        <i
                            class="fa-solid fa-power-off"
                            style="color: #ffffff"
                        ></i>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->
    </div>
</template>

<script>
import * as authService from "../../services/auth_services";
export default {
    data() {
        return {};
    },
    methods: {
        logout: async function () {
            try {
                authService.checkerLogout();
                Toast.fire({
                    icon: "success",
                    title: "Successfully Logout",
                });
                this.$router.push("/login");
            } catch (e) {}
        },
    },
};
</script>
