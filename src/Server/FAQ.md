---
title: 疑难解答
order: 3
---
# 疑难解答 {#FAQ}

## 连接问题 {#connection-issue}

### 因配置文件过时导致的无法连接 {#region-too-old}

我们于<mark>6月13日凌晨和6月14日</mark>更新了服务器,这是一个较大改动,你需要重新安装此配置文件才能继续游玩。\
<mark>如果你在6月12日能正常游玩,但13日就不行了,请先根据文档重新安装一次配置文件。</mark>

### Your client is too new, please update your Impostor server to play. {#client-too-new}

你的客户端版本过新。\
如果你连接的是Legacy版本的服务器,<mark>请更换至Normal版本</mark>(即带`Normal`后缀的服务器)。\
如果你连接的就是Normal版本,请[联系QingFeng](#report)。

### Please update your game to play on this server. {#client-too-old}

你的客户端版本过旧。\
如果你连接的是Normal版本服务器,<mark>请更换至Legacy版本</mark>(即带有`Legacy`后缀的服务器)。\
此外,如果你使用的就是Legacy版本,证明我们的服务器均无法支持它。
> 我们的Legacy服务器支持的最低Among Us版本为<mark>2023.10.24</mark>。

### Please update your game to play in this lobby. {#client-version-wrong}

你的客户端版本不正确。\
请联系你要加入房间的房主,问问他们正确AmongUs/模组版本是什么。

### Reliable packet `number` (size=`number`) was not ack'd after `number`ms (`number` resends) {#Reliable-issue}

> 此问题与此错误类型一致：Sent 6 pings that remote has not responded to.

很抱歉,这是服务端的问题,并且此问题发生的概率较高。\
这是因为云服务商防火墙的UDP丢包问题[^1],我们无法通过服务器彻底解决他。\
但目前,我们已针对此问题采取了缓解措施,尽最大程度避免出现此问题。

Impostor也在积极尝试避免此问题。

<Links
  :items="[
    {
      name: 'Improve current SpawnTimeOut kick',
      desc: 'Issue #687',
      link: 'https://github.com/Impostor/Impostor/issues/687',
      icon: 'octicon:issue-opened-16',
      color: '#DA3633'
    }
  ]"
/>


## 一键安装器问题 {#fast-install-issue}

很抱歉,我们还没记录任何有关快速安装脚本的问题。\
但如果你遇到了相关问题,请及时报告。

> 但如果你遇到了任何有关安装器的问题且暂无人解答,我们建议你根据手动安装教程安装。

## 已知问题 {#known-issue}

### 常规版服务器中无法搜索公开房间 {#cannot-search}

目前在Impostor最新版(v1.10.3)中,Impostor还未适配AmongUs的新版匹配流程,因此暂时无法正常使用搜索功能。

目前,已有相关PR针对此问题进行修复。

<Links
  :items="[
    {
      name: 'Support new http matchmaking',
      desc: 'Pull Request #685',
      link: 'https://github.com/Impostor/Impostor/pull/685',
      icon: 'icon-park-outline:pull-requests',
      color: '#DA3633'
    }
  ]"
/>

## 其他问题 {#other-issue}

### 我该如何知道服务器是否正常在线? {#uptime}

你可以在[这里](https://app.status.qingfengawa.top)查询服务在线状态。\
除此之外,你还可以在该页面查询XtremeWave服务器上运行的所有服务。

### 没有我的问题,我该如何联系QingFeng反馈? {#report}

~~请在任意QingFeng所在的群聊(例如社长大本营、XtremeUs、杨带/ShuiHei/叨叨群)`@QingFeng`并附上你的问题。~~

请在任意QingBot(QQ`355811169`)所在的群聊(如XtremeUs、天云群)@Qingbot,并附上你的问题。
> Bot可能不会回复,但是我一定会收到此报告(其实是看日志知道的)。

[^1]: UDP丢包指的是在使用用户数据报协议（UDP）进行网络通信时，数据包在传输过程中未能到达目标地址的现象。