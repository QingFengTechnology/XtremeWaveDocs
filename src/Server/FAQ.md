---
title: 疑难解答
order: 4
---
# 疑难解答 {#FAQ}

## 连接问题 {#connection-issue}

### The remote sent a disconnect request {#secure-no-plugin}

此问题目前只发现在`Secure`服务器会出现。\
这是因为我们无法验证你的身份导致的。

可能是因为:
- 你可能没有安装我们的Nebula插件包。
- 你的AmongUs版本过老(需要≥16.0.5)。

### Your client is too new, please update your Impostor server to play. {#client-too-new}

你的客户端版本过新。\
如果你连接的是Legacy版本的服务器,<mark>请更换至Normal版本</mark>(即带`Normal`后缀的服务器)。\
如果你连接的就是Normal版本,请联系QingFeng。

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

这可能与你的网络环境有关,但更多是服务端的问题。\
这是因为云服务商防火墙的UDP丢包问题,我们无法通过服务器彻底解决他。\
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

目前,如果你遇到了这个问题,那很抱歉,你只能等待游戏结束再加入了。

## 一键安装器问题 {#fast-install-issue}

很抱歉,我们还没记录任何有关快速安装脚本的问题。\
但如果你遇到了相关问题,请及时报告。

> 但如果你遇到了任何有关安装器的问题且暂无人解答,我们建议你根据手动安装教程安装。

## `身份验证时发生了错误`系列问题 {#auth-fail}

### 代码：403 {#auth-code-403}

你被服务器封禁了。\
你可能做出了出格的举动,但大多数原因是被误封了。\
如果你能证明自己没干坏事,请联系QingFeng解封。

### 代码：502 {#auth-code-502}

服务器掉线了。\
这是服务器端的问题,说明此刻服务器正在维护/遭到攻击。\
你可以暂时选择其他区域的服务器游玩。
> 你还可以通过[这里](https://status.qingfengawa.top/status/main)查看服务器是否可被正常访问。\
> 我们还在部分QQ群聊设置了通知Bot,在服务器出现故障时会发送消息提醒。

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

<!--
## 其他问题 {#other-issue}

### 我该如何知道服务器是否正常在线? {#uptime}

你可以在[这里](https://app.status.qingfengawa.top)查询服务在线状态。\
除此之外,你还可以在该页面查询XtremeWave服务器上运行的所有服务。
-->