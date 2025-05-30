// 有关已安装插件的文档、仓库的更多信息,请参阅本仓库的`dependencies.md`。
import { defineConfig } from 'vitepress'
import { zhLocaleConfig } from './i18n/zh.js'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

import { 
  InlineLinkPreviewElementTransform 
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

export default defineConfig({
  srcExclude: ['Readme.md','dependencies.md','CONTRIBUTING.md'],
  vite: {
    optimizeDeps: {
      include: [ '@waline/client/component' ],
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
      }),
      // vite配置项不能在语言配置文件定义。
      // 不过公告插件本身支持国际化,因此无伤大雅。
      AnnouncementPlugin({
        title: '公告',
        body: [
          { type: 'text', content: '欢迎回来！<br>文档已完成v2版本适配。' },
        ],
        duration: -1,
        mobileMinify: true,
        twinkle: false,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><rect width="40" height="26" x="4" y="15" rx="2"/><path stroke-linecap="round" d="m24 7l-8 8h16zM12 24h18m-18 8h8"/></g></svg>'
      }),
      groupIconVitePlugin({
        customIcon: {
          '文件资源管理器': 'flat-color-icons:folder',
          'explorer': 'flat-color-icons:folder'
        },
      })
    ],
  }, 
  // 我们将各语言的配置选项分离,因此看起来这与常规站点配置文件有些不同。
  head: [['link', { rel: 'icon', type: 'image/png', href: '/XtremeWave.png' }]],
  base: '/',
  cleanUrls: true,
  editLink: {
    pattern: 'https://github.com/QingFengTechnology/XtremeWaveDocs/blob/v2/:path',
    // 若对应语言配置未定义text,那么就会使用此处的设置。
    // 虽然但是,Crowin上进行翻译是基于简中的,如果Crowdin那里没人翻译其实是用简中的(((
    text: 'View this page on Github'
  },
  lastUpdated: false,
  locales: {
    root: zhLocaleConfig,
  },
  themeConfig: {
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
          // 配置项暂时没有放在i18n文件夹中对应的文件。
          // 但是插件本身支持也国际化,因此还无伤大雅。
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
                  navigateText: '切换',
                  closeText: '退出'
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
      md.use(InlineLinkPreviewElementTransform),
      md.use(groupIconMdPlugin,{
        titleBar: { includeSnippet: true }
      })
    },
    image: {
      lazyLoading: true
    }
  } 
})
