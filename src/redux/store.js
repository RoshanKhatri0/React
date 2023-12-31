import { legacy_createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import studentReducer from "./reducers/studentReducer";

const reducer= combineReducers({
    cart:cartReducer,
    student:studentReducer
})

const store=legacy_createStore(reducer)

export default store