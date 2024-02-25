import { combineReducers } from "redux";
import {searchReducer} from './search.reducers'
import { serviceReducer } from "./service.reducers";

export const rootReducer=combineReducers({
    search:searchReducer,
    service:serviceReducer
});