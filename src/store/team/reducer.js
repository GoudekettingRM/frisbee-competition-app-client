import { SET_SELECTED_TEAM_DETAILS } from "./actions";
import { ADD_USER_TO_TEAM } from "../user/actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER_TO_TEAM: {
      return {
        ...state,
        users: [...state.users, payload.user]
      };
    }
    case SET_SELECTED_TEAM_DETAILS:
      return payload;

    default:
      return state;
  }
};
