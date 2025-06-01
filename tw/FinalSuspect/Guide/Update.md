---
title: 更新
order: 2
---

# 更新 {#update}

## 自動更新 {#auto-update}

FinalSuspect已於遊戲內<mark>內建更新檢查</mark>,每次啟動將自動檢查更新。\
有更新時會要求您更新,否則您無法繼續遊玩。

:::tip

Release版本與PublicBeta(也可稱作Canary)版本的更新檢查邏輯不同。\
Release不會要求您更新到Canary版本,而Canary則不會進行更新檢查。

:::

## 手動更新 {#manual-update}

:::warning

如非必要,我們建議您自動更新。

:::

若遇上更新檢查失敗 / 下載出現問題也可以嘗試手動更新。

造訪Release頁面,下載最新版本的dll檔案。

<Links
:items="[
 {
   name: '在GitHub上获取发行版',
   link: 'https://github.com/XtremeWave/FinalSuspect/release',
   icon: 'codicon:github-inverted',
   alt: 'Github'
 }
]"
/>

打開AmongUs根目錄,再繼續打開`BepInEx\plugins`資料夾。\
將下載的dll檔替換掉原有的dll檔。

至此,更新結束。