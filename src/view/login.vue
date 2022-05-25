<template>
    <amis :amisJson="amisJson"></amis>
</template>
<script setup lang="ts">
import amis from "../components/amis_reanderer.vue";



let amisJson = 
{
    "type": "page",
    "title": "用户登录",
    "body":
    [
        {
            "type": "html",
            "html": "<div style=\"display: flex; justify-content: center; align-items: center; margin: 96px 0px 8px;\"><img src=\"/img/logo.png\" alt=\"logo\" style=\"margin-right: 8px; width: 48px;\"><span style=\"font-size: 32px; font-weight: bold;\">糖果盒</span></div><div style=\"width: 100%; text-align: center; color: rgba(0, 0, 0, 0.45); margin-bottom: 40px;\">CandyBox<br/><span style=\"color: red;\"><strong>用户登录</strong></span></div>"
        },
        {
            "type": "grid",
            "valign": "middle",
            "align": "center",
            "columns":
            [
                {
                    "lg": 2,
                    "body":
                    [
                        {
                            "type": "form",
                            "mode": "horizontal",
                            "horizontal":
                            {
                                "left": 3,
                                "right": 9
                            },
                            "title": "",
                            "submitText": "登录",
                            "body":
                            [
                                
                                {
                                    "type": "input-text",
                                    "name": "userName",
                                    "label": "用户名",
                                    "value": "admin",
                                    "required": true,
                                    "maxLength": 50
                                },
                                {
                                    "type": "input-password",
                                    "name": "userPwd",
                                    "label": "密码",
                                    "value": "12345678",
                                    "required": true,
                                    "maxLength": 128
                                },
                            ],
                            "actions":
                            [
                                {
                                    "type": "button-toolbar",
                                    "buttons":
                                    [
                                        // {
                                        //     "type": "button",
                                        //     "actionType": "link",
                                        //     "label": "注册",
                                        //     "link": "/admin/auth/form/reg"
                                        // },
                                        {
                                            "type": "button",
                                            "actionType": "submit",
                                            "label": "登录",
                                            "level": "primary"
                                        }
                                    ]
                                }
                            ],
                            "actionsClassName": "no-border m-none p-none",
                            "wrapWithPanel": true,
                            "panelClassName": "",
                            "api":
                            {
                                "url": "/api/user/web/login",
                                "method": "POST"
                            },
                            "silentPolling": false,
                            "redirect": "/index"
                        }
                    ],
                    "md": 4,
                    "valign": "middle"
                }
            ]
        }
    ]
}
</script>
