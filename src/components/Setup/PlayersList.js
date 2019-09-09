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
  constructor() {
    super();

    this.rootRef = firebase.database().ref();
    this.dbPlayers = this.rootRef.child("players");
    this.dbClasses = this.rootRef.child("classes");
    this.dbRoles = this.rootRef.child("roles");

    this.state = {
      players: [],
      classes: [],
      roles: []
    };
  }

  setDbStates(dbRef, stateObj) {
    dbRef.on("value", snap => {
      this.setState({
        stateObj: snap.val()
      });
    });
  }

  componentDidMount() {
    this.setDbStates(this.dbPlayers, "players");

    // this.dbPlayers.on("value", snapPlayers => {
    //   this.setState({
    //     players: snapPlayers.val()
    //   });
    // });
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
