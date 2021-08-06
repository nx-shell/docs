import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import GitHubButton from 'react-github-btn';

const features = [
  {
    title: 'Easy to us',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function KeyVisual() {
  const imgUrl = useBaseUrl('gif/nx-shell-key-visual.gif');
  return (
    <div>
      <center>
        <img
          width="auto"
          height="auto"
          style={{ maxHeight: '500px', borderRadius: '24px' }}
          src={imgUrl}
        />
      </center>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A shell for your Nx monorepo"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="row">
          <div className="col col--5">
            <div className="container">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
          </div>

          <div className="col col--7">
            <KeyVisual></KeyVisual>
          </div>
        </div>
      </header>

      <section>
        <div className="container"></div>
      </section>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <section>
        <div style={{ position: 'relative' }}>
          <iframe
            src="https://nxshell.substack.com/embed"
            width="100%"
            height="520"
            scrolling="no"
            frameBorder="0"
          ></iframe>
          <div
            style={{
              position: 'absolute',
              bottom: '0px',
              right: '0px',
              width: '200px',
              height: '100px',
              backgroundColor: 'white',
            }}
          ></div>
        </div>
      </section>

      <section>
        <GitHubButton
          href="https://github.com/nx-shell/core"
          data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star nx-shell/core on GitHub"
        >
          Star
        </GitHubButton>

        <a
          href="https://twitter.com/nx_shell?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="false"
        >
          Follow @nx_shell
        </a>
      </section>
    </Layout>
  );
}

export default Home;
