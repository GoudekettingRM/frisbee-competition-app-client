import { SET_SESSION, REMOVE_SESSION, UPDATE_USER_DATA } from "./actions";
import {
  UPDATE_USER_ORGANISATION,
  ADD_ORGANISATION_TO_USER_DATA
} from "../organisation/actions";
import { ADD_COMPETITION_TO_USER } from "../competition/actions";

const initialState = {
  jwt: "",
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COMPETITION_TO_USER: {
      const newCompetitions = state.user.organisation.competitions.concat(
        payload
      );
      return {
        ...state,
        user: {
          ...state.user,
          organisation: {
            ...state.user.organisation,
            competitions: newCompetitions
          }
        }
      };
    }
    case ADD_ORGANISATION_TO_USER_DATA: {
      return {
        ...state,
        user: {
          ...state.user,
          organisation: payload,
          organisationId: payload.id
        }
      };
    }
    case UPDATE_USER_ORGANISATION: {
      return {
        ...state,
        user: {
          ...state.user,
          organisation: payload
        }
      };
    }
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
