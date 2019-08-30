import { combineReducers } from "redux";

const selectRaidsReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_RAIDS":
      return action.payload;
    default:
      return state;
  }
};

const getCompletePlayersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COMPLETE_PLAYERS":
      let newArray = [];

      action.payload.players.forEach(player => {
        action.payload.classes.forEach(gameClass => {
          if (player.ClassID === gameClass.ID) {
            player.Class = gameClass;
          }
        });
        action.payload.roles.forEach(role => {
          if (player.RoleID === role.ID) {
            player.Role = role;
          }
        });

        newArray.push(player);
      });

      return newArray;
    default:
      return state;
  }
};

export default combineReducers({
  selectRaid: selectRaidsReducer,
  getCompletePlayers: getCompletePlayersReducer
});
