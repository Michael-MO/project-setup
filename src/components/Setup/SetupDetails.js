import React from "react";
import { connect } from "react-redux";
import PlayersList from "./PlayersList";
import BossList from "./BossList";

const SetupDetails = props => {
  return (
    <React.Fragment>
      <table className="table table-sm table-borderless">
        <thead>
          <BossList bosses={props.selectRaid.Bosses} />
        </thead>
        <tbody>
          <PlayersList />
        </tbody>
      </table>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectRaid: state.selectRaid
  };
};

export default connect(mapStateToProps)(SetupDetails);
