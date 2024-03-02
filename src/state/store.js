import { applyMiddleware,createStore } from "redux";
import rooReducers from "./reducers";
import {thunk} from "redux-thunk"

export const store = createStore(
    rooReducers,
    {},
    applyMiddleware(thunk)
);