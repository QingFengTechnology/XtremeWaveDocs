---
title: 服务器
order: 1
---
# 服务器维护日志

## 2025.7.13

- 优化欢迎消息与服务器命令消息。
- 小规模测试重构后北京服务器。

## 2025.7.11 <Badge type="warning" text="Breaking Changes" /> <Badge type="warning" text="仅十堰更新" />

- 使用了全新技术的服务器。
- 将Normal与Legacy服务器合并,并将名称调整为Next。
  - 因服务器合并,不再需要针对自定义房间代码优化调整,改为默认方式获取。
- 新增欢迎消息与服务器命令。
- 优化了防火墙配置规则与攻击防御系统。
- 优化服务器反作弊,尝试解决反作弊误报问题。
- 优化端口策略,降低了延迟,提升了抗攻击能力。

## 2025.7.10 <Badge type="warning" text="Breaking Changes" /> <Badge type="warning" text="仅十堰更新" />

- 停止运营并移除了Secure服务器。

## 2025.6.30-1 <Badge type="warning" text="Breaking Changes" />

- 新增了一个服务器,并调整了域名访问规则。
- 再次再次优化了自定义代码的调用方法。
- <mark>自此次维护之后,文档将引导至玩家群进行下载脚本/配置文件。</mark>

## 2025.6.30 <Badge type="danger" text="更新已回滚" />

- 使用了CloudFlare作为我们的CDN提供商。

## 2025.6.25

- 再次优化了自定义房号的获取方法。
- 再次更新了Secure服务器的版本,修正了已知问题。

## 2025.6.24

- 为Legacy支持自定义房间代码。
- 优化了三个版本服务器自定义房间代码的获取方法,降低后续维护难度。
- 对Secure服进行了版本升级,包含了诸多改进与已知问题修复。
- <mark>从此次维护之后,每日凌晨4点将自动重启服务器并清空日志。</mark>

## 2025.6.23 <Badge type="warning" text="Breaking Changes" />

- 本次维护新增了Secure服务器。
  - 此服务器支持了DTLS,这意味着我们可以获取玩家信息了。
  - 但同时,此服务器的AmongUs版本需求更高,还需要额外步骤才可正常游玩。
- 调整了服务器端口号。

## 2025.6.19

- 在Normal和Legacy服务器支持了[Reactor API](https://github.com/NuclearPowered/Reactor)。
- Normal版本<mark>额外支持了从服务器控制的自定义房间代码</mark>。

## 2025.6.18

- 为Normal版本(实验性)支持了<mark>公开大厅搜索功能与筛选系统</mark>。