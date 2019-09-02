import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 一级路由
import home from '@/view/home/home'
import login from '@/view/login/login'
import editPassworld from "@/view/editpassworld/editpassworld"
// 二级路由
import editinfo from '@/view/editinfo/editinfo'
import newquestion from '@/view/newquestion/newquestion'  //问卷填写首页
import newquestionhome from '@/view/newquestionhome/newquestiohome' //当前问卷页
import statistical from '@/view/statistical/statistical'
import newquestapproval from '@/view/newquestionapproval/newquestionapproval'
import newquestadmin from '@/view/newquestionadmin/newquestionadmin'
import historyquestionnaire from '@/view/historyquestionnaire/historyquestionnaire'

Vue.use(Router)
export default new Router({
  linkActiveClass: "active",
  mode: 'history',
  base: "/customers/ndrcgov/dist/",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: "/newquestionhome",
      children: [
        {
          path: '/newquestionhome',
          name: 'newquestionhome',
          component: newquestionhome,
          meta: {
            title: '当前问卷',
            requiresAuth: true,
            roleId: 1,
          }
        },
        {
          path: '/historyquestionnaire',
          name: 'historyquestionnaire',
          component: historyquestionnaire,
          meta: {
            title: '历史问卷',
            requiresAuth: true,
            roleId: 1,
          }
        },
        {
          path: '/statistical',
          name: 'statistical',
          component: statistical,
          meta: {
            title: '统计分析',
            requiresAuth: true,
            roleId: 1,
          }
        },
        {
          path: '/newquestion',
          name: 'newquestion',
          component: newquestion,
          meta: {
            title: '问卷作答',
            requiresAuth: true,
            roleId: 1,
          }
        },
        {
          path: '/editinfo',
          name: 'editinfo',
          component: editinfo,
          meta: {
            title: '编辑信息',
            requiresAuth: true,
            roleId: 1,
          }
        },
        {
          path: '/newquestapproval',
          name: 'newquestapproval',
          component: newquestapproval,
          meta: {
            title: '当前问卷（表格）2',
            requiresAuth: true,
            roleId: 1,
          }
        },
        {
          path: '/newquestadmin',
          name: 'newquestadmin',
          component: newquestadmin,
          meta: {
            title: '当前问卷完成情况',
            requiresAuth: true,
            roleId: 1,
          }
        }
      ]
    },
    {
      path: '/login',
      name: "login",
      component: login
    },
    {
      path: '/editPassworld',
      name: "editPassworld",
      component: editPassworld
    },
  ],
  linkActiveClass: "activeclass",
})
