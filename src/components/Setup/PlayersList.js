import React, { Component } from "react";
import { connect } from "react-redux";
import { ChangePlayerState, ChangeWholePlayerState } from "./../../utils";

class PlayersList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.allPlayers.map(player => {
          return (
            <tr>
              <td key={player.Name}>
                <span
                  className="badge badge-setup"
                  style={{ backgroundColor: player.Class.HexColor }}
                  onClick={e => ChangeWholePlayerState(e)}
                >
                  {player.Name}
                </span>
              </td>
              {this.props.selectRaid.Bosses.map(status => {
                return (
                  <td>
                    <span
                      className="badge badge-setup badge-success"
                      onClick={e => ChangePlayerState(e)}
                    ></span>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allPlayers: state.getAllPlayers,
    selectRaid: state.selectRaid
  };
};

export default connect(mapStateToProps)(PlayersList);
