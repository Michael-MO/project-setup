import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Loading } from "../../utils";

import { dbConnection, getSetupsAction } from "../../actions";

import BossList from "./BossList";
import { ChangePlayerState, SetInitPlayerState } from "../../utils";

class SetupDetails extends Component {
  constructor(props) {
    super(props);
    this.db = dbConnection();

    this.state = {
      setupsIsLoaded: false
    };
  }

  fireSetupsPromise() {
    this.props.getSetupsAction(this.props.Raid).then(() => {
      this.setState({ setupsIsLoaded: true });
    });
  }

  componentDidMount() {
    this.fireSetupsPromise();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.Raid !== this.props.Raid) {
      this.setState({ setupsIsLoaded: false });
      this.fireSetupsPromise();
    }
  }

  componentWillUnmount() {
    this.db.setups().off();
  }

  render() {
    if (this.props.Raid) {
      if (this.state.setupsIsLoaded) {
        return (
          <React.Fragment>
            <table id="table-setup" className="table table-sm table-borderless">
              <thead>
                <BossList bosses={this.props.Raid.Bosses} />
              </thead>
              <tbody>
                {this.props.Players.map(player => {
                  return (
                    <tr>
                      {this.props.Setup.filter(x => x.Player === player.ID).map(
                        setup => {
                          return (
                            <td>
                              <span
                                key={setup.Key}
                                className="badge badge-setup {initState}"
                                onLoad={e => SetInitPlayerState(setup, e)}
                                onDoubleClick={e => ChangePlayerState(setup, e)}
                              ></span>
                            </td>
                          );
                        }
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </React.Fragment>
        );
      } else {
        return (
          <div className="d-flex justify-content-center pt-5">{Loading()}</div>
        );
      }
    } else {
      return <Redirect to="/setup" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    Setup: state.getSetups,
    Raid: state.selectRaid,
    Players: state.getPlayers
  };
};

export default connect(
  mapStateToProps,
  { getSetupsAction }
)(SetupDetails);
