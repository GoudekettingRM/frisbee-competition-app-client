import axios from "axios";
import { baseUrl } from "../../api";

export const SET_GAME_DETAILS = "games/SET_SELECTED_GAME_DETAILS";

export function getOneGame(id) {
  return async (dispatch, getState) => {
    try {
      const game = await axios.get(`${baseUrl}/games/${id}`);
      console.log("Game test in game actions", game);
      dispatch(setGameDetailsAction(game.data));
    } catch (error) {
      throw error;
    }
  };
}

export function setGameDetails(gameData) {
  return (dispatch, getState) => {
    dispatch(setGameDetailsAction(gameData));
  };
}

function setGameDetailsAction(gameData) {
  return {
    type: SET_GAME_DETAILS,
    payload: gameData
  };
}
