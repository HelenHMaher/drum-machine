import React, { useEffect } from "react";
import PropTypes from "prop-types";

export const SingleDrumPad = (props) => {
  const { keyLetter, keyNumber, url, clipname, updateDisplay, power } = props;

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return document.removeEventListener("keydown", handleKeyPress);
  });
  const playSound = (e) => {
    if (power === true) {
      const sound = document.getElementById(keyLetter);
      sound.play();
      updateDisplay(clipname);
    } else {
      updateDisplay("Turn Me On");
      setTimeout(() => updateDisplay(""), 500);
    }
  };
  function handleKeyPress(e) {
    if (e.keyCode === keyNumber) {
      playSound();
    }
  }
  return (
    <div className="drum-pad" id={clipname} onClick={playSound}>
      {keyLetter}
      <audio src={url} id={keyLetter} className="clip"></audio>
    </div>
  );
};

export default SingleDrumPad;

/**
 * PropTypes are used to create warnings in the developer console of chrome if
 * we do not pass them properly to the component requiring them
 *
 * They also act as information to a engineer which props are required and act
 * as documentation when coding.
 */
SingleDrumPad.propTypes = {
  keyLetter: PropTypes.string.isRequired,
  keyNumber: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  clipname: PropTypes.string.isRequired,
  updateDisplay: PropTypes.func.isRequired,
  power: PropTypes.bool.isRequired,
};
