import React from 'react';

export default ({ status }) => {
  const statusItems = Object.keys(status).map(item => (
    <h3 key={item}>{item}: {status[item]}</h3>
  ));
  return (
    <section className="status contentful">
      <h1>Contentful</h1>
      {statusItems}
    </section>
  );
};
