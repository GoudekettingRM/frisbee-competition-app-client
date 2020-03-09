import { SET_GAME_DETAILS } from "./actions";

const initialState = {
  data: {},
  homeTeam: {},
  awayTeam: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GAME_DETAILS:
      return {
        ...state,
        data: payload.game,
        homeTeam: payload.homeTeam,
        awayTeam: payload.awayTeam
      };

    default:
      return state;
  }
};
