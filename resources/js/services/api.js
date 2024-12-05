import { http, httpFile } from "./http_service";

// officials
export function getOfficials() {
    try {
        return http().get("/officials");
    } catch (e) {
        console.log(e);
    }
}

export function addOfficial(data) {
    try {
        return http().post("/officials", data);
    } catch (e) {
        console.log(e);
    }
}

export function updateOfficial(id, data) {
    try {
        return http().put(`/officials/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export function deleteOfficial(id) {
    try {
        return http().delete(`/officials/${id}`);
    } catch (e) {
        console.log(e);
    }
}

// residents
export function getResidents() {
    try {
        return http().get("/residents");
    } catch (e) {
        console.log(e);
    }
}
export function addResident(data) {
    try {
        return http().post("/residents", data);
    } catch (e) {
        console.log(e);
    }
}

export function updateResident(id, data) {
    try {
        return http().put(`/residents/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export function deleteResident(id) {
    try {
        return http().delete(`/residents/${id}`);
    } catch (e) {
        console.log(e);
    }
}

// Disasters
export function getDisasters() {
    try {
        return http().get("/disasters");
    } catch (e) {
        console.log(e);
    }
}

export function addDisaster(data) {
    try {
        return http().post("/disasters", data);
    } catch (e) {
        console.log(e);
    }
}

export function updateDisaster(id, data) {
    try {
        return http().put(`/disasters/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export function deleteDisaster(id) {
    try {
        return http().delete(`/disasters/${id}`);
    } catch (e) {
        console.log(e);
    }
}

// Categories
export function getCategories() {
    try {
        return http().get("/categories");
    } catch (e) {
        console.log(e);
    }
}

export function addCategories() {
    try {
        return http().post("/categories", data);
    } catch (e) {
        console.log(e);
    }
}

export function updateCategories(id, data) {
    try {
        return http().post(`/categories/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export function deleteCategories(id) {
    try {
        return http().delete(`/categories/${id}`);
    } catch (e) {
        console.log(e);
    }
}

export function saveCategory(category) {
    if (category.id) {
        return http().put(`/categories/${category.id}`, category);
    } else {
        return http().post("/categories", category);
    }
}

// Services
export function getServices() {
    try {
        return httpFile().get("/services");
    } catch (e) {
        console.log(e);
    }
}

export function addService(data) {
    try {
        return httpFile().post("/services", data);
    } catch (e) {
        console.log(e);
    }
}

export function updateService(id, data) {
    try {
        return httpFile().post(`/services/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export function deleteService(id) {
    try {
        return http().delete(`/services/${id}`);
    } catch (e) {
        console.log(e);
    }
}

// Resources
export function getResources() {
    try {
        return httpFile().get("/resources");
    } catch (e) {
        console.log(e);
    }
}

export function addResource(data) {
    try {
        return httpFile().post("/resources", data);
    } catch (e) {
        console.log(e);
    }
}

export function updateResource(id, data) {
    try {
        return httpFile().post(`/resources/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export function deleteResource(id) {
    try {
        return httpFile().delete(`/resources/${id}`);
    } catch (e) {
        console.log(e);
    }
}

// alerts
export function getAlerts() {
    try {
        return http().get("/alerts");
    } catch (e) {
        console.log(e);
    }
}

export function addAlert(data) {
    try {
        return http().post("/alerts", data);
    } catch (e) {
        console.log(e);
    }
}

export function updateAlert(id, data) {
    try {
        return http().put(`/alerts/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export function deleteAlert(id) {
    try {
        return http().delete(`/alerts/${id}`);
    } catch (e) {
        console.log(e);
    }
}

export function sendAlert(data) {
    try {
        return http().post("/send-alerts", data);
    } catch (e) {
        console.log(e);
    }
}

// assistance

export function getAssistants() {
    try {
        return httpFile().get("/assistants");
    } catch (e) {
        console.log(e);
    }
}

export function addAssistant(data) {
    try {
        return httpFile().post("/assistants", data);
    } catch (e) {
        console.log(e);
    }
}

export function updateAssistant(id, data) {
    try {
        return httpFile().post(`/assistants/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export function deleteAssistant(id) {
    try {
        return httpFile().delete(`/assistants/${id}`);
    } catch (e) {
        console.log(e);
    }
}

export function respondAssistant(id, data) {
    try {
        return http().post(`/respond-action/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

// residents
export function getResidentDisasters() {
    try {
        return http().get("/resident-disasters");
    } catch (e) {
        console.log(e);
    }
}

export function getResidentDisasterPerPage(page) {
    try {
        console.log(page);
        return http().get("/resident-disasters?page=" + page.page);
    } catch (e) {
        console.log(e);
    }
}

export function getResidentResources(page) {
    try {
        return http().get("/resident-resources?page=" + page.page);
    } catch (e) {
        console.log(e);
    }
}

export function getResidentServices(page) {
    try {
        return http().get("/resident-services?page=" + page.page);
    } catch (e) {
        console.log(e);
    }
}

export function getResidentAssistances() {
    try {
        return httpFile().get("/resident-assistance");
    } catch (e) {
        console.log(e);
    }
}

export function getAssistanceData() {
    try {
        return http().get("/assistance-data");
    } catch (e) {
        console.log(e);
    }
}

export function yearly_report(year, date) {
    return httpFile().get("/yearly-report?year=" + year + "&date=" + date);
}

export function getMessages() {
    try {
        return http().get("/conversations");
    } catch (e) {
        console.log(e);
    }
}

export function createMessage(data) {
    try {
        return http().post("/send-message", data);
    } catch (e) {
        console.log(e);
    }
}

export function replyMessage(data, id) {
    try {
        return http().post(`reply-message/${id}`, data);
    } catch (e) {
        console.log(e);
    }
}

export function deleteConversation(id) {
    try {
        return http().delete(`/conversation/${id}`);
    } catch (e) {
        console.log(e);
    }
}
