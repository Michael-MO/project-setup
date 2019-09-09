import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { selectRaidAction } from "../../actions";
import { convertToURL, raidsByDesc } from "../../utils";

const RaidsList = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          {raidsByDesc(props.raids).map(raid => {
            return (
              <li className="nav-item" key={raid.Name}>
                <NavLink
                  className="nav-link"
                  to={"/setup/" + convertToURL(raid.Name)}
                  role="tab"
                  key={raid.Name}
                  onClick={() => props.selectRaidAction(raid)}
                >
                  {raid.Name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { selectRaidAction }
)(RaidsList);
