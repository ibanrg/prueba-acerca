import { combineReducers } from "redux";
import LoadingReducer from "./loadingReducer";
import VehiculosReducer from "./vehiculosReducer";

const rootReducer = combineReducers({
    LoadingReducer,
    VehiculosReducer
});

export default rootReducer;
