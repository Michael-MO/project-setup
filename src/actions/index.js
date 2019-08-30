export const selectRaidsAction = raid => {
  return {
    type: "SELECT_RAIDS",
    payload: raid
  };
};

export const getCompletePlayersAction = (players, roles, classes) => {
  return {
    type: "GET_COMPLETE_PLAYERS",
    payload: { players, roles, classes }
  };
};
