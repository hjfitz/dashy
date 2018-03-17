import React from 'react';

export default ({ status }) => {
  const { time: updated, status: curStatus } = status;
  return (
    <section className="status github">
      <h1>Github</h1>
      <h3>Current Status: {curStatus}</h3>
      <h3>Last Updated: {updated}</h3>
    </section>
  );
};
