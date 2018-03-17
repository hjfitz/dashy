import React from 'react';

const Top5 = ({ stories }) => stories.map(story => {
  const { title, link, published } = story;
  return (
    <div key={title} className="news-item">
      <h2><a href={link}>{title}</a></h2>
      <span className="published">{published}</span>
    </div>
  );
});

const NewsProvider = ({ title, stories }) => {
  stories.splice(3);
  return (
    <div key={title} className="news-provider">
      <h1>{title}</h1>
      <Top5 stories={stories} />
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
      <h2 key="news-title">news</h2>
      {parsed}
    </section>
  );
};
