import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import competitionReducer from "./competition/reducer";
import gameReducer from "./game/reducer";
import teamReducer from "./team/reducer";

export default combineReducers({
  session: userReducer,
  competitions: competitionReducer,
  game: gameReducer,
  team: teamReducer
});
