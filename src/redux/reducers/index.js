import { combineReducers } from "redux";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";

export default combineReducers({ auth: authReducer, app: appReducer });
