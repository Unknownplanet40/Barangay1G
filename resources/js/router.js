import path from "path";
import Vue from "vue";
import Router from "vue-router";
import * as auth from "./services/auth_services";
Vue.use(Router);

const routes = [
    {
        path: "/",
        component: () => import("./_resident/ResidentLayout.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () =>
                    import("./_resident/pages/Dashboard/Dashboard.vue"),
            },
            {
                path: "disasters",
                name: "disasters",
                component: () =>
                    import("./_resident/pages/Disasters/Disasters.vue"),
            },

            {
                path: "resources",
                name: "resources",
                component: () =>
                    import("./_resident/pages/Resources/Resources.vue"),
            },

            {
                path: "services",
                name: "services",
                component: () =>
                    import("./_resident/pages/Services/Services.vue"),
            },

            {
                path: "assistance",
                name: "assistance",
                component: () =>
                    import("./_resident/pages/Assistance/Assistance.vue"),
            },
            {
                path: "messages",
                name: "messages",
                component: () =>
                    import("./_resident/pages/Messages/Messages.vue"),
            },
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                console.log("not logged in");
                next("login");
            } else {
                if (auth.getUserRole() == "resident") {
                    next();
                } else if (auth.getUserRole() == "official") {
                    next();
                } else {
                    next("/admin");
                }
            }
        },
    },

    {
        path: "/admin",
        component: () => import("./_root/RootLayout.vue"),
        children: [
            {
                path: "",
                name: "admin",
                component: () =>
                    import("./_root/pages/Dashboard/Dashboard.vue"),
            },
            {
                path: "officials",
                name: "officials",
                component: () =>
                    import("./_root/pages/Officials/Officials.vue"),
            },

            {
                path: "residents",
                name: "residents",
                component: () =>
                    import("./_root/pages/Residents/Residents.vue"),
            },
            {
                path: "disasters",
                name: "disasters",
                component: () =>
                    import("./_root/pages/Disasters/Disasters.vue"),
            },
            {
                path: "assistance",
                name: "assistance",
                component: () =>
                    import("./_root/pages/Assistance/Assistance.vue"),
            },
            {
                path: "messages",
                name: "messages",
                component: () => import("./_root/pages/Messages/Messages.vue"),
            },
            {
                path: "services",
                name: "services",
                component: () => import("./_root/pages/Services/Services.vue"),
            },
            {
                path: "resources",
                name: "resources",
                component: () =>
                    import("./_root/pages/Resources/Resources.vue"),
            },
            {
                path: "alerts",
                name: "alerts",
                component: () => import("./_root/pages/Alerts/Alerts.vue"),
            },
            {
                path: "reports",
                name: "reports",
                component: () => import("./_root/pages/Reports/Reports.vue"),
            },
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                console.log("not logged in");
                next("login");
            } else {
                if (auth.getUserRole() == "admin") {
                    next();
                } else if (auth.getUserRole() == "official") {
                    next();
                } else {
                    next("/resident");
                }
            }
        },
    },

    // {
    //     path: "/resident",
    //     component: () => import("./_resident/ResidentLayout.vue"),
    //     children: [
    //         {
    //             path: "",
    //             name: "resident",
    //             component: () =>
    //                 import("./_resident/pages/Dashboard/Dashboard.vue"),
    //         },
    //     ],
    //     beforeEnter(to, from, next) {
    //         if (!auth.isLoggedIn()) {
    //             console.log("not logged in");
    //             next("login");
    //         } else {
    //             if (auth.getUserRole() == "resident") {
    //                 next();
    //             } else if (auth.getUserRole() == "official") {
    //                 next();
    //             } else {
    //                 next("/admin");
    //             }
    //         }
    //     },
    // },

    {
        path: "/login",
        name: "login",
        component: () => import("./_auth/pages/SignIn.vue"),
    },
];

const router = new Router({
    mode: "history",
    routes: routes,
    linkActiveClass: "active",
});

export default router;
