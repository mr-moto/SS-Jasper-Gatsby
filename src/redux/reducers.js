import { combineReducers } from "redux";
import testReducer from  './modules/test'

export default combineReducers({
    test: testReducer
});
