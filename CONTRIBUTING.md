## 贡献指南

### 准备工作

我们将默认您:

- 会正确使用npm
- 知道Markdown文件是什么,如何编写
- 对VitePress有一定了解,知道其如何工作及配置文件语法
- 了解并知道如何使用git进行一系列操作
- 会使用浏览器搜索并尝试解决遇到的问题

您的电脑需要:

- Node.js 18+(推荐22+,服务器版本为20)
- npm (node附带,但建议手动更新到最新版)
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

这极大减少了sidebar相关配置文件的大小,还提高了在Crowdin翻译时的可读性。