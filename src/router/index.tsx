import { ReactNode, lazy } from 'react'
import { Route } from 'react-router-dom'

import Home from '../views/Home'
import About from '../views/About'
import Goods from '../views/goods/index'
import Create from '../views/goods/Create'
import Detail from '../views/goods/Detail'

export type tRoute = {
    path: string
    element: ReactNode
    match?: any
    children?: tRoute[]
}

export const routesList:tRoute[] = [
    {
        path: '/',
        element: <Home/>,
        match: {
            title: '首页'
        }
    },
    {
        path: '/about',
        element: <About/>,
        match: {
            title: '关于我们'
        }
    },
    {
        path: '/goods',
        element: <Goods/>,
        match: {
            title: '商品'
        },
        children: [   
            {
                path: ':id',
                element: <Detail/>,
                match: {
                    title: '商品详情'
                }
            },
            {
                path: 'create',
                element: <Create/>,
                match: {
                    title: '新建商品'
                }
            }
        ]
    }
]

export function createRoute(routesList:tRoute[]){
    return routesList.map(({ path, element, children }: tRoute) => {
        return (
            <Route path={path} element={element} key={path}>
                { children && children.length && createRoute(children)}
            </Route>
        )
    })
}