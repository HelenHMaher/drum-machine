import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import variables from "../_App.scss";

const pressStyles = {
  backgroundColor: variables.warning,
};

const defaultStyles = {
  backgroundColor: variables.darkMain,
};

export const SingleDrumPad = (props) => {
  const [styleToggle, setStyleToggle] = useState(true);

  const [style, setStyle] = useState(defaultStyles);

  const { keyLetter, keyNumber, url, clipname, updateDisplay, power } = props;

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return document.removeEventListener("keydown", handleKeyPress);
  });
  /**
   * TODO: refactor to use react hooks
   * This will be your biggest challenge and require you to read and understand the
   * above react hooks way of dealing with lifeCycleMethods
   */
  //   componentDidMount() {
  //     document.addEventListener("keydown", this.handleKeyPress);
  //   }
  //   componentWillUnmount() {
  //     document.removeEventListener("keydown", this.handleKeyPress);
  //   }

  /**
   * Example of how we define functions in function components.
   * Notice how we dont need to bind it anywhere :)
   *
   * We could have also written this as:
   * function styleChange() {}
   *
   * but I think you prefer arrow functions.
   */
  const styleChange = () => {
    console.log("style is: ", style);
    style === defaultStyles ? setStyle(pressStyles) : setStyle(defaultStyles);
  };

  const playSound = (e) => {
    if (power === true) {
      const sound = document.getElementById(keyLetter);
      sound.play();
      updateDisplay(clipname);
      setStyleToggle(!styleToggle);
      setTimeout(() => setStyleToggle(!styleToggle));
      // setTimeout(() => {
      //   console.log("and now here");
      //   styleChange();
      // }, 2000);
    } else {
      updateDisplay("Turn Me On");
      setTimeout(() => updateDisplay(""), 500);
    }
  };

  /**
   * TODO: try refactoring this similar to the above styleChange function
   * remember you no longer need to use 'this' nor 'props.something'
   * but 'something' directly as we have destructured it from props
   */
  //   playSound(event) {
  //     if (this.props.power === true) {
  //       const sound = document.getElementById(this.props.keyLetter);
  //       sound.play();
  //       this.props.updateDisplay(this.props.clipname);
  //       this.styleChange();
  //       setTimeout(() => this.styleChange(), 100);
  //     } else {
  //       this.props.updateDisplay("Turn Me On");
  //       setTimeout(() => this.props.updateDisplay(""), 500);
  //     }
  //   }
  // }
  function handleKeyPress(e) {
    if (e.keyCode === keyNumber) {
      playSound();
    }
  }
  /**
   * TODO: refactor this function as well
   */
  //   handleKeyPress(event) {
  //     if (event.keyCode === this.props.keyNumber) {
  //       this.playSound();
  //     }
  //   }
  return (
    <div
      className="drum-pad"
      id={clipname}
      onClick={playSound}
      style={styleToggle ? defaultStyles : pressStyles}
    >
      {keyLetter}
      <audio src={url} id={keyLetter} className="clip"></audio>
    </div>
  );
};
/**
   * TODO: refactor to no longer use 'props.something'
   * TODO: recator to no longer use 'this.something'
   * TODO: refactor to no longer use 'this.state.something'
   * TODO: understand why

  return (
    <div
      className="drum-pad"
      id={props.clipname}
      onClick={this.playSound}
      style={this.state.style}
    >
      {this.props.keyLetter}
      <audio
        src={this.props.url}
        id={this.props.keyLetter}
        className="clip"
      ></audio>
    </div>
  );
};
 * Here you can see what I mean by having to export SingleDrumPad as a default
 * on a different line
 */
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
