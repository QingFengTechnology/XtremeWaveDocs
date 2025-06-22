---
title: 选择地区
order: 2
---
# 选择地区 {#Region}

## 地区列表 {#Region-List}

### 中国大陆(CN) {#ZH-CN}

此服务器位于中国大陆,对于中国用户来说,这是最推荐的选择。

### 香港(HK) {#ZH-HK}

香港服务器相对中国大陆服务器配置略差一些,但这是最推荐全球玩家的选择。

:::danger

我们已迁移游戏服务器至中国大陆,此地区将不再作为游戏服务器使用。

:::

### 地区选择 {#Region-Choose}

一般而言,我们推荐使用中国大陆。

::: details 各服务器配置差异

|     项目     |       ZH-CN        | ZH-HK  |
| :----------: | :----------------: | :----: |
|   带宽[^1]   |    ≈75Mbps[^2]     | 30Mbps |
| 大陆延迟[^3] |       ≈51ms        | ≈59ms  |
| 海外延迟[^3] |       ≈381ms       | ≈194ms |
|   IPv6[^4]   | :white_check_mark: |  :x:   |
| 安全防护[^5] | :white_check_mark: |  :x:   |

:::

## 版本选择 {#Version-Choose}

目前我们提供三个版本,分别为:
- Xtreme.Secure(CN)
- Xtreme.Normal(CN)
- Xtreme.Legcay(CN)

Secure版本拥有三个服务器中相对最高级的反作弊系统。\
但与此同时,连接至此服务器需要额外步骤,且此服务器只支持[Nebula](https://github.com/Dolly1016/Nebula)[^6]。
> 我们正在尝试其他方法以让其他模组能够正常在此服务器游玩。

Normal是最常规的版本,支持的版本也相对最常规。\
大部分模组(包括上文提到的模组)都适用于此服务器。

Legcay服务器是为了响应玩家需求而来的服务器。\
此服务器使用了老版本的服务器,支持的AmongUs版本相对较老[^7]。\
但我们并不推荐在此服务器上游玩[^8]。


详细的服务器差异以及支持的版本情况可以查看表格。

::: details 服务器版本差异

|           项目            |       Secure       |       Normal       |       Legcay       |
| :-----------------------: | :----------------: | :----------------: | :----------------: |
|     玩家信息获取[^9]      | :white_check_mark: | 仅 AmongUs 版本号  | 仅 AmongUs 版本号  |
|    基于好友代码的封禁     |       开发中       |        :x:         |        :x:         |
|        IP 地址获取        | 依赖于服务器[^10]  | 依赖于服务器[^10]  | 依赖于服务器[^10]  |
|    基于 IP 地址的封禁     | 依赖于服务器[^10]  | 依赖于服务器[^10]  | 依赖于服务器[^10]  |
|   基于 PUID 的封禁[^11]   |       开发中       |        :x:         |        :x:         |
| 基于 authInfo 的封禁[^12] |       开发中       |        :x:         |        :x:         |
|    强制踢人、解散房间     |       开发中       |        :x:         |        :x:         |
|        无额外条件         |        :x:         | :white_check_mark: | :white_check_mark: |
|        公开大厅搜索         |        :x:[^13]         | :white_check_mark: | :white_check_mark: |
|      服务器持续维护       | :white_check_mark: | :white_check_mark: |        :x:         |
|     插件持续维护[^14]     | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|    自定义房间代码[^15]    | :white_check_mark: | :white_check_mark: |        :x:         |
|     Reactor API[^16]      |        :x:         | :white_check_mark: | :white_check_mark: |

:::

::: details AmongUs版本支持情况

|   版本号   |  发布日期  |        Secure        |        Normal        |       Legacy       |
| :--------: | :--------: | :------------------: | :------------------: | :----------------: |
|  未来版本  |            | :grey_question:[^17] | :grey_question:[^17] |        :x:         |
|   16.1.0   | 2025.6.10  |  :white_check_mark:  |  :white_check_mark:  |        :x:         |
|   16.0.5   | 2025.5.20  |  :white_check_mark:  |  :white_check_mark:  |        :x:         |
|   16.0.2   |  2025.4.3  |         :x:          |  :white_check_mark:  |        :x:         |
|   16.0.0   | 2025.3.25  |         :x:          |  :white_check_mark:  |        :x:         |
| 2024.11.26 | 2024.11.19 |         :x:          |  :white_check_mark:  |        :x:         |
| 2024.10.29 | 2024.10.22 |         :x:          |  :white_check_mark:  |        :x:         |
|  2024.9.4  |  2024.9.4  |         :x:          |  :white_check_mark:  |        :x:         |
| 2024.8.13  | 2024.8.13  |         :x:          |  :white_check_mark:  |        :x:         |
| 2024.6.18  | 2024.6.18  |         :x:          |  :white_check_mark:  |        :x:         |
|  2024.6.4  |  2024.6.4  |         :x:          |         :x:          | :white_check_mark: |
|  2024.3.5  |  2024.3.5  |         :x:          |         :x:          | :white_check_mark: |
| 2023.11.28 | 2023.11.28 |         :x:          |         :x:          | :white_check_mark: |
| 2023.10.24 | 2023.10.24 |         :x:          |         :x:          | :white_check_mark: |
|  更早版本  |            |         :x:          |         :x:          |        :x:         |

:::

[^1]: 服务器带宽越高,便能同时承载越多玩家。
[^2]: 此服务器上下行不对等,因此我们取其平均值。
[^3]: 此延迟由[ITdog](https://www.itdog.cn)提供,取所有节点Tcping测速结果的平均值。
[^4]: 此服务器是否支持IPv6访问。
[^5]: 服务器是否使用第三方WAF来提供更强的防护能力。<br>我们使用了第三方WAF基于IP地址的封禁与完整的WAF功能。
[^6]: 此服务器原版也不支持。
[^7]: 这同时意味着它不支持新版本的AmongUs。
[^8]: 过老的服务器版本意味着其Bug也就越多,可能更容易受到攻击。<br>开发团队也不会维护此版本的Impostor。
[^9]: 包括：AmongUs版本号、玩家所属平台、PUID、好友代码。
[^10]: 此功能由服务器提供。
[^11]: 我们不知道为什么Innersloth在有了好友代码的情况下还会有PUID这种东西。<br>不过,PUID就目前技术而言无法被伪造,而好友代码是可以被伪造的。
[^12]: authInfo是服务器为了区分玩家而创建的ID,因为原版AmongUs不会向私服发送好友代码。<br>你可以理解为你在这个服务器内的专属好友代码。
[^13]: Nebula似乎从把公开大厅搜索的按钮移除了,我们也没就必要再适配了。
[^14]: 我们会通过插件来改善您的游玩体验,例如从服务端控制的房间代码就是通过插件实现的。
[^15]: 这是从服务器端控制的房间代码,我们还没法实现从客户端自定义房间代码。
[^16]: [Reactor](https://github.com/NuclearPowered/Reactor)是AmongUs的模组API,为模组提供了许多功能。<br>但使用此插件的主流模组似乎并不多。
[^17]: 若AmongUs推出了小版本则无需适配就默认支持,大版本更新则不支持。