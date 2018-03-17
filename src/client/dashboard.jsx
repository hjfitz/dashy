import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { Sys, News } from './partial';


const initialState = {
  news: {},
  status: {},
  system: {},
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.socket = openSocket(window.location.origin);
    this.socket.on('dash', payload => {
      console.log(payload);
      this.setState(Object.assign(payload, { loaded: true }));
    });
  }

  componentDidMount() {
    this.socket.emit('dash');
  }

  render() {
    if (!this.state.loaded) {
      return <h1>Loading</h1>;
    }
    const { system, news } = this.state;
    // const systemStatus = parseSys(this.state.system);
    return [
      <Sys key="sys" mem={system.mem} disk={system.disk} />,
      <News key="news" sources={news} />,
    ];
  }
}
