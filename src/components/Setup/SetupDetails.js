import React from "react";
import { connect } from "react-redux";

const SetupDetails = props => {
  return (
    <React.Fragment>
      <h4 className="card-title">{props.selectRaid.Name}</h4>
      <table className="table table-sm">
        <thead className="thead-light">
          <tr>
            <th className="col-1">Players</th>
            {props.selectRaid.Bosses.map(boss => {
              return (
                <th key={boss.ID}>
                  <i className="fas fa-skull"></i> {boss.Name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.allPlayers.map(player => {
            return (
              <tr>
                <td key={player.Name}>
                  <span
                    class="badge badge-setup"
                    style={{ backgroundColor: player.Class.HexColor }}
                  >
                    {player.Name}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectRaid: state.selectRaid,
    allPlayers: state.getAllPlayers
  };
};

export default connect(mapStateToProps)(SetupDetails);
