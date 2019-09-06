import React from "react";

const Player = props => {
  return (
    <tr
    // onMouseOver={e => this.ArrowIn(e)}
    // onMouseOut={e => this.ArrowOut(e)}
    >
      <td key={props.item.Name}>
        <span
          className="badge badge-setup"
          // style={{ backgroundColor: props.classObj.HexColor }}
          // onClick={e => ChangeWholePlayerState(e)}
        >
          {console.log("Player.js: Props-test:")}
          {/* {console.log(props.item)} */}
          {props.item.Name}
        </span>
      </td>

      {/* {selectRaid.Bosses.map(boss => {
        return (
          <td>
            <span
              className="badge badge-setup badge-success"
              // onDoubleClick={e => ChangePlayerState(e, boss, this)}
            ></span>
          </td>
        );
      })} */}
    </tr>
  );
};

export default Player;
