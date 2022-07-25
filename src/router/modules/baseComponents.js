/** 基础组件 路由 **/

import Layout from '@/layout'
import Blank from '@/components/Blank'

// 日期组件
const Home = () => import('@/pages/home')
const Form= ()=> import('@/pages/form')

const baseComponentsRouter = {
  path: '/base-components',
  isStatic: true,
  component: Layout,
  name: '基础组件',
  meta: {
    title: '基础组件'
  },
  children: [
    {
      path: 'home',
      name: '常用组件',
      component: Blank,
      meta: { title: '常用组件' },
      children: [
        {
          path: 'home',
          name: '首页',
          component: Home,
          meta: { title: '首页' }
        }
      ]
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
      meta: { title: 'form组件' }
    },
    
    
  ]
}

export default baseComponentsRouter
