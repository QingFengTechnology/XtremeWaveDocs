import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: "icon",
        type: "image/png",
        href: '/img/XtremeWave.png',
      },
    },
  ],
  title: '极致文档',
  tagline: 'XtremeWave官方文档',
  favicon: 'img/XtremeWave.ico',
  url: 'https://docs.xtreme.net.cn',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'XtremeWave',
  projectName: 'WebSiteDocs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
  noIndex: true,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/XtremeWave/WebSiteDocs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '极致文档',
        logo: {
          alt: 'XtremeWave Logo',
          src: 'img/XtremeWave.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'FinalSuspect',
          },
          {
            href: 'https://www.xtreme.net.cn',
            label: 'XtremeWave主站',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} XtremeWave`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
