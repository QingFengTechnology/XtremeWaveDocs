---
title: 版本选择
order: 2
---
# 版本选择 {#Version-Choose}

## 区域选择

我们目前提供2个服务器,分别为十堰和北京。\
我们对此并不做推荐,因为每个人的网络都不同,建议<mark>选相对而言延迟更低的</mark>即可。

## 版本选择

<mark>我们统一了服务器版本,现在,基本大部分AmongUs版本都支持一个版本`Next`上运行。</mark>

你可以在下面两个表格查看这个服务器版本的详细配置和AmongUs版本支持性。

::: details 服务器版本差异

|           项目           |                     Next                     |
| :----------------------: | :--------------------------------------------: |
|     玩家信息获取[^4]     |        <Badge type="tip" text="完整" />        |
|    基于好友代码的封禁    |      <Badge type="danger" text="不支持" />       |
|    基于 IP 地址的封禁    |      <Badge type="warning" text="依赖于服务器" />      |
|   基于 PUID 的封禁[^5]   |      <Badge type="danger" text="不支持" />       |
| 基于 authInfo 的封禁[^6] |      <Badge type="danger" text="不支持" />       |
|    强制踢人、解散房间    |        <Badge type="danger" text="不支持" />        |
|     数据隐私保护     |        <Badge type="tip" text="必备" />        |
|     聊天信息获取     |        <Badge type="tip" text="支持" />        |
|    结束时获胜阵营获取     |        <Badge type="tip" text="支持" />        |
|    快速安装、简单易用    | <Badge type="tip" text="是" /> |
|       公开大厅搜索       |     <Badge type="tip" text="支持" />      |
|    广泛游戏版本支持    | <Badge type="tip" text="是" /> |
|     服务器仍持续维护     |       <Badge type="tip" text="维护中" />       |
|    插件仍持续维护[^7]    |       <Badge type="tip" text="维护中" />       |
|    自定义房间代码[^8]    |        <Badge type="tip" text="支持" />        |
|     Reactor API[^9]      |     <Badge type="tip" text="支持" />      |

:::

::: details AmongUs版本支持情况

|   版本号   |  发布日期  |              Secure              |              Normal              |              Legacy              |
| :--------: | :--------: | :------------------------------: | :------------------------------: | :------------------------------: |
|   16.1.0   | 2025.6.10  |  <Badge type="tip" text="✓" />   |  <Badge type="tip" text="✓" />   | <Badge type="danger" text="✕" /> |
|   16.0.5   | 2025.5.20  |  <Badge type="tip" text="✓" />   |  <Badge type="tip" text="✓" />   | <Badge type="danger" text="✕" /> |
|   16.0.2   |  2025.4.3  | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   | <Badge type="danger" text="✕" /> |
|   16.0.0   | 2025.3.25  | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   | <Badge type="danger" text="✕" /> |
| 2024.11.26 | 2024.11.19 | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   | <Badge type="danger" text="✕" /> |
| 2024.10.29 | 2024.10.22 | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   | <Badge type="danger" text="✕" /> |
|  2024.9.4  |  2024.9.4  | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   | <Badge type="danger" text="✕" /> |
| 2024.8.13  | 2024.8.13  | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   | <Badge type="danger" text="✕" /> |
| 2024.6.18  | 2024.6.18  | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   | <Badge type="danger" text="✕" /> |
|  2024.6.4  |  2024.6.4  | <Badge type="danger" text="✕" /> | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   |
|  2024.3.5  |  2024.3.5  | <Badge type="danger" text="✕" /> | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   |
| 2023.11.28 | 2023.11.28 | <Badge type="danger" text="✕" /> | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   |
| 2023.10.24 | 2023.10.24 | <Badge type="danger" text="✕" /> | <Badge type="danger" text="✕" /> |  <Badge type="tip" text="✓" />   |

:::tip

未在此版本列出的版本名称则表示不支持。

:::

[^4]: 包括：IP地址、AmongUs版本号、玩家所属平台、PUID、好友代码。<br>我们不会将您的数据交给第三方处理。
[^5]: 至少就目前技术而言，PUID还无法被伪造。<br>也就是说可以从根源上封禁开挂者,防止其再次进服。
[^6]: authInfo是服务器为了区分玩家而创建的ID,因为原版AmongUs不会向私服发送好友代码。<br>通过authInfo封禁可以有效阻止玩家二次加入服务器。
[^7]: 我们会通过插件来改善您的游玩体验,例如从服务端控制的房间代码就是通过插件实现的。
[^8]: 这是从服务器端控制的房间代码,我们还没法实现从客户端自定义房间代码。
[^9]: [Reactor](https://github.com/NuclearPowered/Reactor)是AmongUs的模组API,为模组提供了许多功能。<br>但使用此插件的主流模组似乎并不多。