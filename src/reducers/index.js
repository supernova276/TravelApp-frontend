import { combineReducers } from "redux";
import {searchReducer} from './search.reducers'
import { serviceReducer } from "./service.reducers";
import {FilterReducer} from "./filter.reducers"

export const rootReducer=combineReducers({
    search:searchReducer,
    service:serviceReducer,
    filter:FilterReducer
});