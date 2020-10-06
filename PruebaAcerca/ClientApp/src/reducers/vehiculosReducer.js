import * as actionType from "../actions/ActionTypes";

const initialState = {
    vehiculos: [],
    mode: "ADD",
    showDialog: false,
    vehiculo: {
        id: null,
        numeroPedido: null,
        bastidor: null,
        modelo: null,
        matricula: null,
        fechaEntrega: null,
    }
};

const VehiculosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.VEHICULOS_LOADED:
            return Object.assign({}, state, {
                vehiculos: action.value
            });
        case actionType.SHOW_NEW_VEHICULO_DIALOG:
            return Object.assign({}, state, {
                showDialog: true,
                mode: "ADD",
                vehiculo: null
            });
        case actionType.SHOW_EDIT_VEHICULO_DIALOG:
            return Object.assign({}, state, {
                showDialog: true,
                mode: "EDIT",
                vehiculo: action.value
            });
        case actionType.CLOSE_DIALOG:
            return Object.assign({}, state, {
                showDialog: false,
                vehiculo: {
                    id: null,
                    numeroPedido: null,
                    bastidor: null,
                    modelo: null,
                    matricula: null,
                    fechaEntrega: null,
                },
            });
        default:
            return state;
    }
};

export default VehiculosReducer;
