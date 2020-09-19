import * as types from "../actions/types";
const initialState = {
};
export const ui = (state = initialState, { type, payload }) => {
  switch (type) {
    // check based on type
    case type:
      console.log(type);
      return state;
    default:
      return state;
  }
};
