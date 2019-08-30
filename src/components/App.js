import React, { Component } from "react";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
          <div className="container-fluid mt-5">
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
