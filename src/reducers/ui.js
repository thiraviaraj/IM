import * as types from "../actions/types";
const initialState = {
  navOpen: false,
};
export const ui = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.NAV_OPEN:
        return {
          ...state,
          navOpen: payload,
        };
    default:
      return state;
  }
};
