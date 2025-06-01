// 有关已安装插件的文档、仓库的更多信息,请参阅本仓库的`dependencies.md`。
import { defineConfig } from 'vitepress'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
// i18n配置文件
import { zhLocaleConfig } from './i18n/zh.js'
import { twLocaleConfig } from './i18n/tw.js'
import { zhSearchConfig } from './i18n/search/zh.js'
import { zhAnnouncement } from './i18n/plugins/Announcement/zh.js'

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
      AnnouncementPlugin( zhAnnouncement ),
      groupIconVitePlugin({
        customIcon: {
          '文件资源管理器': 'flat-color-icons:folder',
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
    tw: twLocaleConfig
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
          root: zhSearchConfig
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
