import { defineConfig } from 'vitepress';
export const zhNavConfig = defineConfig([
    {
        text: '首頁',
        link: '/tw/',
    },
    {
        text: '關於',
        link: '/tw/about',
    },
    {
        text: '文檔',
        items: [
            {
                text: 'FinalSuspect',
                link: '/tw/FinalSuspect/Introduction',
                activeMatch: '/tw/FinalSuspect/',
            },
            {
                text: 'XtremeWave游戏服',
                link: '/Server/GettingStarted',
                activeMatch: '/Server/',
            },
        ],
    },
]);
