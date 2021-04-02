import { combineReducers } from "redux";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";

export default combineReducers({
	auth: authReducer,
	app: appReducer,
	users: usersReducer,
});
