import React from "react";
import "./App.css";

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

const Display = props => {
  return <div id="display">{props.clipname}</div>;
};

class SingleDrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
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
  playSound(event) {
    const sound = document.getElementById(this.props.keyLetter);
    sound.play();
    this.props.updateDisplay(this.props.clipname);
  }
  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.clipname}
        onClick={this.playSound}
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
      display: ""
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay(clipname) {
    this.setState({
      display: clipname
    });
  }
  render() {
    return (
      <div id="drum-machine">
        <header className="App-header">
          <div> This is my drum machine!!!</div>
        </header>
        <Display clipname={this.state.display} />
        <div id="drum-pad">
          <DrumPadSet updateDisplay={this.updateDisplay} />
        </div>
      </div>
    );
  }
}

export default App;
