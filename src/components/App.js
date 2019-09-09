import React, { Component } from "react";
import Navigation from "./Layout/Navigation";
import Breadcrumbs from "./Layout/Breadcrumbs";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../assets/sass/styles.scss";

// Import Core Components
import Home from "./Home";
import About from "./About";
import Setup from "./Setup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="container-fluid mt-3">
            <Breadcrumbs page={"Test"} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/setup" component={Setup} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
