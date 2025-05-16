import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
/* 配置文件参考: https://docusaurus.io/zh-CN/docs/api/docusaurus-config
  此配置顺序完全遵循文档。 */
  title: '极致文档',
  url: 'https://docs.xtreme.net.cn',
  baseUrl: '/',
  favicon: 'img/XtremeWave.ico',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  tagline: 'XtremeWave官方文档',
  organizationName: 'QingFeng-awa',
  projectName: 'XtremeWaveModDocs',
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // 插件仓库: https://github.com/easyops-cn/docusaurus-search-local
        indexBlog: false,
        docsRouteBasePath: "/",
        language: ["en","zh"],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        explicitSearchResultPath: true,
        searchBarShortcutHint: false,
        searchBarPosition: "right",
        forceIgnoreNoIndex: true,
        fuzzyMatchingDistance: 3,
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/XtremeWave/WebSiteDocs',
          sidebarCollapsed: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/API'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
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
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 主题设置文档: https://docusaurus.io/zh-CN/docs/api/themes/configuration
      respectPrefersColorScheme: true,
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '极致文档',
        logo: {
          alt: 'Logo',
          src: 'img/XtremeWave.png',
        },
        items: [
          {
            to: 'about',
            position: 'left',
            label: '关于文档',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '模组文档',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'FinalSuspectSidebar',
                label: 'FinalSuspect',
              },
            ]
          },
          {
            type: 'docSidebar',
            sidebarId: 'APISidebar',
            label: 'API文档',
          },
          {
            href: 'https://www.xtreme.net.cn',
            label: '主站',
            position: 'right',
          },
          {
            href: 'https://github.com/QingFeng-awa/XtremeWaveModDocs',
            label: 'GitHub',
            position: 'right',
          }
        ],
        hideOnScroll: true,
      },
      footer: {
        copyright: `© 2023-${new Date().getFullYear()} QingFeng`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

export default config;
