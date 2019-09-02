export const selectRaidsAction = raid => {
  return {
    type: "SELECT_RAIDS",
    payload: raid
  };
};

export const getAllPlayersAction = () => {
  return {
    type: "GET_ALL_PLAYERS"
  };
};
