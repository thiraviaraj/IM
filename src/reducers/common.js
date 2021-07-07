import * as types from "../actions/types";
// import { exercises as initialState } from '../initialState.js'
const initialState = {
  accessToken:  null,
};
export const common = (state = initialState, { type, payload }) => {
  switch (type) {
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          accessToken: payload
        }
        case types.LOGOUT_SUCCESS:
          localStorage.clear();
          return {
            ...state,
            accessToken: null
          }
    default: return state;
  }
};
