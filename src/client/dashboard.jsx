import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import { Sys, News, Status } from './partial';


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
    if (!this.state.loaded) return <h1>Loading</h1>;

    const { system, news, status } = this.state;
    return (
      <main className="dashy">
        <Sys mem={system.mem} disk={system.disk} />
        <Status sources={status} />
        <News sources={news} />
      </main>
    );
  }
}
