---
title: 快速开始
order: 1
---
# 快速开始 {#GettingStarted}

## (推荐)快速安装:tada: {#fast-install}

使用脚本快速安装服务器配置文件,省去复杂操作的烦恼。

<Links
  :items="[
    {
      name: '下载快速安装脚本(Windows)',
      desc: '版本1.6.5,相关服务由XtremeAPI提供',        
      link: 'https://api.xtreme.net.cn/Docs/Server/DownloadServerRegion.bat',
      icon: 'material-symbols:download-rounded'
    }
  ]"
/>

## 常规安装(Windows) {#win-install}

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

## 使用 {#use}

在创建游戏时,将`地区`选项更改为你想要加入的服务器即可。
> 搜索房间会在所有已安装的服务器搜索,你无需特地在创建游戏更改地区。

我们现在拥有三种服务器可供选择,完整信息及如何选择请参见[选择地区](Region)。

### 连接到`Xtreme.Secure` {#secure-install}

`Xtreme.Secure`是三种服务器中反作弊措施最多的服务器。\
但为了安全,我们不得不在易用性上做出让步,因此您需要额外步骤来正常使用此服务器。

:::tip 

此服务器仅支持[Nebula](https://github.com/Dolly1016/Nebula)。\
下文将默认您已安装此模组。

:::

下载Nebula插件包。\
<mark>Nebula的插件包就是压缩包,不要解压它。</mark>

<Links
  :items="[
    {
      name: '下载Nebula插件包',
      desc: '相关服务由XtremeAPI提供',        
      link: 'https://api.xtreme.net.cn/Docs/Server/XtremeAuth.zip',
      icon: 'material-symbols:download-rounded'
    }
  ]"
/>

打开你安装Nebula的位置(Nebula根目录),并点击`Addons`文件夹(没有请手动创建)。\
将此压缩包拖动到`Addons`文件夹即可。

完成后,你可以打开Nebula并创建一个房间来验证是否安装正确。\
如遇到问题,请参见[疑难解答](FAQ#secure-cannot-connection)。