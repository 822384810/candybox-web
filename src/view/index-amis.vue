<template>
    <amis :amisJson="amisJson"></amis>
</template>
<style>
  html,
  body,
  .amis_container,.amis-scope{
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>
<script setup lang="ts">
import amis from "../components/amis_reanderer.vue";



let amisJson = 
{
    "type": "app",
    "brandName": "糖果盒",
    "header":
    {
        "type": "flex",
        "className": "w-full",
        "justify": "flex-end",
        "alignItems": "flex-end",
        "items":
        [
            {
                "type": "tpl",
                "tpl": "<div class=\"flex justify-between\"><div></div></div></div>",
                "className": "w-full"
            },
            {
                "type": "dropdown-button",
                "buttons":
                [
                    // {
                    //     "type": "button",
                    //     "actionType": "dialog",
                    //     "label": "个人信息",
                    //     "dialog":
                    //     {
                    //         "type": "dialog",
                    //         "body":
                    //         {
                    //             "type": "service",
                    //             "schemaApi":
                    //             {
                    //                 "url": "/admin/auth/form/userinfo",
                    //                 "method": "post",
                    //                 "cache": 20000,
                    //                 "responseData":
                    //                 {
                    //                     "&": "${body}"
                    //                 }
                    //             }
                    //         },
                    //         "title": "个人信息",
                    //         "size": "lg",
                    //         "actions":
                    //         []
                    //     }
                    // },
                    {
                        "type": "button",
                        "actionType": "url",
                        "label": "退出登录",
                        "url": "/",
                        "blank": false,
                    }
                ],
                "icon": "fa fa-user",
                "trigger": "hover",
                "label": "admin"
            }
        ]
    },
    "footer": "<div class=\"p-2 text-center bg-light\">Copyright © 2022 - 2022  <a href=\"https://github.com/822384810\" target=\"_blank\" class=\"link-secondary\">CandyBox</a>. All rights reserved. <a target=\"_blank\" href=\"https://github.com/822384810\" class=\"link-secondary\" rel=\"noopener\">v0.1.0</a></div> ",
    "api":"get:/user/api/user/res/menu/user/all"
}

</script>

