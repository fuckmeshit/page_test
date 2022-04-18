import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import UserManage from '../components/usermanage.vue'
import MvManage from '../components/moviemanage.vue'
import UpdateUser from '../components/update.vue'
import movieUpdate from '../components/movieupdate.vue'
import commentManage from '../components/comment.vue'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/index'
        },
        {
            path:'/index',
            name:'Index',
            component:Index,
            children:[{
                path:'usermanage',
                name:'UserManage',
                component:UserManage,
            }
            ,{
                path:'commentmanage',
                name:'评论管理',
                component:commentManage
            },
            {
                path:'updateuser',
                name:'userUpdate',
                component:UpdateUser
            },
            {
                path:'mvmanage',
                name:'MvManage',
                component:MvManage
            },
            {
                path:'updatemovie',
                name:'更新电影',
                component:movieUpdate
            }
            
            
        ]
        }
    ]
})