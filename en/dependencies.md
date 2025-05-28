## 站点所用插件列表

所有插件均会在`package.json`中列出,若此页面内容不正确,可通过`package.json`来查找。

在插件选取上,我们会优先考虑集成(指一个文档包含多个插件,也就是一个团队维护多个插件)。\
这样翻阅文档要更方便一点,也一定程度避免了上次更新是在2年前的可能性。

### Nólëbase集成

#### `<mark>` 元素增强

顾名思义,为高亮功能进行了一系列小优化。

- 文档: [元素增强 | Nólëbase 集成](https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-enhanced-mark/)
- GitHub: [nolebase/integrations](https://github.com/nolebase/integrations)
- NPM: [@nolebase/vitepress-plugin-enhanced-mark](https://www.npmjs.com/package/@nolebase/vitepress-plugin-enhanced-mark)

#### 阅读增强

右上角的一个看起来是书的按钮,提供了布局切换和聚光灯功能。

我个人挺喜欢的,因为除了可以解决一部分阅读问题之外,聚光灯功能还挺好玩的(?)。

- 文档: [阅读增强 | Nólëbase 集成](https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-enhanced-readabilities/)
- GitHub: [nolebase/integrations](https://github.com/nolebase/integrations)
- NPM: [@nolebase/vitepress-plugin-enhanced-readabilities](https://www.npmjs.com/package/@nolebase/vitepress-plugin-enhanced-readabilities)

#### 基于 Git 的页面历史

一个基于Git的页面历史记录功能,你在文档底部见到的`最后编辑于……`就是由它生成的。

- 文档: [基于 Git 的页面历史 | Nólëbase 集成](https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-git-changelog/)
- GitHub: [nolebase/integrations](https://github.com/nolebase/integrations)
- NPM: [@nolebase/vitepress-plugin-git-changelog](https://www.npmjs.com/package/@nolebase/vitepress-plugin-git-changelog)

#### 标题高亮闪烁

这个插件汇总我们点击右侧的大纲进行导览的时候,会对导航到的标题进行高亮闪烁以指示位置。

这个插件我个人也是挺喜欢的,因为我视力不好,又有点阅读障碍(也许?),有时候网页视口宽一点我就容易读着读着读串行/不知道读哪了。\
引用一段文档的话:

> 为什么会需要高亮呢？
>
> 1. 一个屏幕中出现了好几个标题的时候，用户点击了其中一个标题，然后页面滚动到了标题所在的位置，但是用户并不知道当前的标题在哪里，这个时候用户就需要自行寻找标题，这个过程是非常不友好的，因为用户需要重新阅读视口内的内容并自行寻找到他们希望寻找的标题。
> 2. 对于文档末尾有多个标题的时候，点击右侧的大纲将不会发生页面的滚动动画，用户，作为读者自然也就无法通过一个固定的「看窗口顶部的标题来寻找和定位标题」的可重复行为模式来学习如何寻找标题。
>
> 这个时候能够指示和高亮察觉不到的标题高亮就是一件非常重要的事情，这个插件就是因此而诞生的。

- 文档: [闪烁高亮当前的目标标题 | Nólëbase 集成](https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-highlight-targeted-heading/#%E6%95%88%E6%9E%9C%E6%BC%94%E7%A4%BA)
- GitHub: [nolebase/integrations](https://github.com/nolebase/integrations)
- NPM: [@nolebase/vitepress-plugin-highlight-targeted-heading](https://www.npmjs.com/package/@nolebase/vitepress-plugin-highlight-targeted-heading)

#### 行内链接预览

这个VitePress插件实现了类似Obsidian的链接预览功能。

- 文档: [行内链接预览 | Nólëbase 集成](https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-inline-link-preview/)
- GitHub: [nolebase/integrations](https://github.com/nolebase/integrations)
- NPM: [@nolebase/vitepress-plugin-inline-link-preview](https://www.npmjs.com/package/@nolebase/vitepress-plugin-inline-link-preview)

### 其他插件

#### 自动生成侧边栏

显而易见,这就是一个自动生成侧边栏的插件。\
这个插件避免了我们在未来需要一个一个手动添加侧边栏的麻烦,尤其是未来面对几百个md文件的时候。

- 文档: [VitePress Sidebar | 功能强大的自动侧边栏生成器](https://vitepress-sidebar.cdget.com/zhHans/)
- Github: [jooy2/vitepress-sidebar](https://github.com/jooy2/vitepress-sidebar)
- NPM: [vitepress-sidebar](https://www.npmjs.com/package/vitepress-sidebar)

#### 公告插件

一个简单的公告插件,可以在文档右上角显示公告。

- ~~文档: 不可用~~
- Github: [ATQQ/sugar-blog](https://github.com/ATQQ/sugar-blog)
- NPM: [vitepress-plugin-announcement](https://www.npmjs.com/package/vitepress-plugin-announcement)

#### 代码块分组图标

插件允许你在代码块标题旁边添加一个图标。

- 文档: [Vitepress Plugin Group Icons](https://vp.yuy1n.io/)
- GitHub: [yuyinws/vitepress-plugin-group-icons](https://github.com/yuyinws/vitepress-plugin-group-icons)
- NPM: [vitepress-plugin-group-icons](https://www.npmjs.com/package/vitepress-plugin-group-icons)