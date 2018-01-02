import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";


const createStore = () => reduxCreateStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, createLogger())
    )
)
export default createStore