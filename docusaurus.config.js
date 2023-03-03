// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation | Whale Chat Bot',
  tagline: 'Create & Manage the Whale Chat for your project',
  favicon: 'fav/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.whalechatbot.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'serspace', // Usually your GitHub org/user name.
  projectName: 'whale-docs', // Usually your repo name.

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
          routeBasePath: '/',
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
      navbar: {
        title: 'Whale Chat Bot',
        logo: {
          alt: 'Whale Chat Bot Logo',
          src: 'img/logo/logo-small.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://whalechatbot.com/',
            target: '',
            position: 'left',
            label: 'Home',
          },
          {
            href: 'https://t.me/WhaleChatBot',
            label: 'Telegram',
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
                label: 'Getting started',
                to: '/',
              },
              {
                label: 'Verification',
                to: '/verification',
              },
              {
                label: 'Features',
                to: '/features',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/WhaleChatBot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Chart',
                href: 'https://poocoin.app/tokens/0xbdd120c5fc6cd22a9e75148fd9a81850d9c12c5b',
              },
              {
                label: 'Order',
                href: 'https://t.me/WhaleChatBot',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Whale Chat Bot.`, @dev not needed imo - space
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
