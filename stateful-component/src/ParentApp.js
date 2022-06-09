import React, { Component } from 'react';
import App from './App';

class ParentApp extends Component {
  state = {
    render: true,
  };

  render() {
    return <div>{this.state.render ? <App /> : <div>앱 언마운트</div>}</div>;
  }
}

export default ParentApp;
