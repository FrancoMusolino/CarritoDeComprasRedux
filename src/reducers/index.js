import { combineReducers } from "redux";
import shoppingReducer from "./shoppingReducer";

const reducer = combineReducers({
    shopping: shoppingReducer,
});

export default reducer;