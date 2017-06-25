import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import { getPins, changePin } from './Util/Socket.js';

import Header from './Containers/Header';
import Button from './Components/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [],
      err: {}
    }

    this._changeLED = this._changeLED.bind(this);
  }

  componentDidMount() {
    getPins()
      .then((pins) => {
        this.setState({
          pins
        });
      });
  }

  _changeLED(pin) {
    changePin(pin);
  }

  render() {
    const buttons = this.state.pins.length > 0 ? this.state.pins.map((pin) => {
      return <Button key={pin.number} text={pin.number} handler={this._changeLED} pin={pin.number} status={pin.state} />
    }) : null;

    return (
      <div>
        <Header />
        { buttons }
      </div>
    )
  }
}

export default App;