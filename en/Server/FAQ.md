---
title: 疑难解答
order: 3
---

# 疑难解答 {#FAQ}

## 连接问题 {#connection-issue}

## 因配置文件过时导致的无法连接 {#region-too-old}

我们于6月13日凌晨更新了服务器,这是一个较大改动,你需要重新安装此配置文件才能继续游玩。\ <mark>如果你在6月12日能正常游玩,但13日就不行了,请先根据文档重新安装一次配置文件。</mark>

### Your client is too new, please update your Impostor server to play. {#client-too-new}

你的客户端版本过新。\
如果你连接的是Legacy版本的服务器,请更换至Normal版本(即带`Normal`后缀的服务器)。\
如果你连接的就是Normal版本,请在任意QingFeng所在的群聊(例如社长大本营、XtremeUs、杨带/ShuiHei/叨叨群)`@QingFeng`并附上错误信息。

### Please update your game to play on this server. {#client-too-old}

你的客户端版本过旧。\
如果你连接的是Normal版本服务器,请更换至Legacy版本(即带有`Legacy`后缀的服务器)。\
此外,如果你使用的就是Legacy版本,证明我们的服务器均无法支持它。

> 我们的Legacy服务器支持的最低Among Us版本为<mark>2023.10.24</mark>。

## 已知问题 {#known-issue}

### 山东或个别地区无法正常连接、连接延迟异常 {#ShanDong-issue}

我们已收到了相关问题的报告,并尝试了部分解决措施。\
目前,我们通过延长服务器的`SpawnTimeout`和`ConnectionTimeout`最大值来暂时解决这个问题。\ <mark>但这个方案有代价,目前此值已经超出了推荐范围,这会更容易导致高延迟和小绿人问题。</mark>

> 此外,这个方法也没有完全解决此问题,我们在6月11日的日志中仍注意到因SpawnTimeout导致被踢出的问题。

~~很遗憾,<mark>我们无法的解决此问题</mark>。~~\
目前,此问题正等待修复。 <Links
:items="[
 {
   name: 'Abnormal kickout due to SpawnTimeout',
   desc: 'Issue #693',
   link: 'https://github.com/Impostor/Impostor/issues/693',
   icon: 'pajamas:issue-close',
   color: '#656C76'
 },
 {
   name: 'Improve current SpawnTimeOut kick',
   desc: 'Issue #687',
   link: 'https://github.com/Impostor/Impostor/issues/687',
   icon: 'octicon:issue-opened-16',
   color: '#DA3633'
 }
]"
/>

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

### 没有我的问题,我该怎么办? {#report}

联系QingFeng。

> 请在任意QingFeng所在的群聊(例如社长大本营、XtremeUs、杨带/ShuiHei/叨叨群)`@QingFeng`并附上错误信息。