import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="m-t-3">
        {this.props.children}
      </div>
    );
  }
}