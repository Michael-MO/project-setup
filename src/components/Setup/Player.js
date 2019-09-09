import React from "react";

const Player = props => {
  return (
    <div className="player-block" key={props.player.ID}>
      <span
        className="badge badge-setup"
        style={{ backgroundColor: props.xClass.HexColor }}
        // onClick={e => ChangeWholePlayerState(e)}
      >
        {props.player.Name}
      </span>
    </div>
  );
};

export default Player;
