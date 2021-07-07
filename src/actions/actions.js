import * as types from "./types.js";

export const openNavBar = (val) => (dispatch) => {
	dispatch({ type: types.NAV_OPEN, payload: val });
};

export const SetToken = (val) => {
	localStorage.setItem('token', val);
	return {
		type: types.LOGIN_SUCCESS,
		payload: val
	};
};
export const logoutPortal = () => {
	return {
		type: types.LOGOUT_SUCCESS,
	};
};

export const checkAuthentication = () => {
	let token = localStorage.getItem('token');
	token = (token === 'undefined' || token === 'null') ? '' : token;
	return {
		type: types.LOGIN_SUCCESS,
		payload: token
	};
};


