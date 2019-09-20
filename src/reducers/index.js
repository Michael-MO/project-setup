import { combineReducers } from "redux";
import { playersBySuperSort } from "../utils";

const selectRaidReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_RAID":
      return action.payload;
    default:
      return state;
  }
};

const getRaidsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_RAIDS":
      return action.payload;
    default:
      return state;
  }
};

const getPlayersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PLAYERS":
      return playersBySuperSort(action.payload);
    default:
      return state;
  }
};

const getClassesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CLASSES":
      return action.payload;
    default:
      return state;
  }
};

const getRolesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ROLES":
      return action.payload;
    default:
      return state;
  }
};

const getSetupsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_SETUPS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  selectRaid: selectRaidReducer,
  getRaids: getRaidsReducer,
  getPlayers: getPlayersReducer,
  getClasses: getClassesReducer,
  getRoles: getRolesReducer,
  getSetups: getSetupsReducer
});
