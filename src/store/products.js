import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import getDiffInMinutes from "../utils/DiffInMinutes";
import actions from "./actions";

const slice = createSlice({
	name: "products",
	initialState: {
		list: [],
		loading: false,
		lastFetch: 0,
	},
	reducers: {
		productsRequested: (state, action) => {
			state.loading = true;
		},
		productsAdded: (state, action) => {
			state.list = action.payload;
			state.loading = false;
			state.lastFetch = Date.now();
		},
		// productsFiltered: (state, action) => {
		// 	state.list.filter((p) => p.category === action.payload.category);
		// },
		productsRequestFailed: (state, action) => {
			state.loading = false;
		},
	},
});

const { productsAdded, productsRequested, productsRequestFailed } =
	slice.actions;

export const getProducts = () => (dispatch, getState) => {
	const { lastFetch } = getState().entities.products;
	const diffInMinutes = getDiffInMinutes(lastFetch);

	if (diffInMinutes < 15) return;

	// return dispatch({ type: productsAdded.type, payload: products });
	dispatch(
		actions.apiCallStarted({
			url: "/products",
			onLoading: productsRequested.type,
			onSuccess: productsAdded.type,
			onError: productsRequestFailed.type,
		})
	);
};

export const filterProducts = createSelector(
	(state) => state.entities.products.list,
	(state) => state.ui.filter,
	(products, filter) => products.filter((p) => p.category === filter)
);

export default slice.reducer;
