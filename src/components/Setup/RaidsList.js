import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { selectRaidsAction } from "../../actions";
import DB_RAIDS from "../../assets/raids";
import { convertToURL, raidsByDesc } from "../../utils";

const RaidsList = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          {raidsByDesc(DB_RAIDS).map(raid => {
            return (
              <li className="nav-item" key={raid.Name}>
                <NavLink
                  className="nav-link"
                  to={"/setup/" + convertToURL(raid.Name)}
                  role="tab"
                  key={raid.Name}
                  onClick={() => props.selectRaidsAction(raid)}
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
  { selectRaidsAction }
)(RaidsList);
