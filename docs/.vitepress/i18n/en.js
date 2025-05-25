import { defineConfig } from 'vitepress';
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar';
export const zhLocaleConfig = defineConfig({
  label: 'English',
  lang: 'en-US',
  title: 'XtremeWave Mod Docs',
  titleTemplate: ':title - XtremeDocs',
  description: 'XtremeWave Official Documentation for Mods.',
  themeConfig: {
    siteTitle: 'XtremeDocs',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about',
      },
    ],
    sidebar: calculateSidebar([
      {
        folderName: 'FinalSuspect',
        separate: true,
      },
    ]),
    outline: {
      label: 'On this page',
    },
    footer: {
      message:
        "Cloud services provided by <a href='https://www.rainyun.com/QingFeng_?s=XtremeDocs' target='_blank'>Rainyun</a>",
      copyright: "© 2023-2025 By <a href='https://qingfengawa.top' target='_blank'>QingFeng</a>",
    },
    editLink: {
      pattern: 'https://github.com/QingFengTechnology/XtremeWaveDocs/blob/v2/:path',
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
