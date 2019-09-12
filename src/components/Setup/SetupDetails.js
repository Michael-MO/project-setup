import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import BossList from "./BossList";
import { ChangePlayerState } from "../../utils";

class SetupDetails extends Component {
  render() {
    if (this.props.Raid) {
      return (
        <React.Fragment>
          <table id="table-setup" className="table table-sm table-borderless">
            <thead>
              <BossList bosses={this.props.Raid.Bosses} />
            </thead>
            <tbody>
              {this.props.Players.map(player => {
                return (
                  <tr>
                    {this.props.Raid.Bosses.map(boss => {
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
          </table>
        </React.Fragment>
      );
    } else {
      return <Redirect to="/setup" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    Raid: state.selectRaid,
    Players: state.getPlayers
  };
};

export default connect(mapStateToProps)(SetupDetails);
