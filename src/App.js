import React from "react";
import variables from "./_App.scss";
import { PowerButton } from "./PowerButton";
import DrumPadSet from "./DrumPadSet";
import { Display } from "./Display";

const offStyles = {
  color: variables.darkMain,
};

const onStyles = {
  color: variables.lightMain,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: "",
      style: onStyles,
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handlePowerClick = this.handlePowerClick.bind(this);
  }
  updateDisplay(clipname) {
    this.setState({
      display: clipname,
    });
  }
  handlePowerClick(event) {
    if (this.state.power === true) {
      this.setState({ power: false, display: "", style: offStyles });
    } else {
      this.setState({ power: true, style: onStyles });
    }
  }
  render() {
    return (
      <div className="app" id="drum-machine" style={this.state.style}>
        <header className="app-header">
          <h2> Drum Machine</h2>
        </header>
        <div className="app-display">
          <Display clipname={this.state.display} power={this.state.power} />
        </div>
        <div id="drum-pad" className="drum-pad-set">
          <DrumPadSet
            updateDisplay={this.updateDisplay}
            power={this.state.power}
          />
        </div>
        <PowerButton power={this.state.power} onClick={this.handlePowerClick} />
      </div>
    );
  }
}

export default App;
