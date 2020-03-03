import { SET_SESSION } from "./actions";

const initialState = {
  jwt: "",
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SESSION:
      return { ...state, jwt: payload.jwt, user: payload.player };
    default:
      return state;
  }
};
