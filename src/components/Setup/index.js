import React, { Component } from "react";
import { connect } from "react-redux";
import RaidsList from "./RaidsList";
import PlayersList from "./PlayersList";
import SetupDetails from "./SetupDetails";
import { Switch, Route } from "react-router-dom";

import firebase from "../../config";
import { getRaidsAction } from "../../actions";

class Setup extends Component {
  constructor() {
    super();

    this.rootRef = firebase.database();
    this.dbRaids = this.rootRef.ref("raids");
  }

  componentDidMount() {
    this.props.getRaidsAction(this.dbRaids);
  }

  componentWillUnmount() {
    this.dbRaids.off();
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-header">
          <h2 itemProp="headline">Setup</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <RaidsList raids={this.props.Raids} />
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <div className="simulate-header">Players</div>
                    <PlayersList />
                  </div>
                  <div className="col-10">
                    <table className="table table-sm table-borderless">
                      <Switch>
                        <Route path="/setup/:string" component={SetupDetails} />
                      </Switch>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    Raids: state.getRaids
  };
};

export default connect(
  mapStateToProps,
  { getRaidsAction }
)(Setup);
