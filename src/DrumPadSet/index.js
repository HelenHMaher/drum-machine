import React from "react";
import SingleDrumPad from "../SingleDrumPad";

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

export default class DrumPadSet extends React.Component {
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
