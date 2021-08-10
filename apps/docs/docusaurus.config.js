module.exports = {
  title: 'Nx Shell',
  tagline:
    'Create an interactive CLI for your Nx monorepo with the technologies you already know and use.',
  url: 'https://nxshell.dev',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'nx-shell', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  plugins: ['docusaurus-plugin-matomo'],
  themeConfig: {
    matomo: {
      matomoUrl: 'https://metrics.nxshell.dev/',
      siteId: '1',
    },
    algolia: {
      apiKey: '8d3f37b06edf4b29f7baf3bad14b536b',
      indexName: 'dev_nxshell',
      contextualSearch: true,
      appId: 'WNU94UHB46',
      searchParameters: {},
    },
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Nx Shell',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'features', label: 'Features', position: 'left' },
        /**
        { to: 'blog', label: 'Get started', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        */
        {
          href: 'https://github.com/nx-shell',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nx-shell',
            },
            {
              label: 'E-Mail List',
              href: 'https://nxshell.substack.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nx_shell',
            },
          ],
        },
        {
          title: 'Support Us',
          items: [
            {
              label: 'Donate 1€',
              href: 'https://buy.stripe.com/dR6aFM7s61vY32oeUU',
            },
            {
              label: 'Donate 2€',
              href: 'https://buy.stripe.com/28o4hocMq2A21Yk145',
            },
            {
              label: 'Donate 5€',
              href: 'https://buy.stripe.com/8wM15c9AecaC46s7su',
            },
          ],
        },
      ],
      //copyright: `© ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nx-shell/docs/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/nx-shell/docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
