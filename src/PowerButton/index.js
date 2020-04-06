import React from "react";

export const PowerButton = (props) => {
  if (props.power === true) {
    const OFF = "OFF";
    return (
      <div id="power-button" onClick={props.onClick} className="power-button">
        {OFF}
      </div>
    );
  } else {
    const ON = "ON";
    return (
      <div id="power-button" onClick={props.onClick} className="power-button">
        {ON}
      </div>
    );
  }
};
