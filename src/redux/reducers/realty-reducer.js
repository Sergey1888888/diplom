import {
	DELETE_IS_NOT_FOUND,
	DELETE_SELECTED_REALTY,
	SET_CURRENT_PAGE,
	SET_DATA,
	SET_IS_NOT_FOUND,
	SET_SELECTED_REALTY,
	SET_TOTAL,
	SET_REALTY_IS_LOADING,
	UPDATE_FILTERS,
	UPDATE_SORTS,
	SET_HAS_NEXT_PAGE,
	SET_NOT_DEFAULT_FILTER,
	SET_OWNER_REALTIES,
	SET_IS_OWNER_REALTIES_LOADING,
	SET_OWNER_REALTIES_IDS,
	DELETE_REALTY_IS_FETCHING,
	SET_IS_UPDATING,
	DELETE_ALL_WHEN_LOGOUT,
	SET_COORDS,
	DELETE_DATA_ON_CHANGE,
} from "../actionTypes";

const initialState = {
	total: 0,
	currentPage: 1,
	data: [],
	selectedRealty: {},
	isNotFound: false,
	isLoading: false,
	filters: {
		minPrice: null,
		maxPrice: null,
		rooms: null,
		area: null,
		type: "Квартира",
		district: null,
		street: null,
		encumbranceType: 0,
	},
	sorts: {
		price: 1,
		rooms: null,
		area: null,
	},
	sortsType: 1,
	hasNextPage: false,
	notDefaultFilter: false,
	ownerRealties: [],
	isOwnerRealtiesLoading: false,
	ownerRealtiesIds: [],
	isDeletingRealty: false,
	isUpdating: false,
	coords: [],
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
		case UPDATE_FILTERS:
			return { ...state, filters: action.payload, data: [], currentPage: 1 };
		case UPDATE_SORTS:
			return {
				...state,
				sorts: action.payload.sorts,
				sortsType: action.payload.sortsType,
				data: [],
				currentPage: 1,
			};
		case SET_HAS_NEXT_PAGE:
			return { ...state, hasNextPage: action.payload };
		case SET_NOT_DEFAULT_FILTER:
			return { ...state, notDefaultFilter: action.payload };
		case SET_OWNER_REALTIES:
			return { ...state, ownerRealties: [].concat(action.payload) };
		case SET_IS_OWNER_REALTIES_LOADING:
			return { ...state, isOwnerRealtiesLoading: action.payload };
		case SET_OWNER_REALTIES_IDS:
			return { ...state, ownerRealtiesIds: action.payload };
		case DELETE_REALTY_IS_FETCHING:
			return { ...state, isDeletingRealty: action.payload };
		case SET_IS_UPDATING:
			return { ...state, isUpdating: action.payload };
		case DELETE_ALL_WHEN_LOGOUT:
			return { ...state, ownerRealties: [], ownerRealtiesIds: [] };
		case SET_COORDS:
			return { ...state, coords: action.payload };
		case DELETE_DATA_ON_CHANGE:
			return { ...state, data: [], total: 0, currentPage: 1 };
		default:
			return state;
	}
};

export default realtyReducer;
