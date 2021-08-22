import {applyMiddleware, createStore} from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import throttledMiddleware from "../util/throttel"

const initialState = {}
const middleware = [thunk, throttledMiddleware]
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;