import { SET_SELECTED_TEAM_DETAILS } from "./actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_TEAM_DETAILS:
      return payload;

    default:
      return state;
  }
};
