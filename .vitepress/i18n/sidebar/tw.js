import { defineConfig } from 'vitepress';
export const twSidebarConfig = defineConfig([
    {
        scanStartPath: '/tw/FinalSuspect',
        resolvePath: '/tw/FinalSuspect/',
        basePath: '/tw/',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
        collapsed: false,
        frontmatterOrderDefaultValue: 999,
    },
]);
