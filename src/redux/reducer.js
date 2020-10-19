const { CLICKED_SUCCESS } = require("./actions");

const initialState = {
	isClicked: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CLICKED_SUCCESS:
			return { ...state, isClicked: true };
		default:
			return state;
	}
};

export default reducer;