const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Asix+ Docs',
  tagline: '',
  url: 'https://docs.asix.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Asix+/favicon-32x32.png',
  organizationName: 'AsixProject', // Usually your GitHub org/user name.
  projectName: 'docs.asix.org', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js")
          // editUrl: 'https://github.com/AudiusProject/docs.audius.org/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      "es",
      "fr",
      // "zh"
    ],
    // localesNotBuilding: ["ko", "pt", "vi", "zh", "ja"],
    localeConfigs: {
      en: {
        label: "English",
      },
      es: {
        label: "Español",
      },
      // zh: {
      //   label: "中文",
      // },
      fr: {
        label: "Français"
      }
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Asix+ Docs',
        logo: {
          alt: 'Asix+ Docs Logo',
          src: 'img/Asix+/logo.png',
        },
        items: [
          {
            label: 'Welcome',
            to: 'welcome',
            position: 'left',
          },
          {
            to: 'protocol/overview',
            label: 'Protocol',
            position: 'left',
          },
          {
            to: 'api/rest-api',
            label: 'API',
            position: 'left',
          },
          {
            to: 'token/audio',
            label: 'Token',
            position: 'left',
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://discord.com/invite/audius",
            label: "Chat",
            position: "right",
          },
          {
            href: "https://github.com/AudiusProject",
            label: "GitHub",
            position: "right",
          }
        ],
      },
      // algolia: {
      //   // This API key is "search-only" and safe to be published
      //   apiKey: "d58e0d68c875346d52645d68b13f3ac0",
      //   indexName: "audius",
      //   contextualSearch: true,
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: 'welcome'
              },
              {
                label: 'Protocol Overview',
                to: 'protocol/overview',
              },
              {
                label: 'API',
                to: 'api/rest-api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/audius',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AudiusProject',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AudiusProject',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Audius, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
