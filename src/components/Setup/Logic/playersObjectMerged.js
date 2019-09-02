import DB_PLAYERS from "../../../assets/players";
import DB_ROLES from "../../../assets/roles";
import DB_CLASSES from "../../../assets/classes";

export const playersObjectMerged = () => {
  let newArray = [];

  DB_PLAYERS.forEach(player => {
    DB_CLASSES.forEach(gameClass => {
      if (player.ClassID === gameClass.ID) {
        player.Class = gameClass;
      }
    });
    DB_ROLES.forEach(role => {
      if (player.RoleID === role.ID) {
        player.Role = role;
      }
    });

    newArray.push(player);
  });

  return newArray;
};
