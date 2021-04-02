import { DELETE_PROFILE, SET_PROFILE } from "../actionTypes";

const initialState = {
	profile: null,
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
		default:
			return state;
	}
};

export default usersReducer;
