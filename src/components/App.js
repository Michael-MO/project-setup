import React, { Component } from "react";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Firebase from "firebase";
import config from "./../config";
import "./../assets/sass/styles.scss";

// Import Core Components
import Home from "./Home";
import About from "./About";
import Setup from "./Setup";

class App extends Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config.Firebase);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="container-fluid mt-3">
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
