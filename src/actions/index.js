export const selectRaidAction = raid => {
  return {
    type: "SELECT_RAID",
    payload: raid
  };
};

export const getRaidsAction = dbRef => async dispatch => {
  const response = await dbRef.once("value").then(snapshot => {
    return snapshot.val();
  });
  dispatch({
    type: "GET_RAIDS",
    payload: response
  });
};

export const getPlayersAction = dbRef => async dispatch => {
  const response = await dbRef.once("value").then(snapshot => {
    return snapshot.val();
  });
  dispatch({
    type: "GET_PLAYERS",
    payload: response
  });
};

export const getClassesAction = dbRef => async dispatch => {
  const response = await dbRef.once("value").then(snapshot => {
    return snapshot.val();
  });
  dispatch({
    type: "GET_CLASSES",
    payload: response
  });
};

export const getRolesAction = dbRef => async dispatch => {
  const response = await dbRef.once("value").then(snapshot => {
    return snapshot.val();
  });
  dispatch({
    type: "GET_ROLES",
    payload: response
  });
};
