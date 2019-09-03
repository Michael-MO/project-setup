import React, { Component } from "react";
import Firebase from "firebase";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raids: []
    };
  }

  componentDidMount() {
    const rootRef = Firebase.database().ref("/");
    const raidsRef = rootRef.child("raids");
    raidsRef.on("value", snapshot => {
      this.setState(snapshot.val());
    });
  }

  render() {
    const { Raids } = this.state.raids;
    return (
      <React.Fragment>
        <p>{Raids}</p>
      </React.Fragment>
    );
  }
}

export default Home;
