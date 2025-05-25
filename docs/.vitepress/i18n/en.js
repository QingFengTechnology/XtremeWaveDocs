import { defineConfig } from 'vitepress';
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar';
export const zhLocaleConfig = defineConfig({
  label: '简体中文',
  lang: 'zh-CN',
  title: 'XtremeWave模组文档',
  titleTemplate: ':title - 极致文档',
  description: 'XtremeWave模组文档,提供了XtremeWave旗下开源模组的详细文档,包括安装、教程、配置等。',
  themeConfig: {
    siteTitle: '极致文档',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '关于',
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
      label: '页面导航',
    },
    footer: {
      message: "由<a href='https://www.rainyun.com/QingFeng_?s=XtremeDocs' target='_blank'>雨云</a>提供云服务",
      copyright: "© 2023-2025 By <a href='https://qingfengawa.top' target='_blank'>QingFeng</a>",
    },
    editLink: {
      pattern: 'https://github.com/QingFengTechnology/XtremeWaveDocs/blob/v2/:path',
      text: '在Github上查看此页',
    },
    docFooter: {
      prev: false,
      next: false,
    },
    darkModeSwitchLabel: '颜色模式',
    lightModeSwitchTitle: '点击以切换至浅色模式',
    darkModeSwitchTitle: '点击以切换至深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
  },
});
