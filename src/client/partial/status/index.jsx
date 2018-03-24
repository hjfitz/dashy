import React from 'react';
import Slack from './slack';
import Contentful from './contentful';
import Heroku from './heroku';
import Github from './github';

export default ({ sources }) => {
  console.log(sources);
  return (
    <section className="status-container">
      <h1 className="display-4">System Status</h1>
      <div className="row">
        <Slack status={sources.slack} />
        <Heroku status={sources.heroku} />
      </div>
      <div className="row">
        <Github status={sources.github[0]} />
        <Contentful status={sources.contentful} />
      </div>
    </section>
  );
};
