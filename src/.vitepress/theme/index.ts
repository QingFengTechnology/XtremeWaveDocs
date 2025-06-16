
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import { inBrowser } from 'vitepress'

import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'

import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

import { NolebaseEnhancedReadabilitiesMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

import { BProgress } from '@bprogress/core';

import { DocBox, DocBoxCube, DocLinks, DocPill, ShareButton } from '@theojs/lumen'

import 'virtual:group-icons.css'
import './styles/index.css'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      'layout-top': () => [ h(NolebaseHighlightTargetedHeading) ],
      'aside-outline-before': () =>
        h(ShareButton, {
          buttonIcon: 'solar:copy-bold',
          buttonText: '复制本页链接',
          copiedIcon: 'codicon:pass-filled',
          copiedText: '链接已复制'
        })
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
      hideChangelogHeader: true
    })
    app.use(NolebaseInlineLinkPreviewPlugin)
    app.component('Box', DocBox) 
    app.component('Pill', DocPill) 
    app.component('Links', DocLinks) 
    app.component('BoxCube', DocBoxCube) 
  }
}

export default Theme