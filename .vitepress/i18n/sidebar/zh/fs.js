import { defineConfig } from 'vitepress';
export const fsModSidebarConfig = defineConfig([
    {
        items: [
            {
                text: '简介',
                link: '/FinalSuspect/',
            },
            {
                text: '教程',
                base: '/FinalSuspect/Guide/',
                collapsed: false,
                items: [
                    {
                        text: '安装',
                        link: 'Installation',
                    },
                    {
                        text: '更新',
                        link: 'Update',
                    },
                    {
                        text: '导出日志',
                        link: 'OutputLog',
                    },
                ],
            },
            {
                text: '功能',
                base: '/FinalSuspect/Features/',
                collapsed: false,
                items: [
                    {
                        text: '输出日志',
                        link: 'DumpLog',
                    },
                    {
                        text: '清空自动日志',
                        link: 'ClearAutoLogs',
                    },
                    {
                        text: '切换原版',
                        link: 'UnloadMod',
                    },
                    {
                        text: '音频管理',
                        link: 'AudioManagementOptions',
                    },
                ],
            },
            {
                text: '选项',
                base: '/FinalSuspect/Options/',
                collapsed: true,
                items: [
                    {
                        text: '解锁帧数限制',
                        link: 'UnlockFPS',
                    },
                    {
                        text: '豆子形象切换',
                        link: 'ChangeOutfit',
                    },
                    {
                        text: '踢出没有登录的玩家',
                        link: 'KickPlayerFriendCodeNotExist',
                    },
                    {
                        text: '踢出被封禁的玩家',
                        link: 'KickPlayerInBanList',
                    },
                    {
                        text: '踢出使用违规昵称的玩家',
                        link: 'KickPlayerWithDenyName',
                    },
                    {
                        text: '屏蔽违禁词',
                        link: 'SpamDenyWord',
                    },
                    {
                        text: '人满自动开始游戏',
                        link: 'AutoStartGame',
                    },
                    {
                        text: '结束时自动返回大厅',
                        link: 'AutoEndGame',
                    },
                    {
                        text: '禁用原版游戏音乐',
                        link: 'DisableVanillaSound',
                    },
                    {
                        text: '禁用反作弊',
                        link: 'DisableFAC',
                    },
                    {
                        text: '展示玩家平台与客户端信息',
                        link: 'ShowPlayerInfo',
                    },
                    {
                        text: '使用模组鼠标光标',
                        link: 'UseModCursor',
                    },
                    {
                        text: '快速启动模式',
                        link: 'FastBoot',
                    },
                ],
            },
            {
                text: '疑难解答',
                link: '/FinalSuspect/FAQ',
            },
        ],
    },
]);
