import { createAction } from "@reduxjs/toolkit";

const apiCallStarted = createAction("api/callStarted");
const apiCallSucceeded = createAction("api/callSucceeded");
const apiCallFailed = createAction("api/callFailed");

export default {
	apiCallStarted,
	apiCallSucceeded,
	apiCallFailed,
};
