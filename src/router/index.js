import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import UserManage from '../components/usermanage.vue'
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
                component:UserManage
            }]
        }
    ]
})