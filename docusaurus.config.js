// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TikTok Global Observatory (Documentation)',
  tagline: 'A worldwide map of TikTok recommended content',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ttgo.trex.zone/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aiforensics', // Usually your GitHub org/user name.
  projectName: 'tkobservatory', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aiforensics/ttgo-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aiforensics/ttgo-docs/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TikTokGo',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to:
              'https://github.com/aiforensics/tkobservatory/issues',
            label: 'Issues',
            position: 'left'
          },
          {
            href: 'https://github.com/aiforensics/tkobservatory',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [ /*
          {
            title: 'Something can go here',
            items: [
              {
                label: 'List',
                to: '/docs/intro',
              },
            ],
          }, */
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/tiktokglobalo-6lp2040/shared_invite/zt-1yzdd5574-e9Ir8tLdY2TKUIZTTMFT9g',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aiforensics_org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Our organization',
                href: 'https://aiforensics.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aiforensics/tkobservatory',
              },
            ],
          },
        ],
        copyright: `CC-BY © ${new Date().getFullYear()} AI-Forensics `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
