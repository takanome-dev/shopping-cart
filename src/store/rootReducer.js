import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import uiReducer from "./ui";

const rootReducer = combineReducers({
	entities: entitiesReducer,
	ui: uiReducer,
});

export default rootReducer;
