import React from 'react';

export default ({ status }) => {
  if ('issues' in status.status) {
    console.warn('issue on heroku');
  }
  const { Production, Development } = status.status;
  return (
    <section className="status heroku col col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Heroku</h2>
          <h5><span className="status-prefix">Production:</span> {Production}</h5>
          <h5><span className="status-prefix">Development:</span> {Development}</h5>
        </div>
      </div>
    </section>
  );
};

