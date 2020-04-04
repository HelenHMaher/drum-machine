import React, { useState } from "react";
import PropTypes from "prop-types";
import variables from "../_App.scss";

const pressStyles = {
  backgroundColor: variables.warning
};

const defaultStyles = {
  backgroundColor: variables.darkMain
};

/**
 * TODO: Remove when understood/practiced
 * Example of descructuring, relevant for descructuring props
 */
const myProps = { someFunc: "sting", power: true };
const { power } = myProps;
console.log("power is:", power);

/**
 * New Refactoring of SingleDrumPad using hooks.
 *
 * You can use different syntax to write 'function components' not to be
 * confused with 'stateless functional components' as they can now contain
 * state. Below I am using arrow functions as I think its what you may be most
 * familiar with.
 *
 * One drawback is that you cannot default export it, you first need to export
 * the constant function SingleDrumPad and then default export it as the bottom
 * of the file.
 *
 * TODO: Read and understand this page and the next pages until 'Rules of Hooks'
 * * https://reactjs.org/docs/hooks-overview.html
 */
export const SingleDrumPad = props => {
  const [style, setStyle] = useState(defaultStyles);

  // destucturing props
  const { keyLetter, keyNumber, url, clipname, updateDisplay, power } = props;

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
    style === defaultStyles ? setStyle(pressStyles) : setStyle(defaultStyles);
  };
  //   styleChange() {
  //     this.state.style === defaultStyles
  //       ? this.setState({ style: pressStyles })
  //       : this.setState({ style: defaultStyles });
  //   }

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

  /**
   * TODO: refactor this function as well
   */
  //   handleKeyPress(event) {
  //     if (event.keyCode === this.props.keyNumber) {
  //       this.playSound();
  //     }
  //   }

  /**
   * TODO: refactor to no longer use 'props.something'
   * TODO: recator to no longer use 'this.something'
   * TODO: refactor to no longer use 'this.state.something'
   * TODO: understand why
   */
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

/**
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
  power: PropTypes.bool.isRequired
};
