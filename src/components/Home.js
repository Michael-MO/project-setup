import React from "react";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 font-weight-bold">
        JSON<span className="d-inline d-sm-none">-</span>Place
        <span className="d-sm-inline d-md-none">-</span>holder
      </h1>
      <p className="lead">
        This Web App utilizes React, React-Redux, Redux, Redux-thunk & Axios
      </p>
      <hr className="my-4" />
      <p>
        This mandatory project, uses '
        <a
          href="https://jsonplaceholder.typicode.com/"
          className="text-break"
          target="blank"
        >
          https://jsonplaceholder.typicode.com/
        </a>
        's api for fetching Users, Posts and Comments information.
      </p>
    </div>
  );
};

export default Home;
