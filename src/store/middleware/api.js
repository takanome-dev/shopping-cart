import axios from "axios";
import actions from "../actions";

const api = (store) => (next) => async (action) => {
	if (action.type !== actions.apiCallStarted.type) return next(action);

	const { url, method, data, onLoading, onSuccess, onError } = action.payload;
	onLoading && store.dispatch({ type: onLoading });

	next(action);

	try {
		const res = await axios.request({
			baseURL: "https://fakestoreapi.com",
			url,
			method,
			data,
		});

		store.dispatch(actions.apiCallSucceeded(res.data));
		onSuccess && store.dispatch({ type: onSuccess, payload: res.data });
	} catch (err) {
		store.dispatch(actions.apiCallFailed(err.message));
		onError && store.dispatch({ type: onError });
	}
};

export default api;
