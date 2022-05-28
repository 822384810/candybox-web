import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router' 

// 1. 定义路由组件.
import login from '/src/view/login.vue'
import index from '/src/view/index-amis.vue'
import blank from '/src/view/blank.vue'
// import user_user from '/src/view/user/user.vue'
// import user_role from '/src/view/user/role.vue'
// import user_res from '/src/view/user/res.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { 
        path: '/', component: login 
    },
    {
        path: '/index', 
        component: index,
        children:[
            // { path: '/user/user', component: blank },
            // { path: '/user/role', component: blank },
            // { path: '/user/res', component: blank },
            // { path: '/user/oauth', component: blank },
            { path: '/page/:id', component: blank}
        ]
    },
    // { path: '/user/user', component: user_user },
    // { path: '/user/role', component: user_role },
    // { path: '/user/res', component: user_res },
    
]
  
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
    
})


export default router



