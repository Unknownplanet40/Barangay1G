import { http, httpFile } from "./http_service";
import jwt from "jsonwebtoken";
import store from "../store";

export function register(user) {
    return http().post("/auth/register", user);
}

export function login(user) {
    return http()
        .post("/auth/login", user)
        .then((response) => {
            if (response.status === 200) {
                setToken(response.data);
            }
            return response.data;
        });
}

function setToken(user) {
    const token = jwt.sign({ user: user }, "dmstoken");
    localStorage.setItem("dms-token", token);
    store.dispatch("authenticate", user.user);
}

export function isLoggedIn() {
    const token = localStorage.getItem("dms-token");
    const tokenData = jwt.decode(token);
    return token != null;
}

export function getUserRole() {
    const token = localStorage.getItem("dms-token");
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);

    return tokenData.user.user.role;
}

export function getAccessToken() {
    const token = localStorage.getItem("dms-token");
    if (!token) {
        return null;
    }
    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}

export function checkerLogout() {
    http().get("/auth/logout");
    localStorage.removeItem("dms-token");
    localStorage.removeItem("vuex");
}

export function getUserProfile() {
    // const token = localStorage.getItem('laravel-vue-spa-token');
    return http().get("/auth/user_profile");
}
