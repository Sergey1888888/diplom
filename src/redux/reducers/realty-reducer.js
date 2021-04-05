import {
	DELETE_IS_NOT_FOUND,
	DELETE_SELECTED_REALTY,
	SET_CURRENT_PAGE,
	SET_DATA,
	SET_IS_NOT_FOUND,
	SET_SELECTED_REALTY,
	SET_TOTAL,
	SET_REALTY_IS_LOADING,
} from "../actionTypes";

const initialState = {
	total: 0,
	currentPage: 1,
	data: [],
	selectedRealty: {},
	isNotFound: false,
	isLoading: false,
};

const realtyReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload };
		case SET_TOTAL:
			return { ...state, total: action.payload };
		case SET_DATA:
			return { ...state, data: [].concat(state.data, action.payload) };
		case SET_SELECTED_REALTY:
			return { ...state, selectedRealty: action.payload };
		case DELETE_SELECTED_REALTY:
			return { ...state, selectedRealty: {} };
		case SET_IS_NOT_FOUND:
			return { ...state, isNotFound: true };
		case DELETE_IS_NOT_FOUND:
			return { ...state, isNotFound: false };
		case SET_REALTY_IS_LOADING:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};

export default realtyReducer;
