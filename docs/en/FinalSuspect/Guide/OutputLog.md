# 导出日志 {#outputlog}

## 自动导出 {#auto-output}

你可以在**Final Suspect功能**中选择**输出日志**,随后FinalSuspect将打开输出日志所在的文件夹。

有关自动导出日志的功能介绍,请查阅[此篇文档](../Features/DumpLog)。

:::tip

FinalSuspect的输出目录位于下方路径:

```
%APPDATA%\..\LocalLow\Innersloth\Among Us\FinalSuspect\Logs\Final Suspect-logs
```

您可以按下`Win` + `R`,并粘贴这串路径来手动打开。

:::

## 手动查看 {#manual-view}

如果你无法打开设置页面,你也可以选择手动查看日志。

启动Steam,在库页面中选择**Among Us**,点击右侧的**设置图标**,选择**管理**,随后选择**浏览本地文件**。\
Steam将打开Among Us根目录。

打开`BepInEx`文件夹,其中的`LogOutput.log`便是日志文件。\
该文件将随着你重新启动FinalSuspect**自动清除**。