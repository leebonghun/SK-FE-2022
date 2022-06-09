import './app.css';
import { Component } from 'react';
import { RandomCountUp } from '../components';

export class App extends Component {
  state = {
    reloadKey: 0,
  };

  handleChangeReloadKey = (e) => {
    this.setState({
      reloadKey: this.state.reloadKey + 1,
    });
  };

  render() {
    return (
      <div className="app">
        <button
          type="button"
          className="reloadButton"
          onClick={this.handleChangeReloadKey}
        >
          relaod
        </button>
        <RandomCountUp key={this.state.reloadKey} min={40} max={80} />
      </div>
    );
  }
}
