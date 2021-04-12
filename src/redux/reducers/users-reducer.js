import {
	DELETE_PROFILE,
	SET_PROFILE,
	UPDATE_PROFILE_IS_LOADING,
} from "../actionTypes";

const initialState = {
	profile: null,
	isLoading: false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return {
				...state,
				profile: action.payload,
			};
		case DELETE_PROFILE:
			return {
				...state,
				profile: null,
			};
		case UPDATE_PROFILE_IS_LOADING:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};

export default usersReducer;
