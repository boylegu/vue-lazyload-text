import Vue from 'vue'
import Router from 'vue-router'

import DirectiveDemoRouter from './directive'
import CompomentsDemoRouter from './compoment'


Vue.use(Router)


export const constantRouterMap = [
  DirectiveDemoRouter,
  CompomentsDemoRouter
]

const index = new Router({
  routes: constantRouterMap,
})
export default index
