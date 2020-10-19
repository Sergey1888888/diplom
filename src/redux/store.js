import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const reducers = combineReducers({
	app: reducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
