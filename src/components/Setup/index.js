import React, { Component } from "react";
import { connect } from "react-redux";
import RaidsList from "./RaidsList";
import SetupDetails from "./SetupDetails";
import { Switch, Route } from "react-router-dom";

import firebase from "../../config";

class Setup extends Component {
  constructor() {
    super();

    this.database = firebase
      .database()
      .ref()
      .child("raids");

    this.state = {
      raids: []
    };
  }

  componentDidMount() {
    this.database.on("value", snapshot => {
      this.setState({
        raids: snapshot.val()
      });
    });
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
                <RaidsList raids={this.state.raids} />
              </div>
              <div className="card-body">
                <Switch>
                  <Route path="/setup/:string" component={SetupDetails} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Setup);
