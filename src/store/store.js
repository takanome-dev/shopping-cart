import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import rootReducer from "./rootReducer";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export default store;
