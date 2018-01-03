import { combineReducers } from "redux";
import navReducer from  './modules/nav'

export default combineReducers({
    nav: navReducer
});
