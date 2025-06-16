// 有关已安装插件的文档、仓库的更多信息,请参阅本仓库的`dependencies.md`。
import { defineConfig } from 'vitepress'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { mapAuthorsList } from './i18n/plugins/mapAuthors.js'
import footnote_plugin from "markdown-it-footnote";
// i18n配置文件
import { zhLocaleConfig } from './i18n/zh.js'
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
        mapAuthors: mapAuthorsList
      }), 
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith('index.md'),
        sections: {
          disableChangelog: false,
          disableContributors: false,
        },
      }),
      AnnouncementPlugin({
        locales: {
          root: zhAnnouncement
        }
      }),
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
    text: 'View this page on Github'
  },
  lastUpdated: false,
  locales: {
    root: zhLocaleConfig
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
          root: zhSearchConfig
        }
      }
    },
    externalLinkIcon: true
  },
  markdown: { 
    config(md) { 
      md.use(InlineLinkPreviewElementTransform)
      md.use(groupIconMdPlugin,{
        titleBar: { includeSnippet: true }
      })
      md.use(footnote_plugin)
    },
    image: {
      lazyLoading: true
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '特别注意',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  } 
})
