import React, { Component } from "react";
import { connect } from "react-redux";
import { getCompletePlayersAction } from "../../actions";
import DB_PLAYERS from "../../assets/players";
import DB_ROLES from "../../assets/roles";
import DB_CLASSES from "../../assets/classes";
import { playersBySuperSort } from "../../utils";

class SetupDetails extends Component {
  componentDidMount() {
    this.props.getCompletePlayersAction(DB_PLAYERS, DB_ROLES, DB_CLASSES);
  }

  render() {
    return (
      <React.Fragment>
        <h4 className="card-title">{this.props.selectRaid.Name}</h4>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Players</th>
              {this.props.selectRaid.Bosses.map(boss => {
                return <th key={boss.ID}>{boss.ID}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {console.log(this.props.getAll)}
            {/* {this.props.getCompletePlayers.players.map(player => {
              return (
                <tr>
                  <td key={player.Name}>{player.Name}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectRaid: state.selectRaid,
    getAll: state.getCompletePlayers
  };
};

export default connect(
  mapStateToProps,
  { getCompletePlayersAction }
)(SetupDetails);
