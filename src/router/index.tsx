import { ReactNode } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Guard from '@/router/routerGuard'

import Home from '../views/Home'
import About from '../views/About'
import Goods from '../views/goods/index'
import Create from '../views/goods/Create'
import Detail from '../views/goods/Detail'
import List from '../views/goods/List'

export type tRouteInfoItem = {
    path: string
    component: () => JSX.Element
    element?: ReactNode
    meta?: any
    children?: tRouteInfoItem[]
}

export type tRoute = {
    path: string
    element: ReactNode
    meta?: any
    children?: tRoute[]
}

// 路由数据数组
export const routesList:tRouteInfoItem[] = [
    {
        path: '/',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于我们'
        }
    },
    {
        path: '/goods',
        component: Goods,
        meta: {
            title: '商品'
        },
        children: [   
            {
                path: ':id',
                component: Detail,
                meta: {
                    title: '商品详情'
                }
            },
            {
                path: 'create',
                component: Create,
                meta: {
                    title: '新建商品'
                }
            },
            {
                path: 'list',
                component: List,
                meta: {
                    title: '商品列表'
                }
            }
        ]
    }
]

// 处理路由信息
export function handlerRoute(routesList:tRouteInfoItem[]){
    return routesList.map((routesItem:tRouteInfoItem) => {
        const {path, component, children, meta} = routesItem
        let route:tRoute = {
            path,
            element: <Guard route={routesItem}><routesItem.component /></Guard>,
            meta
        }

        if(children){
            route.children = handlerRoute(children)
        }

        return route
    })
}

Guard
// 生成路由 Route
export function Router(){
    return useRoutes(handlerRoute(routesList))
}