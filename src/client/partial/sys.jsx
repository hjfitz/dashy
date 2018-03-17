import React from 'react';


export default props => (
  <div className="sysinfo">
    <div className="sysinfo-mem">
      <span className="sysinfo-title memory">Memory</span>
      <span className="sysinfo-info free">
        <span className="sysinfo-prefix free">Free:</span>
        {props.mem.free}
      </span>
      <span className="sysinfo-info used">
        <span className="sysinfo-prefix avail">Used:</span>
        {props.mem.used}
      </span>
      <span className="sysinfo-info total">
        <span className="sysinfo-prefix total">Total:</span>
        {props.mem.total}
      </span>

    </div>
    <div className="sysinfo-disk">
      <span className="sysinfo-title storage">Storage</span>
      <div className="root">
        <span className="sysinfo-title root">/</span>
        <span className="sysinfo-info free">
          <span className="sysinfo-prefix free">Free:</span>
          {props.disk.root.free}
        </span>
        <span className="sysinfo-info used">
          <span className="sysinfo-prefix avail">Used:</span>
          {props.disk.root.used}
        </span>
        <span className="sysinfo-info total">
          <span className="sysinfo-prefix total">Total:</span>
          {props.disk.root.total}
        </span>
      </div>
      <div className="home">
        <span className="sysinfo-title home">/home</span>
        <span className="sysinfo-info free">
          <span className="sysinfo-prefix free">Free:</span>
          {props.disk.home.free}
        </span>
        <span className="sysinfo-info used">
          <span className="sysinfo-prefix avail">Used:</span>
          {props.disk.home.used}
        </span>
        <span className="sysinfo-info total">
          <span className="sysinfo-prefix total">Total:</span>
          {props.disk.home.total}
        </span>
      </div>
    </div>
  </div>

);
