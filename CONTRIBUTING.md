## 贡献指南

### 准备工作

我们将默认您:

- 会正确使用npm
- 知道Markdown文件是什么,如何编写
- 对VitePress有一定了解,知道其如何工作及配置文件语法
- 了解并知道如何使用git进行一系列操作
- 会使用浏览器搜索并尝试解决遇到的问题

您的电脑需要:

- Node.js
  - 最低要求18.x,低于此版本不受支持。
  - 我们推荐使用20.x/22.x。
  - 24.x版本暂不保证持续可用性,但Github构建测试曾通过。
- npm
- git

### 本地预览

克隆仓库到本地:

```bash

git clone git@github.com:QingFengTechnology/XtremeWaveDocs.git

# 如果你想要为我们做出贡献,请Fork本仓库后使用下方命令:

git clone git@github.com:<你的GitHub用户名>/XtremeWaveDocs.git

```

安装依赖:

```bash

# 如已在项目根目录打开Shell则无需cd
cd XtremeWaveDocs
npm install

```

在本地启动开发服务器:

```bash

npm run docs:dev

```

如果一切正常,VitePress会在`http://localhost:5173`打开开发服务器,你可以通过浏览器访问它。

### 配置指南

#### 导航栏&侧边栏配置

我们的配置文件与常规的网站配置有些不同,我们将其拆分为了许多个文件。\
此举是为了减少单个配置文件的大小,并提高配置文件的可读性。

然而,因为此举官方教程中并未提及,因此这稍微提高了新贡献的维护难度。\
但问题不大,如果你有一点这方面前端基础经验 / 使用VitePress/VuePress部署过网站,那么你应该很快就能了解如何配置以及如何扩展。
> 特别是VuePress-hope主题,我们最开始就是参考这个主题的配置文件来编写的。

说到底,这也只是多了几个`import`和`export`而已。

##### base选项

base是侧边栏选项(至少在XtremeDocs他只用侧边栏),正如其名称,他决定了侧边栏的基本路径。\
这点在官方教程中也同样没有提及,因此我们来举个例子让你更好的了解他:

```js
// /docs/.vitepress/i18n/sidebar/zh/fs.js

  {
    items: [
      { text: '简介', link: '/FinalSuspect/' },
      {
        text: '教程',
        base: '/FinalSuspect/Guide/',
        items: [
          { text: '安装', link: 'Installation' },
          { text: '更新', link: 'Update' }
        ]
      }
    ]
  }

```

如果没有base选项,那么侧边栏将会是这样的:

```js

  {
    items: [
      { text: '简介', link: '/FinalSuspect/' },
      {
        text: '教程',
        items: [
          { text: '安装', link: '/FinalSuspect/Guide/Installation' },
          { text: '更新', link: '/FinalSuspect/Guide/Update' }
        ]
      }
    ]
  }

```

#### 标题锚点

如果你浏览了FianlSuspect的文档,你可能会注意到文档自定义了每个标题的锚点。

首先,标题锚点**不是必须的**,如果你不想那么麻烦,你当然可以选择不自定义它。\
FinalSuspect文档自定义了是因为我们在其他文档进行了内联(其他文档中引用),为了方便链接,我们自定义了每个标题的锚点。
> 除了内联更方便外,在其他人直接复制网页链接发给别人的时候,链接也会更短。\
> 因为默认锚点就是标题,而链接中的中文会被转义为编码,这就导致了链接会变得非常难看还会很长。

有关标题锚点的更多信息,请参阅[官方文档](https://vitepress.dev/zh/guide/markdown#header-anchors)。

### 文档翻译

我们使用Crowdin协作进行翻译。\
有关更多信息/翻译教程,请参阅[讨论: 帮助我们翻译文档](https://github.com/QingFengTechnology/XtremeWaveDocs/discussions/14)。

### 文档插件

为了提供更好的体验,我们引入了许多插件来增强文档的功能。\
有关已安装插件的信息,请参阅[已安装插件列表](dependencies.md)。