import React, { Component } from "react";
import { connect } from "react-redux";
import RaidsList from "./RaidsList";
import SetupDetails from "./SetupDetails";
import { Switch, Route } from "react-router-dom";
import { getAllPlayersAction } from "./../../actions";

class Setup extends Component {
  componentDidMount() {
    this.props.getAllPlayersAction();
  }

  render() {
    return (
      <React.Fragment>
        <div class="page-header">
          <h2 itemprop="headline">Setup</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <RaidsList />
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

export default connect(
  mapStateToProps,
  { getAllPlayersAction }
)(Setup);
