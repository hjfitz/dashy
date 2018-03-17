import React from 'react';
import Slack from './slack';
import Contentful from './contentful';
import Heroku from './heroku';
import Github from './github';

export default ({ sources }) => {
  console.log(sources);
  return (
    <section className="status-container">
      <Slack status={sources.slack} />
      <Github status={sources.github[0]} />
      <Heroku status={sources.heroku} />
      <Contentful status={sources.contentful} />
    </section>
  );
};
