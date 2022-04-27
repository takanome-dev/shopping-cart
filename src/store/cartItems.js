import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "cartItems",
	initialState: {
		items: [],
	},
	reducers: {
		itemAdded: (state, action) => {
			state.items.push(action.payload);
		},
	},
});

const { itemAdded } = slice.actions;

export const addItemToCart = (itemId) => (dispatch, getState) => {
	const item = getState().entities.products.list.find((p) => p.id === itemId);
	return dispatch({ type: itemAdded.type, payload: item });
};

export default slice.reducer;
