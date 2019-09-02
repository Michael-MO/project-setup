import { combineReducers } from "redux";
import DB_RAIDS from "../assets/raids";
import { playersObjectMerged } from "../components/Setup/Logic/playersObjectMerged";
import { playersBySuperSort } from "../utils";

const selectRaidsReducer = (state = DB_RAIDS[DB_RAIDS.length - 1], action) => {
  switch (action.type) {
    case "SELECT_RAIDS":
      return action.payload;
    default:
      return state;
  }
};

const getAllPlayersReducer = (state = [], action) => {
  if (action) {
    return playersBySuperSort(playersObjectMerged());
  } else {
    return [];
  }
};

export default combineReducers({
  selectRaid: selectRaidsReducer,
  getAllPlayers: getAllPlayersReducer
});
