import { ReactNode } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Guard from '@/router/routerGuard'

import Login from '../views/Login'
import Home from '../views/Home'
import About from '../views/About'
import Goods from '../views/goods/index'
import Create from '../views/goods/Create'
import Detail from '../views/goods/Detail'
import List from '../views/goods/List'
import NotAuth from '../views/NotAuth'
import NotFound from '../views/NotFound'

export type tRouteInfoItem = {
    path: string
    component: () => JSX.Element
    meta: {
        title: string
        isLogin?: boolean
        auth?: string | string[]
    }
    children?: tRouteInfoItem[]
}

export type tRoute = {
    path: string
    element: ReactNode
    meta: {
        title: string
        isLogin: boolean
        auth: string | string[]
    }
    children?: tRoute[]
}

// 路由数据数组
export const routesList: tRouteInfoItem[] = [
    {
        path: '/',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录',
            isLogin: false
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
                path: 'list',
                component: List,
                meta: {
                    title: '商品列表'
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
                path: ':id',
                component: Detail,
                meta: {
                    title: '商品详情'
                }
            }
        ]
    },
    {
        path: 'notAuth',
        component: NotAuth,
        meta: {
            title: '没有权限'
        }
    },
    {
        path: '*',
        component: NotFound,
        meta: {
            title: '404',
            isLogin: false
        }
    }
]

// 处理路由信息
export function handlerRoute(routesList: tRouteInfoItem[]) {
    return routesList.map((routesItem: tRouteInfoItem) => {
        const { path, component, children, meta } = routesItem
        const { title = '', isLogin = true, auth = '' } = meta

        // 路由信息设置默认值
        meta.title = title
        meta.isLogin = isLogin
        meta.auth = auth

        let route: tRoute = {
            path,
            element: <Guard route={routesItem}><routesItem.component /></Guard>,
            meta: meta as tRoute['meta']
        }

        if (children) {
            route.children = handlerRoute(children)
        }

        return route
    })
}

// 生成路由 Route
export function Router() {
    return useRoutes(handlerRoute(routesList))
}