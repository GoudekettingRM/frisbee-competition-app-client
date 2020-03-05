import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import competitionReducer from "./competition/reducer";

export default combineReducers({
  session: userReducer,
  competitions: competitionReducer
});
