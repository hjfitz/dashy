import React from 'react';

export default ({ status }) => {
  const { status: curStatus, statusMessage } = status;
  return (
    <section className="status slack col col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Slack</h2>
          <h5> <span className="status-prefix">Current Status:</span> {curStatus}</h5>
          <h5> <span className="status-prefix">Status Message:</span> {statusMessage}</h5>
        </div>
      </div>
    </section>
  );
};

