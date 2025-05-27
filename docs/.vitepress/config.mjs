import { defineConfig } from 'vitepress'
import { zhLocaleConfig } from './i18n/zh.js'
//import { enLocaleConfig } from './i18n/en.js'

import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

import { 
  InlineLinkPreviewElementTransform 
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
        '@nolebase/vitepress-plugin-inline-link-preview/client'
      ], 
    },
    ssr: { 
      noExternal: [ 
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
        '@nolebase/vitepress-plugin-inline-link-preview'
      ], 
    },
    plugins: [ 
      GitChangelog({ 
        repoURL: () => 'https://github.com/QingFengTechnology/XtremeWaveDocs', 
      }), 
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith('index.md'),
        sections: {
          disableChangelog: false,
          disableContributors: true,
        },
      })
    ],
  }, 
  // 我们将各语言的配置选项分离,因此看起来这与常规站点配置文件有些不同。
  // 站点配置参考: https://vitepress.dev/zh/reference/site-config
  head: [['link', { rel: 'icon', type: 'image/png', href: '/XtremeWave.png' }]],
  base: '/',
  cleanUrls: true,
  editLink: {
    pattern: 'https://github.com/QingFengTechnology/XtremeWaveDocs/blob/v2/docs/:path',
    // 若对应语言配置未定义text,那么就会使用此处的设置。
    // 虽然但是,Crowin上进行翻译是基于简中的,如果Crowdin那里没人翻译其实是用简中的(((
    text: 'View this page on Github'
  },
  lastUpdated: false,
  locales: {
    // i18n教程: https://vitepress.dev/zh/guide/i18n
    root: zhLocaleConfig,
    //en: enLocaleConfig
  },
  themeConfig: {
    // 主题配置参考(和站点不同哦): https://vitepress.dev/zh/reference/default-theme-config
    logo: '/XtremeWave.png',
    outline: [2, 5],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XtremeWave', ariaLabel: 'XtremeWave Github' }
    ],
    footer: {
      copyright: "© 2023-2025 By <a href='https://qingfengawa.top' target='_blank'>QingFeng</a>"
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          // 配置项暂时没有放在i18n文件夹中对应的文件,后续会进行优化。
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    externalLinkIcon: true
  },
  markdown: { 
    config(md) { 
      md.use(InlineLinkPreviewElementTransform) 
    }
  } 
})
