import React from 'react';

export default ({ status }) => {
  if ('issues' in status.status) {
    console.warn('issue on heroku');
  }
  const { Production, Development } = status.status;
  return (
    <div className="status heroku">
      <h1>Heroku</h1>
      <h3>Production: {Production}</h3>
      <h3>Development: {Development}</h3>
    </div>
  );
};

