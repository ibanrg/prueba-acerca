import * as actionType from "./ActionTypes";

export const showLoading = value => ({
    type: actionType.SHOW_LOADING,
    value
});

export const hideLoading = value => ({
    type: actionType.HIDE_LOADING,
    value
});

export const vehiculosLoaded = value => ({
    type: actionType.VEHICULOS_LOADED,
    value
});

export const showNewVehiculoDialog = value => ({
    type: actionType.SHOW_NEW_VEHICULO_DIALOG
});

export const showEditVehiculoDialog = value => ({
    type: actionType.SHOW_EDIT_VEHICULO_DIALOG,
    value
});

export const saveVehiculo = () => ({
    type: actionType.SAVE_VEHICULO
});

export const closeDialog = () => ({
    type: actionType.CLOSE_DIALOG
});