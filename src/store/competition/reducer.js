import {
  ADD_COMPETITION,
  SET_FETCHED_COMPETITIONS,
  SET_SELECTED_COMPETITION
} from "./actions";

const initialState = {
  all: [],
  selected: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
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
