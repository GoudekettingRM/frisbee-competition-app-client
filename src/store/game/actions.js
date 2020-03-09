import axios from "axios";
import { baseUrl } from "../../api";

export const SET_GAME_DETAILS = "games/SET_SELECTED_GAME_DETAILS";

export function getOneGame(id) {
  return async (dispatch, getState) => {
    try {
      const game = await axios.get(`${baseUrl}/games/${id}`);
      console.log("Game test in game actions", game);
    } catch (error) {
      throw error;
    }
  };
}

export function setGameDetails(data) {
  return (dispatch, getState) => {
    dispatch(setGameDetailsAction(data));
  };
}

function setGameDetailsAction(data) {
  return {
    type: SET_GAME_DETAILS,
    payload: data
  };
}
