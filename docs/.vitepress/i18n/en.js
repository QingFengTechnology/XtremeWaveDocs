import { defineConfig } from 'vitepress';
import { zhNavConfig } from './navbar/zh.js';
import { zhSidebarConfig } from './sidebar/zh/index.js';
export const zhLocaleConfig = defineConfig({
  label: 'English',
  lang: 'en-US',
  title: 'XtremeWave Mod Docs',
  titleTemplate: ':title - XtremeDocs',
  description: 'XtremeWave Official Documentation for Mods.',
  themeConfig: {
    siteTitle: 'XtremeDocs',
    nav: zhNavConfig,
    sidebar: zhSidebarConfig,
    outline: {
      label: 'On this page',
    },
    editLink: {
      // 目前pattern在`config.mjs`中定义后,若不在语言配置中定义会导致pattern无法生效。
      // 这似乎与VitePress所说的`浅层合并`(也许是我理解错误?)不符。
      pattern: 'https://github.com/QingFengTechnology/XtremeWaveDocs/blob/v2/docs/:path',
      text: 'View it on GitHub',
    },
    docFooter: {
      prev: false,
      next: false,
    },
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    langMenuLabel: 'Language',
  },
});
