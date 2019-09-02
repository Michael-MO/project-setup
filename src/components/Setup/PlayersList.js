import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ChangePlayerState,
  ChangeWholePlayerState,
  CreateArrow
} from "./../../utils";

class PlayersList extends Component {
  ArrowIn(event) {
    let element = event.currentTarget;
    element.appendChild(CreateArrow());
  }

  ArrowOut(event) {
    let element = event.currentTarget;
    element.removeChild(document.getElementById("PlayerIdentifierArrow"));
  }

  render() {
    return (
      <React.Fragment>
        {this.props.allPlayers.map(player => {
          return (
            <tr
              onMouseOver={e => this.ArrowIn(e)}
              onMouseOut={e => this.ArrowOut(e)}
            >
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
                      onDoubleClick={e => ChangePlayerState(e)}
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
