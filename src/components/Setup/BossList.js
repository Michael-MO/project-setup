import React from "react";

import { CalColumnWidth } from "./../../utils";

const BossList = props => {
  return (
    <tr>
      <th className="col-1">Players</th>
      {props.bosses.map(boss => {
        return (
          <th
            style={{
              width: CalColumnWidth(props.bosses.length)
            }}
            key={boss.ID}
          >
            {boss.Alias}
          </th>
        );
      })}
    </tr>
  );
};

export default BossList;
