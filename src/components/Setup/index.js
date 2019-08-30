import React from "react";
import RaidsList from "./RaidsList";
import SetupDetails from "./SetupDetails";
import { Switch, Route } from "react-router-dom";

const Setup = () => {
  return (
    <React.Fragment>
      <h3 className="mb-4">Setup</h3>
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
};

export default Setup;
