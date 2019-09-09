import React from "react";
import { connect } from "react-redux";
import BossList from "./BossList";
import { ChangePlayerState } from "../../utils";

const SetupDetails = props => {
  if (props.Raid) {
    return (
      <React.Fragment>
        <thead>
          <BossList bosses={props.Raid.Bosses} />
        </thead>
        <tbody>
          {props.Players.map(player => {
            return (
              <tr>
                {props.Raid.Bosses.map(boss => {
                  return (
                    <td>
                      <span
                        className="badge badge-setup badge-success"
                        onDoubleClick={e => ChangePlayerState(e)}
                      ></span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <thead>
          <tr>
            <th>
              <h2>Select a raid</h2>
            </th>
          </tr>
        </thead>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => {
  return {
    Raid: state.selectRaid,
    Players: state.getPlayers
  };
};

export default connect(mapStateToProps)(SetupDetails);
