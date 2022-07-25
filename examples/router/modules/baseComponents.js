/** 基础组件 路由 **/

import Layout from '@/layout'
import Blank from '@/components/Blank'

const Index = () => import('@/views/base/input')

const baseComponentsRouter = {
  path: '/components',
  isStatic: true,
  component: Layout,
  name: '基础组件',
  meta: {
    title: '基础组件'
  },
  children: [
    {
      path: 'vui',
      name: '常用组件',
      component: Blank,
      meta: { title: '常用组件' },
      children: [
        {
          path: 'input',
          name: 'input',
          component: Index,
          meta: { title: '输入框组件' }
        }
      ]
    },
    {
      path: 'other',
      name: '其他',
      component: Index,
      meta: { title: '其他' }
    }
  ]
}

export default baseComponentsRouter
