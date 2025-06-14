import { defineConfig } from 'vitepress';

export const zhSidebarConfig = defineConfig([
  {
    documentRootPath: '/src',
    scanStartPath: '/FinalSuspect',
    resolvePath: '/FinalSuspect/',
    basePath: '/',
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: false,
    frontmatterOrderDefaultValue: 999
  },
  {
    documentRootPath: '/src',
    scanStartPath: '/Server',
    resolvePath: '/Server/',
    basePath: '/',
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    collapsed: false,
    frontmatterOrderDefaultValue: 999
  }
])