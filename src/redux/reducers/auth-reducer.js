import {
	DELETE_IS_AUTH,
	DELETE_USER_ID,
	SET_AUTH_IS_LOADING,
	SET_IS_AUTH,
	SET_USER_ID,
} from "../actionTypes";

const initialState = {
	isAuth: false,
	userId: null,
	isLoading: false,
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
		case SET_AUTH_IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
