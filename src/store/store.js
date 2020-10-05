import {applyMiddleware, createStore} from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const initialState = {}
const middleware = [thunk]
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;