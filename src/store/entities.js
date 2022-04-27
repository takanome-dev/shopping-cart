import { combineReducers } from "redux";
import cartItemsReducer from "./cartItems";
import productsReducer from "./products";

const entitiesReducer = combineReducers({
	products: productsReducer,
	cartItems: cartItemsReducer,
});

export default entitiesReducer;
