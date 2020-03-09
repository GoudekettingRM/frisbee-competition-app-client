import { SET_GAME_DETAILS } from "./actions";

const initialState = {
  data: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GAME_DETAILS:
      return {
        ...state,
        data: payload
      };

    default:
      return state;
  }
};
