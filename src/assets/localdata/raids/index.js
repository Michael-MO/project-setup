import DB_BossesEternalPalace from "./eternal-palace";
import DB_BossesBattleOfDazaralor from "./battle-for-dazaralor";

const DB_RAIDS = [
  {
    ID: 1,
    Name: "Battle for Dazar'alor",
    Bosses: DB_BossesBattleOfDazaralor
  },
  {
    ID: 2,
    Name: "The Eternal Palace",
    Bosses: DB_BossesEternalPalace
  }
];

export default DB_RAIDS;
