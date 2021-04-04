import { combineReducers } from "redux";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import realtyReducer from "./realty-reducer";

export default combineReducers({
	auth: authReducer,
	app: appReducer,
	users: usersReducer,
	realty: realtyReducer,
});
