import { defineConfig } from 'vitepress';
export const twSearchConfig = defineConfig({
  translations: {
    button: {
      buttonText: '搜索文檔',
      buttonAriaLabel: '搜索文檔',
    },
    modal: {
      noResultsText: '無法找到相關結果',
      resetButtonTitle: '清除查詢條件',
      footer: {
        selectText: '選擇',
        navigateText: '切換',
        closeText: '退出',
      },
    },
  },
});
