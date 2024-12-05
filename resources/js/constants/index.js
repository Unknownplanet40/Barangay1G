export const adminLeftSidebarLinks = [
    {
        route: "/admin/",
        label: "Dashboard",
        icon: "fas fa-home",
        img: "/images/icons/dashboard.png",
        auth: ["admin", "official"],
    },
    {
        route: "/admin/officials",
        label: "Officials",
        icon: "fas fa-user-tie",
        auth: ["admin"],
    },
    {
        route: "/admin/residents",
        label: "Residents",
        icon: "fas fa-users",
        img: "/images/icons/residents.png",
        auth: ["admin", "official"],
    },
    {
        route: "/admin/disasters",
        label: "Disasters",
        icon: "fas fa-house-damage",
        img: "/images/icons/disaster.png",
        auth: ["admin", "official"],
    },
    {
        route: "/admin/assistance",
        label: "Assistance",
        icon: "fas fa-hands-helping",
        img: "/images/icons/assist.png",
        auth: ["admin", "official"],
    },
    {
        route: "/admin/messages",
        label: "Messages",
        icon: "fas fa-comments",
        img: "/images/icons/message.png",
        auth: ["admin", "official"],
    },
    {
        route: "/admin/services",
        label: "Services",
        icon: "fas fa-chalkboard-teacher",
        img: "/images/icons/service.png",
        auth: ["admin", "official"],
    },
    {
        route: "/admin/resources",
        label: "Materials",
        icon: "fas fa-book-reader",
        img: "/images/icons/resource.png",
        auth: ["admin", "official"],
    },
    {
        route: "/admin/alerts",
        label: "Alerts",
        icon: "fas fa-exclamation",
        img: "/images/icons/alert.png",
        auth: ["admin", "official"],
    },
    {
        route: "/admin/reports",
        label: "Reports",
        icon: "fas fa-chart-area",
        img: "/images/icons/report.png",
        auth: ["admin", "official"],
    },
];

export const residentLeftSidebarLinks = [
    {
        route: "/",
        label: "Dashboard",
        icon: "fas fa-home",
        img: "/images/icons/dashboard.png",
        auth: ["resident"],
    },
    {
        route: "/disasters",
        label: "Disasters",
        icon: "fas fa-house-damage",
        img: "/images/icons/disaster.png",
        auth: ["resident"],
    },

    {
        route: "/resources",
        label: "Materials",
        icon: "fas fa-book-reader",
        img: "/images/icons/resource.png",
        auth: ["resident"],
    },

    {
        route: "/services",
        label: "Services",
        icon: "fas fa-chalkboard-teacher",
        img: "/images/icons/service.png",
        auth: ["resident"],
    },

    {
        route: "/assistance",
        label: "Assistance",
        icon: "fas fa-hands-helping",
        img: "/images/icons/assist.png",
        auth: ["resident"],
    },

    {
        route: "/messages",
        label: "Messages",
        img: "/images/icons/message.png",
        auth: ["resident"],
    },
];
