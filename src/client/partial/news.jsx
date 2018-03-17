import React from 'react';

const Top5 = ({ stories }) => stories.map(story => {
  const { title, link, published } = story;
  return [
    <h2 key={title}><a href={link}>{title}</a></h2>,
    <span key={title + published} className="published">{published}</span>,
  ];
});

const NewsProvider = ({ title, stories }) => {
  stories.splice(3);
  return [
    <h1 key={title}>{title}</h1>,
    <Top5 stories={stories} />,
  ];
};

export default ({ sources }) => {
  const parsed = Object.keys(sources).map(source => {
    const cur = sources[source];
    return <NewsProvider title={source} stories={cur} />;
  });
  console.log(sources);
  return [
    <h2 key="news-title">news</h2>,
    parsed,
  ];
};
