import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "../../config";
import { Loading } from "../../utils";

import {
  getPlayersAction,
  getClassesAction,
  getRolesAction
} from "../../actions";
import Player from "./Player";

class PlayersList extends Component {
  constructor(props) {
    super(props);

    this.rootRef = firebase.database();
    this.dbPlayers = this.rootRef.ref("players");
    this.dbClasses = this.rootRef.ref("classes");
    this.dbRoles = this.rootRef.ref("roles");

    this.state = {
      playersIsLoaded: false,
      classesIsLoaded: false,
      rolesIsLoaded: false
    };
  }

  componentDidMount() {
    this.props.getPlayersAction(this.dbPlayers).then(() => {
      this.setState({ playersIsLoaded: true });
    });
    this.props.getClassesAction(this.dbClasses).then(() => {
      this.setState({ classesIsLoaded: true });
    });
    this.props.getRolesAction(this.dbRoles).then(() => {
      this.setState({ rolesIsLoaded: true });
    });
  }

  componentWillUnmount() {
    this.dbPlayers.off();
    this.dbClasses.off();
    this.dbRoles.off();
  }

  render() {
    if (
      this.state.playersIsLoaded &&
      this.state.classesIsLoaded &&
      this.state.rolesIsLoaded
    ) {
      return (
        <React.Fragment>
          <div className="player-list">
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
      return <div className="d-flex justify-content-center">{Loading()}</div>;
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
