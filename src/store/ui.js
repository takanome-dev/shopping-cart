import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "ui",
	initialState: {
		filter: "all",
		numberInCart: 0,
	},
	reducers: {
		filterUpdated: (state, action) => {
			state.filter = action.payload;
		},
		cartNumberUpdated: (state, action) => {
			state.numberInCart = action.payload;
		},
	},
});

const { filterUpdated, cartNumberUpdated } = slice.actions;

export const updateFilter = (filter) => (dispatch) =>
	dispatch({ type: filterUpdated.type, payload: filter });

export const updateCartNumber = () => (dispatch, getState) => {
	const numberInCart = getState().ui.numberInCart;
	return dispatch({ type: cartNumberUpdated.type, payload: numberInCart + 1 });
};

export default slice.reducer;
