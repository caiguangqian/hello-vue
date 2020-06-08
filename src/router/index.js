import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login"
import Main from '../views/Main'
import UserProfile from '../views/user/Profile'
import UserList from  '../views/user/List'
//import NotFound from '../views/user/NotFound'

Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      // 配置嵌套路由
      children: [
        {path: '/user/profile/:id',name: 'UserProfile', component: UserProfile},
        {path: '/user/list',component: UserList},
      ]
    }/*,{
      path: '*',
      component: NotFound
    }*/

  ]
});
