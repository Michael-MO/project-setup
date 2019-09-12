import Firebase from "../apis/firebaseDB";

const db = new Firebase();

export const dbConnection = () => {
  return db;
};

export const selectRaidAction = raid => {
  return {
    type: "SELECT_RAID",
    payload: raid
  };
};

export const getRaidsAction = () => async dispatch => {
  const response = await db
    .raids()
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });
  dispatch({
    type: "GET_RAIDS",
    payload: response
  });
};

export const getPlayersAction = () => async dispatch => {
  const response = await db
    .players()
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });
  dispatch({
    type: "GET_PLAYERS",
    payload: response
  });
};

export const createPlayerAction = dbRef => async dispatch => {
  dbRef.push().set({
    ID: 1,
    Name: "Unknown Player",
    ClassID: 6,
    Spec: "Unreal Spec",
    RoleID: 1
  });
  dispatch({
    type: "CREATE_PLAYER"
  });
};

export const getClassesAction = () => async dispatch => {
  const response = await db
    .classes()
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });
  dispatch({
    type: "GET_CLASSES",
    payload: response
  });
};

export const getRolesAction = () => async dispatch => {
  const response = await db
    .roles()
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });
  dispatch({
    type: "GET_ROLES",
    payload: response
  });
};

export const getSetups = dbRef => async dispatch => {
  const response = await dbRef.once("value").then(snapshot => {
    return snapshot.val();
  });
  dispatch({
    type: "GET_SETUPS",
    payload: response
  });
};
