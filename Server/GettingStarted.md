---
title: 快速开始
order: 1
---
# 快速开始

## (推荐)快速安装:tada:

使用脚本快速安装服务器配置文件,省去复杂操作的烦恼。

<Links
  :items="[
    {
      name: '下载快速安装脚本(Windows)',
      desc: '版本1.1.4，相关服务由XtremeAPI提供',        
      link: 'https://api.xtreme.net.cn/Docs/Server/DownloadServerRegion-1.4.4.bat',
      icon: 'material-symbols:download-rounded'
    }
  ]"
/>

## 常规安装(Windows)

下载区域配置文件。

<Links
  :items="[
    {
      name: '下载区域配置文件',
      desc: '相关服务由XtremeAPI提供',        
      link: 'https://api.xtreme.net.cn/Docs/Server/regionInfo.json',
      icon: 'material-symbols:download-rounded'
    }
  ]"
/>

::: tip

如果浏览器没有直接下载,你也可以通过`Ctrl` + `S`保存文件。

:::

下载完成后,将其重命名为`regionInfo.json`,<mark>这是必须的</mark>。

按下`Win` + `R`打开运行,粘贴下方内容:

``` [文件资源管理器]
%APPDATA%\..\LocalLow\Innersloth\Among Us
```
回车确定,随后将刚刚下载的配置文件移动到打开的文件夹中。\
如果提示是否覆盖,<mark>请选择覆盖</mark>。

(可选)右键选择刚刚移动的文件,选择`属性`,并将此文件设为只读。\
这是为了避免某些模组强制使用自己提供的配置文件,导致我们自定义的被覆盖。

## 使用

在创建游戏时,将`地区`选项更改为`XtremeWave(HK)` / `XtremeWave-Legacy(HK)`即可。