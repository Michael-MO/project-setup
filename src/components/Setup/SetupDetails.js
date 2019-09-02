import React from "react";
import { connect } from "react-redux";
import PlayersList from "./PlayersList";
import { CalColumnWidth } from "./../../utils";

const SetupDetails = props => {
  return (
    <React.Fragment>
      <table className="table table-sm">
        <thead className="thead-light">
          <tr>
            <th className="col-1">Players</th>
            {props.selectRaid.Bosses.map(boss => {
              return (
                <th
                  style={{
                    width: CalColumnWidth(props.selectRaid.Bosses.length)
                  }}
                  key={boss.ID}
                >
                  {boss.Alias}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <PlayersList />
        </tbody>
      </table>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectRaid: state.selectRaid
  };
};

export default connect(mapStateToProps)(SetupDetails);
