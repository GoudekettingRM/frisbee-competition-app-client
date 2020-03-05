import { SET_SESSION, REMOVE_SESSION, UPDATE_USER_DATA } from "./actions";

const initialState = {
  jwt: "",
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER_DATA: {
      return {
        ...state,
        user: payload.updatedUser
      };
    }
    case SET_SESSION:
      return { ...state, jwt: payload.jwt, user: payload.user };
    case REMOVE_SESSION:
      return { ...state, jwt: "", user: {} };
    default:
      return state;
  }
};
