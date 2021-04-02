import {
	DELETE_IS_AUTH,
	DELETE_USER_ID,
	SET_IS_AUTH,
	SET_USER_ID,
} from "../actionTypes";

const initialState = {
	isAuth: false,
	userId: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_AUTH:
			return {
				...state,
				isAuth: true,
			};
		case DELETE_IS_AUTH:
			return {
				...state,
				isAuth: false,
			};
		case SET_USER_ID:
			return {
				...state,
				userId: action.payload,
			};
		case DELETE_USER_ID:
			return {
				...state,
				userId: null,
			};
		default:
			return state;
	}
};

export default authReducer;
