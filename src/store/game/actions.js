export const SET_GAME_DETAILS = "games/SET_SELECTED_GAME_DETAILS";

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
