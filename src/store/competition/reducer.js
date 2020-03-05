import { ADD_COMPETITION } from "./actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COMPETITION:
      return [...state, payload];

    default:
      return state;
  }
};
