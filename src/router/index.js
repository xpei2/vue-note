import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/main/'
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('_vie/Main/Main'),
        meta: {
            title: '首页'
        },
    },
    {
        path: '/example/:id',
        name: 'example',
        component: () => import('_vie/Example/Example'),
        meta: {
            title: '实例笔记'
        },
    },
    {
        path: '/txtnote',
        name: 'txtnote',
        component: () => import('_vie/TxtNote/TxtNote'),
        meta: {
            title: 'txt笔记'
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('_vie/Profile/Profile'),
        meta: {
            title: '个人中心'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
// 前置钩子(guard)
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next();
  })
export default router