import { SET_GAME_DETAILS } from "./actions";

const initialState = {
  game: {},
  homeTeam: {},
  awayTeam: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GAME_DETAILS:
      console.log("payload test:", payload);

      return {
        ...state,
        game: payload.game,
        homeTeam: payload.homeTeam,
        awayTeam: payload.awayTeam
      };

    default:
      return state;
  }
};
