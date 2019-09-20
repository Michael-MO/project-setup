import React, { Component } from "react";
import { connect } from "react-redux";
import { Loading } from "../../utils";

import {
  dbConnection,
  getPlayersAction,
  getClassesAction,
  getRolesAction
} from "../../actions";
import Player from "./Player";

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.db = dbConnection();

    this.state = {
      playersIsLoaded: false,
      classesIsLoaded: false,
      rolesIsLoaded: false
    };
  }

  componentDidMount() {
    this.props.getPlayersAction().then(() => {
      this.setState({ playersIsLoaded: true });
    });
    this.props.getClassesAction().then(() => {
      this.setState({ classesIsLoaded: true });
    });
    this.props.getRolesAction().then(() => {
      this.setState({ rolesIsLoaded: true });
    });
  }

  componentWillUnmount() {
    this.db.players().off();
    this.db.classes().off();
    this.db.roles().off();
  }

  render() {
    if (
      this.state.playersIsLoaded &&
      this.state.classesIsLoaded &&
      this.state.rolesIsLoaded
    ) {
      return (
        <React.Fragment>
          <div className="simulate-header">
            Players ({this.props.Players.length})
          </div>
          <div id="player-list">
            {this.props.Players.map(player => {
              return (
                <Player
                  key={player.ID}
                  player={player}
                  xClass={this.props.Classes.find(x => x.ID === player.ClassID)}
                  role={this.props.Roles.find(x => x.ID === player.RoleID)}
                />
              );
            })}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="d-flex justify-content-center p-3">{Loading()}</div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    Players: state.getPlayers,
    Classes: state.getClasses,
    Roles: state.getRoles
  };
};

export default connect(
  mapStateToProps,
  { getPlayersAction, getClassesAction, getRolesAction }
)(PlayersList);
