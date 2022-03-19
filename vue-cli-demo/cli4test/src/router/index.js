import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// 安装插件
Vue.use(VueRouter)

// 解决首页菜单重复点击控制器报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  } else
    return originalPush.call(this, location).catch(err => err)
}

// 路由懒加载
const Test = () => import('../views/Test.vue');
const Home = () => import('../views/Home.vue');
const HomeNews = () => import('../views/HomeNews.vue');
const HomeMessages = () => import('../views/HomeMessages.vue');

const About = () => import( /* webpackChunkName: "about" */ '../views/About.vue');
const User = () => import('../views/User.vue');
const Profile = () => import('../views/Profile.vue');

// 配置url和组件间的映射关系
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    // 嵌套路由
    children: [
      // {
      //   path: '/',
      //   redirect: 'news'
      // }, 
      {
        path: 'news',
        component: HomeNews,
        meta: {
          title: '首页-新闻'
        },
      },
      {
        path: 'views',
        component: HomeMessages,
        meta: {
          title: '首页-新闻'
        },
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '简介'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      title: '测试'
    }
  }
]

// 创建 vue router 对象
const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  // linkActiveClass 会在视图 view 中修改 active-class 为指定值，从而来切换选中样式
  linkActiveClass: 'active'
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  // console.log(to);
  next();
})

// 全局后置钩子
router.afterEach((to, from) => {
  // console.log('全局后置钩子');
})

// 将 vue router 对象导出到 vue实例
export default router