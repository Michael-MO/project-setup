import DB_RAIDS from "./../raids";
import DB_PLAYERS from "./../raids";

const DB_SETUPS = [
  {
    ID: 1,
    RaidID: 1,
    Raid: [
      {
        ID: 1,
        Bosses: [
          {
            ID: 1,
            Players: [
              {
                ID: 1,
                Status: "1/2/3"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    ID: 2,
    RaidID: 2
  }
];

export const GetAttendancePerBoss = (id, player) => {
  DB_SETUPS.forEach(setup => {
    DB_RAIDS.forEach(raid => {
      if (setup.RaidID === raid.ID) {
        setup.Raid = raid;
      }
    });
  });

  DB_SETUPS.forEach(setup => {
    setup.Raid.Bosses.forEach(boss => {
      boss.AttendingPlayer = player;
      boss.AttendingStatus = 1;
    });
  });

  return DB_SETUPS.find(setup => setup.Raid.ID === id).Raid.Bosses;
};
