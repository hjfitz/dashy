import React from 'react';

const titleLookup = {
  hn: 'Hacker News',
  hnoon: 'Hacker Noon',
  tpd: 'The Practical Developer',
  reddit: 'Reddit',
};

const Top5 = ({ stories }) => stories.map(story => {
  const { title, link, published } = story;
  return (
    <div key={title} className="news-item">
      <h4><a href={link} className="text-secondary">{title}</a></h4>
      <span className="badge-secondary badge published">{published}</span>
    </div>
  );
});

const NewsProvider = ({ title, stories }) => {
  stories.splice(3);
  return (
    <div key={title} className="news-provider card">
      <div className="card-body">
        <h1 className="card-title">{titleLookup[title]}</h1>
        <Top5 stories={stories} />
      </div>
    </div>
  );
};

export default ({ sources }) => {
  const parsed = Object.keys(sources).map(source => {
    const cur = sources[source];
    return <NewsProvider key={source} title={source} stories={cur} />;
  });
  return (
    <section className="news-container">
      <h1 className="display-4">News</h1>
      {parsed}
    </section>
  );
};
