import React from "react";

export const PowerButton = props => {
  if (props.power === true) {
    return (
      <button id="power-button" onClick={props.onClick}>
        OFF
      </button>
    );
  } else {
    return (
      <button id="power-button" onClick={props.onClick}>
        ON
      </button>
    );
  }
};
