import { defineConfig } from 'vitepress';

export const zhSidebarConfig = defineConfig([
  {
    scanStartPath: '/FinalSuspect',
    resolvePath: '/FinalSuspect/',
    basePath: '/',
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    frontmatterOrderDefaultValue: 999,
    collapsed: false
  },
  {
    scanStartPath: '/TheOtherRolesEdited',
    resolvePath: '/TheOtherRolesEdited/',
    basePath: '/',
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    frontmatterOrderDefaultValue: 999,
    collapsed: false,
    excludePattern: ['Settings/']
  }
])