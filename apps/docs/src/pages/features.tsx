import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import clsx from 'clsx';

const features = [
  {
    title: 'Dozen of Commands out of the Box',
    imageUrl: 'img/graphic-1.svg',
    description: (
      <>
        Instant access to dozen of useful commands. From simple tasks like
        running an application in serve mode to linting the cognitive complexity
        of your code, all automatically integrated and tailored to your
        repository and technology stack.
      </>
    ),
  },
  {
    title: 'Write your own CLI Commands',
    imageUrl: 'img/graphic-2.svg',
    description: (
      <>
        Enough with hacky bash script - write clean TypeScript code for your
        custom CLI commands and re-use existing building blocks via dependency
        injection.
      </>
    ),
  },
  {
    title: 'Ready for Automation',
    imageUrl: 'img/graphic-4.svg',
    description: (
      <>
        Every command can be executed interactive or non-interactive. This way
        the same commands can be used inside a CI/CD environment with convenient
        to access environment variables, parameters and flags.
      </>
    ),
  },
];

function Feature({ index, title, description }) {
  return (
    <div
      className={clsx('row', styles.feature)}
      style={{
        marginBottom: '100px',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
      }}
    >
      <div className="col col--6">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="col col--6">
        <video width="600px" height="400px" />
      </div>
    </div>
  );
}

function FeaturesPage() {
  return (
    <Layout title="Features" description="">
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature index={idx} key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default FeaturesPage;
