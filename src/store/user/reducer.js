import { SET_SESSION, REMOVE_SESSION } from "./actions";

const initialState = {
  jwt: "",
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SESSION:
      return { ...state, jwt: payload.jwt, user: payload.user };
    case REMOVE_SESSION:
      return { ...state, jwt: "", user: {} };
    default:
      return state;
  }
};
