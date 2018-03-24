import React from 'react';

export default ({ status }) => {
  const { time: updated, status: curStatus } = status;
  return (
    <section className="status github col col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Github</h2>
          <h5><span className="status-prefix">Current Status:</span> {curStatus}</h5>
          <h5><span className="status-prefix">Last Updated:</span> {updated}</h5>
        </div>
      </div>
    </section>
  );
};
