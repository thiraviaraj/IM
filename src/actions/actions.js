import * as types from "./types.js";

export const openNavBar = (val) => (dispatch) => {
  dispatch({ type: types.NAV_OPEN, payload: val });
};
