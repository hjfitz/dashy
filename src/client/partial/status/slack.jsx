import React from 'react';

export default ({ status }) => {
  const { status: curStatus, statusMessage } = status;
  return (
    <div className="status slack">
      <h2>Slack</h2>
      <h3 className="slack-status">{curStatus}</h3>
      <h3 className="slack-message">{statusMessage}</h3>
    </div>
  );
};

