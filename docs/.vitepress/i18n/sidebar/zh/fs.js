import { defineConfig } from 'vitepress';

export const fsModSidebarConfig = defineConfig([
  {
    items: [
      { text: '简介', link: '/FinalSuspect/' },
      {
        text: '教程',
        base: '/FinalSuspect/Guide/',
        items: [
          { text: '安装', link: 'Installation' },
          { text: '更新', link: 'Update' },
          { text: '导出日志', link: 'OutputLog' }
        ]
      },
      {
        text: '选项',
        base: '/FinalSuspect/Options/',
        items: [
          { text: '' }
        ]
      }
    ]
  }
])