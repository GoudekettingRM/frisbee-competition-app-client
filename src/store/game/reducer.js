import { SET_GAME_DETAILS } from "./actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GAME_DETAILS:
      return payload;

    default:
      return state;
  }
};
