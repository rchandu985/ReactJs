import {applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer_Nuera';
const middleware=[thunk]

const store=createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
        ))
export default store