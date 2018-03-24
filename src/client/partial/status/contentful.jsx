import React from 'react';

export default ({ status }) => {
  const statusItems = Object.keys(status).map(item => (
    <h5 key={item}><span className="status-prefix">{item}:</span> {status[item]}</h5>
  ));
  return (
    <section className="status contentful col col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Contentful</h2>
          {statusItems}
        </div>
      </div>
    </section>
  );
};
