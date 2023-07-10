import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is it?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TikTok Global Observatory (TikTokGO) is an Open Archive of what TikTok has pushed in the `For You` feed of its unlogged users.
      </>
    ),
  },
  {
    title: "What is special about it?",
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We collect samples four time per day from 180+ countries, and all the states in the U.S. federation.
      </>
    ),
  },
  {
    title: 'How to use it?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You start by looking at the most recommended videos globally, then can click through countries, adjust timelines, and download the data to start your own analysis.
        If you want more, reach out to us and we will provide you with access to the database.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
