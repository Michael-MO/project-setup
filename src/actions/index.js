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

export const getSetupsAction = raid => async dispatch => {
  var castToArray = [];

  const response = await db
    .setups()
    .once("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        childData.Key = childKey;
        castToArray.push(childData);
      });
    })
    .then(snapshot => {
      return castToArray.filter(x => x.Raid === raid.ID);
    });
  dispatch({
    type: "GET_SETUPS",
    payload: response
  });
};

// export const fillSetupsCollection = (players, raids) => async dispatch => {
//   var obj = {};

//   players.forEach(async player => {
//     raids.forEach(async raid => {
//       raid.Bosses.forEach(async boss => {
//         obj.Player = player.ID;
//         obj.Raid = raid.ID;
//         obj.Boss = boss.ID;
//         obj.Status = 1;

//         await db.setups().push(obj);
//       });
//     });
//   });

//   dispatch({
//     type: "CREATE_SETUPS"
//   });
// };
