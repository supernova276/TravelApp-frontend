import { combineReducers } from "redux";
import {searchReducer} from './search.reducers'
import { serviceReducer } from "./service.reducers";
import {FilterReducer} from "./filter.reducers"
import { authReducer } from "./auth.reducers";
import {authServiceReducer} from "./authService-reducer"
import {wishListReducer} from "./wishlist.reducers"

export const rootReducer=combineReducers({
    search:searchReducer,
    service:serviceReducer,
    filter:FilterReducer,
    auth:authReducer,
    authService:authServiceReducer,
    wishlist:wishListReducer
    
});