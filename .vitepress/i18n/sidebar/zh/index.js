import { defineConfig } from 'vitepress';
import { fsModSidebarConfig } from './fs.js';

export const zhSidebarConfig = defineConfig({
  '/FinalSuspect/': fsModSidebarConfig,
})