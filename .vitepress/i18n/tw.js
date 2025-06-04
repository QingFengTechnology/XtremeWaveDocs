import { defineConfig } from 'vitepress';
import { zhNavConfig } from './navbar/tw.js';
import { zhSidebarConfig } from './sidebar/tw.js';
import { generateSidebar } from 'vitepress-sidebar';
export const zhLocaleConfig = defineConfig({
  label: '繁體中文',
  lang: 'zh-TW',
  title: 'XtremeWave模組文檔',
  titleTemplate: ':title - 極致文檔',
  description: 'XtremeWave模組文檔,提供了XtremeWave旗下開源模組的詳細文檔,包括安裝、教學、配置等。',
  themeConfig: {
    siteTitle: '極致文檔',
    nav: zhNavConfig,
    sidebar: generateSidebar(zhSidebarConfig),
    outline: {
      label: '頁面導航',
    },
    editLink: {
      // 目前pattern在`config.mjs`中定义后,若不在语言配置中定义会导致pattern无法生效。
      // 这似乎与VitePress所说的`浅层合并`(也许是我理解错误?)不符。
      pattern: 'https://github.com/QingFengTechnology/XtremeWaveDocs/blob/v2/:path',
      text: '在Github上查看此頁',
    },
    docFooter: {
      prev: false,
      next: false,
    },
    notFound: {
      title: '頁面未找到',
      quote: '但如果你不改變方向，並且繼續尋找，你可能最終會到達你所前往的地方。',
      linkLabel: '前往首頁',
      linkText: '前往首頁',
    },
    darkModeSwitchLabel: '顏色模式',
    lightModeSwitchTitle: '點擊以切換至淺色模式',
    darkModeSwitchTitle: '點擊以切換至深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到頂部',
    langMenuLabel: '語言',
  },
});
