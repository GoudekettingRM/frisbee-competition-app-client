import {
  ADD_COMPETITION,
  SET_FETCHED_COMPETITIONS,
  SET_SELECTED_COMPETITION
} from "./actions";
import { ADD_TEAM_TO_COMPETITION } from "../team/actions";

const initialState = {
  all: [],
  selected: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TEAM_TO_COMPETITION: {
      const allCompetitionsUpdated = state.all.map(competition => {
        if (competition.id === state.selected.id) {
          return {
            ...competition,
            teams: [...competition.teams, payload]
          };
        } else {
          return competition;
        }
      });
      return {
        ...state,
        all: allCompetitionsUpdated,
        selected: {
          ...state.selected,
          teams: [...state.selected.teams, payload]
        }
      };
    }
    case SET_SELECTED_COMPETITION: {
      return {
        ...state,
        selected: { ...payload }
      };
    }
    case SET_FETCHED_COMPETITIONS: {
      return {
        ...state,
        all: [...payload]
      };
    }
    case ADD_COMPETITION:
      return {
        ...state,
        all: [...state.all, payload]
      };

    default:
      return state;
  }
};
