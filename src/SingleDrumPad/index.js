import React from "react";
import variables from "../_App.scss";

const pressStyles = {
  backgroundColor: variables.warning
};

const defaultStyles = {
  backgroundColor: variables.darkMain
};

export default class SingleDrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: defaultStyles
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.styleChange = this.styleChange.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(event) {
    if (event.keyCode === this.props.keyNumber) {
      this.playSound();
    }
  }
  styleChange() {
    this.state.style === defaultStyles
      ? this.setState({ style: pressStyles })
      : this.setState({ style: defaultStyles });
  }
  playSound(event) {
    if (this.props.power === true) {
      const sound = document.getElementById(this.props.keyLetter);
      sound.play();
      this.props.updateDisplay(this.props.clipname);
      this.styleChange();
      setTimeout(() => this.styleChange(), 100);
    } else {
      this.props.updateDisplay("Turn Me On");
      setTimeout(() => this.props.updateDisplay(""), 500);
    }
  }
  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.clipname}
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
  }
}
