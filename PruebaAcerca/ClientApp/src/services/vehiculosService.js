import { apiCall } from "./apiClient";

export async function getAll() {
    const response = await apiCall(`/api/vehiculos`, "GET");
    return await response.json();
}

export async function getVehiculo(id) {
    const response = await apiCall(`/api/vehiculos/${id}`, "GET");
    return await response.json();
}

export async function saveVehiculo(v) {
    const response = await apiCall(`/api/vehiculos`, "POST", v);
    return await response.json();
}

export async function removeVehiculo(v) {
    const response = await apiCall(`/api/vehiculos`, "DELETE", v);
    return await response.json();
}