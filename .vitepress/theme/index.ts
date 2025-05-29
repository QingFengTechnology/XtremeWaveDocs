
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'

import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'

import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

import { 
  NolebaseEnhancedReadabilitiesMenu, 
  //NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import { 
  NolebaseInlineLinkPreviewPlugin, 
} from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

import { BProgress } from '@bprogress/core';
import { inBrowser } from 'vitepress'

import 'virtual:group-icons.css'

import './styles/index.css'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      // 备注: 手机端一般用不上这种功能,注释即可。
      //'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
      'layout-top': () => [
        h(NolebaseHighlightTargetedHeading),
      ],
    })
  },
  enhanceApp({ app, router }) {
    if (inBrowser) {
      BProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        BProgress.start()
      }
      router.onAfterRouteChange = () => {
        BProgress.done()
      }
    }
    app.use(NolebaseGitChangelogPlugin, { 
      commitsRelativeTime: true,
      hideChangelogHeader: true,
      hideChangelogNoChangesText: true,
      displayAuthorsInsideCommitLine: true
    }),
    app.use(NolebaseInlineLinkPreviewPlugin)
  }
}

export default Theme