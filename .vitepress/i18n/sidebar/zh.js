import { defineConfig } from 'vitepress';

export const zhSidebarConfig = defineConfig([
  {
    scanStartPath: '/FinalSuspect',
    resolvePath: '/FinalSuspect/',
    basePath: '/',
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByName: true,
    collapsed: true
  }
])