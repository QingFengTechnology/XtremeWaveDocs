import { defineConfig } from 'vitepress';

export const zhAnnouncement = defineConfig({
  title: '公告',
  body: [
    { type: 'text', content: '文档现已支持繁体中文！' },
  ],
  duration: -1,
  mobileMinify: true,
  twinkle: false,
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><rect width="40" height="26" x="4" y="15" rx="2"/><path stroke-linecap="round" d="m24 7l-8 8h16zM12 24h18m-18 8h8"/></g></svg>'
})