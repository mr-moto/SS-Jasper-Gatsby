// action
const SET_TEST = "SET_TEST";

// action creator
export const setTest = test => {
	return { type: SET_TEST, payload: test };
    console.log(test)
};

// reducer
const initialState = {
	test: ""
};
export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_TEST":
			return {
				...state,
				test: action.payload
			};
		default:
			return state;
	}
};
