import {
	DELETE_SELECTED_REALTY,
	SET_CURRENT_PAGE,
	SET_DATA,
	SET_SELECTED_REALTY,
	SET_TOTAL,
} from "../actionTypes";

const initialState = {
	total: 0,
	currentPage: 1,
	data: [],
	selectedRealty: {},
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
		default:
			return state;
	}
};

export default realtyReducer;
