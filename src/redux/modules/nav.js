// action
const SET_NAV_HEIGHT = "SET_NAV_HEIGHT";

// action creator
export const setNavHeight = navHeight => {
	return { type: SET_NAV_HEIGHT, payload: navHeight };
};

// reducer
const initialState = {
	navHeight: ""
};
export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_NAV_HEIGHT":
			return {
				...state,
				navHeight: action.payload
			};
		default:
			return state;
	}
};
