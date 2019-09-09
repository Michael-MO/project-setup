import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = props => {
  return (
    <React.Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/home">Wiping as Intended - Setup</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {props.page}
          </li>
        </ol>
      </nav>
    </React.Fragment>
  );
};

export default Breadcrumbs;
