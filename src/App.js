import React from "react";
import variables from "./_App.scss";

const keyArr = [
  {
    keyNumber: 81,
    keyLetter: "Q",
    id: "bell-tower",
    url:
      "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Bells/859[kb]bell-tower.wav.mp3"
  },
  {
    keyNumber: 87,
    keyLetter: "W",
    id: "bell-tree",
    url:
      "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Bells/353[kb]belltree.aif.mp3"
  },
  {
    keyNumber: 69,
    keyLetter: "E",
    id: "buizen-bell-E",
    url:
      "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Bells/793[kb]buizen-bell-E.aif.mp3"
  },
  {
    keyNumber: 65,
    keyLetter: "A",
    id: "cheesy-chimes",
    url:
      "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Bells/89[kb]cheesy-chimes.wav.mp3"
  },
  {
    keyNumber: 83,
    keyLetter: "S",
    id: "deep-dissonant-bell",
    url:
      "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Bells/797[kb]deep_dissonant_bell.aif.mp3"
  },
  {
    keyNumber: 68,
    keyLetter: "D",
    id: "hand-bells",
    url:
      "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Bells/806[kb]hand_bells.aif.mp3"
  },
  {
    keyNumber: 90,
    keyLetter: "Z",
    id: "harmonic-bell",
    url:
      "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Bells/1079[kb]harmonic-bell-fx.wav.mp3"
  },
  {
    keyNumber: 88,
    keyLetter: "X",
    id: "one-pretty-bell",
    url:
      "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Bells/1128[kb]one-pretty-bell.wav.mp3"
  },
  {
    keyNumber: 67,
    keyLetter: "C",
    id: "one-round-bellhit",
    url:
      "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Bells/782[kb]one-round-bellhit.wav.mp3"
  }
];

const pressStyles = {
  backgroundColor: variables.warning
};

const defaultStyles = {
  backgroundColor: variables.darkMain
};

const offStyles = {
  color: variables.darkAccent
};

const onStyles = {
  color: variables.lightMain
};

const Display = props => {
  return <div id="display">{props.clipname}</div>;
};

const PowerButton = props => {
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

class SingleDrumPad extends React.Component {
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
        <audio
          src={this.props.url}
          id={this.props.keyLetter}
          className="clip"
        ></audio>
        {this.props.keyLetter}
      </div>
    );
  }
}

class DrumPadSet extends React.Component {
  render() {
    const drumPadSet = keyArr.map((object, i) => {
      return (
        <SingleDrumPad
          keyLetter={keyArr[i].keyLetter}
          keyNumber={keyArr[i].keyNumber}
          url={keyArr[i].url}
          clipname={keyArr[i].id}
          updateDisplay={this.props.updateDisplay}
          power={this.props.power}
        />
      );
    });
    return drumPadSet;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: "",
      style: onStyles
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handlePowerClick = this.handlePowerClick.bind(this);
  }
  updateDisplay(clipname) {
    this.setState({
      display: clipname
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
      <div className="App" id="drum-machine" style={this.state.style}>
        <header className="App-header">
          <div> This is my drum machine!!!</div>
        </header>
        <Display clipname={this.state.display} power={this.state.power} />
        <div id="drum-pad">
          <DrumPadSet
            updateDisplay={this.updateDisplay}
            power={this.state.power}
          />
          <PowerButton
            power={this.state.power}
            onClick={this.handlePowerClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
