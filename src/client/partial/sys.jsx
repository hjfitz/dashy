import React from 'react';

export default props => (
  <div className="sysinfo">
    <div className="sysinfo-mem">
      <span className="sysinfo-title memory">Memory:</span>
      <span className="sysinfo-info free">Free: {props.mem.free}</span>
      <span className="sysinfo-info available">Available: {props.mem.available}</span>
      <span className="sysinfo-info total">Total: {props.mem.total}</span>

    </div>
    <div className="sysinfo-disk">
      <span className="sysinfo-title storage">Storage:</span>
      <div className="root">
        <span className="sysinfo-title root">/</span>
        <span className="sysinfo-info free">Free: {props.disk.root.free}</span>
        <span className="sysinfo-info available">Available: {props.disk.root.available}</span>
        <span className="sysinfo-info total">Total: {props.disk.root.total}</span>
      </div>
      <div className="home">
        <span className="sysinfo-title home">/</span>
        <span className="sysinfo-info free">Free: {props.disk.home.free}</span>
        <span className="sysinfo-info available">Available: {props.disk.home.available}</span>
        <span className="sysinfo-info total">Total: {props.disk.home.total}</span>
      </div>
    </div>
  </div>

);
