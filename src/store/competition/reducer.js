import { ADD_COMPETITION, SET_FETCHED_COMPETITIONS } from "./actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FETCHED_COMPETITIONS: {
      return [...payload];
    }
    case ADD_COMPETITION:
      return [...state, payload];

    default:
      return state;
  }
};
