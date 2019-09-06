import React, { Component } from "react";
import { connect } from "react-redux";
// import {
//   ChangePlayerState
//   ChangeWholePlayerState,
//   CreateArrow
// } from "./../../utils";

import firebase from "../../config";
import Player from "./Player";

class PlayersList extends Component {
  constructor(props) {
    super(props);

    this.dbPlayers = firebase
      .database()
      .ref()
      .child("players");

    this.dbClasses = firebase
      .database()
      .ref()
      .child("classes");

    this.dbRoles = firebase
      .database()
      .ref()
      .child("roles");

    this.state = {
      players: [],
      classes: [],
      roles: []
    };
  }

  componentDidMount() {
    this.dbPlayers.on("value", snapPlayers => {
      this.setState({
        players: snapPlayers.val()
      });
    });

    this.dbClasses.on("value", snapClasses => {
      this.setState({
        classes: snapClasses.val()
      });
    });

    this.dbRoles.on("value", snapRoles => {
      this.setState({
        roles: snapRoles.val()
      });
    });
  }

  componentWillUnmount() {
    this.dbPlayers.off();
    this.dbClasses.off();
    this.dbRoles.off();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.players.map(player => {
          return <Player key={player.ID} item={player} />;
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectRaid: state.selectRaid
  };
};

export default connect(mapStateToProps)(PlayersList);
