import React, { Component } from "react";
import { connect } from "react-redux";
import RaidsList from "./RaidsList";
import PlayersList from "./PlayersList";
import SetupDetails from "./SetupDetails";
import { Switch, Route } from "react-router-dom";

import { dbConnection, getRaidsAction } from "../../actions";

class Setup extends Component {
  constructor(props) {
    super(props);
    this.db = dbConnection();
  }

  componentDidMount() {
    this.props.getRaidsAction();
  }

  componentWillUnmount() {
    this.db.raids().off();
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
                  <div className="col-auto">
                    <PlayersList />
                  </div>
                  <div className="col">
                    <Switch>
                      <Route path="/setup/:string" component={SetupDetails} />
                    </Switch>
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
