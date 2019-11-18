import React from "react";

const About = props => {
  return (
    <React.Fragment>
      <div className="page-header">
        <h2 itemProp="headline">About Us</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h5>Declarative</h5>
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
          </p>
          <p>
            Declarative views make your code more predictable and easier to
            debug.
          </p>
        </div>
        <div className="col-md-4">
          <h5>Component-Based</h5>
          <p>
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs.
          </p>
          <p>
            Since component logic is written in JavaScript instead of templates,
            you can easily pass rich data through your app and keep state out of
            the DOM.
          </p>
        </div>
        <div className="col-md-4">
          <h5>Learn Once, Write Anywhere</h5>
          <p>
            We don’t make assumptions about the rest of your technology stack,
            so you can develop new features in React without rewriting existing
            code.
          </p>
          <p>
            React can also render on the server using Node and power mobile apps
            using React Native.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
