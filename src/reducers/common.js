import * as types from "../actions/types";
// import { exercises as initialState } from '../initialState.js'
const initialState = {
  navOpen: false,
};
export const common = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.NAV_OPEN:
      return {
        navOpen: payload,
      };
    default:
      break;
  }
  return state;
};
