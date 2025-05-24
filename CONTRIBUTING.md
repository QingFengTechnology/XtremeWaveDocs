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