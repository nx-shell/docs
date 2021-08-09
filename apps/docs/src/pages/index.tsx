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
              <p
                className="hero__subtitle"
                style={{ fontWeight: 600, fontSize: '26px' }}
              >
                {siteConfig.tagline}
              </p>
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
        <div
          className="container"
          style={{
            maxWidth: 'max(60vw, 500px)',
            margin: 'auto',
            boxShadow: '2rem 2rem 5rem rgba(0, 0, 0, 0.15)',
            marginTop: '24px',
            marginBottom: '120px',
            borderRadius: '24px',
            fontSize: '20px',
            lineHeight: '35px',
          }}
        >
          <div className="row" style={{ padding: '36px' }}>
            <p>Hey everyone,</p>
            <p>
              I'm Ben, a TypeScript &#38; Nx enthusiast from Germany. I've been
              using Nx pretty much from its beginnings to build a large and
              complex SaaS application (we have over 1200 libraries at this
              point). I quickly realized that Nx is the perfect baseline for
              building cool workspace tooling and automations on top, because
              everything is well-structured and formalized via the
              workspace.json/ angular.json.
            </p>
            <p>
              I caught myself typing the same terminal commands with the same
              flags over and over again each day, often having typos or
              forgetting parameter names altogether, which left me searching
              through my bash history a lot. Even worse, my colleagues who were
              not so familiar with the tooling had to often ask for my help to
              get things done.
            </p>
            <p>
              So the greatest impact my work could have on my daily engineering
              life as well as that of my colleagues was to provide a super
              simple, inclusive and maintainable way to get my knowledge about
              our workspace and tooling into the repository somehow. That's how
              Nx shell was born.
            </p>
            <p>
              Every developer should be able to write custom commands in his
              area of expertise in the language they are already familiar with
              (TypeScript), instead of being limited to bash scripts or
              introducing another tool chain for e.g., executing Python. This
              way, every developer benefits from the knowledge of each other
              developer and can perform all sorts of tasks without having to
              know each detail of the process (e.g., deploying a new version,
              creating a database in AWS, ...).
            </p>
            <p>
              Anyways, here's the vision for this open-source project: build
              your own CLI to make your terminal life easier each day! You are
              probably wondering why there are many videos of a working Nx shell
              version, but no source-code yet. This is because I learned the
              hard way that one should first see whether an idea generates any
              interest before diving into the code. Many times nobody cares
              about your idea or understands it, even though you think it's
              super cool. I already have hundres of thousands of lines of code
              sitting there for the current version of Nx shell, but it would be
              a lot of work to make that code portable, split it up into
              multiple plugin packages on npm, establish contribution guidelines
              and so on. So this page is my way to find out whether enough of
              you Nrwlians out there care enough for Nx shell to exist in the
              world, otherwise it's probably not worth putting in the time. You
              can show your support by leaving a GitHub star, a follow on
              Twitter or your e-mail address, whatever you are most comfortable
              with. Once enough people show their interest, I will be more than
              happy to dedicate my free time to migrate the existing code into
              the open-source project.
            </p>

            <p>
              Yours truly,
              <br />
              Ben
            </p>
          </div>

          <div
            className="row"
            style={{ paddingLeft: '36px', paddingBottom: '36px' }}
          >
            <div className="avatar">
              <img
                className="avatar__photo avatar__photo--xl"
                src={useBaseUrl('/img/profile_500px.jpg')}
              />
              <div className="avatar__intro">
                <div className="avatar__name">Ben</div>
                <small className="avatar__subtitle">Nrwlian</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{ position: 'relative', marginTop: '-100px', zIndex: -1 }}>
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
    </Layout>
  );
}

export default Home;
