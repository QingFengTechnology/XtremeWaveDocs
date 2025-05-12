---
sidebar_position: 2
description: 您可以选择自动更新,也可以手动更新。
---
# 更新

## 自动更新

FinalSuspect已于游戏内内置更新检查,每次启动将自动检查更新。\
在有更新时会要求您更新,否则您无法继续游玩。

:::note

Release版本与PublicBeta(也可称作Canary)版本的更新检查逻辑不同。\
Release不会要求您更新到Canary版本,而Canary则不会进行更新检查。

:::

## 手动更新

若遇上更新检查失败 / 下载出现问题也可以尝试手动更新。

:::note 如非必要,我们建议您自动更新。
:::

访问[Release](https://github.com/XtremeWave/FinalSuspect/releases)页面,下载最新版本的dll文件。

:::tip

dll文件名称始终为`FinalSuspect.dll`。\
您也不应该重命名此文件。

:::

打开AmongUs根目录,再继续打开`BepInEx\plugins`文件夹。\
将下载的dll文件替换掉原有的dll文件。

:::tip 如何打开根目录请参阅[安装教程](Installation)。
:::

至此,更新结束。