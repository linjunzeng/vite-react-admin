import { ReactNode, useEffect } from "react";
import { tRouteInfoItem } from '@/router'
import { useLocation, useNavigate, Navigate} from "react-router-dom";
import { findIntersection } from '@/utils'
let token = '123'
const authList = ['a', 'b', 'c']

export default function Guard(props: {route: tRouteInfoItem, children: ReactNode}){
    
    const { path, meta, children = [] } = props.route
    const { title, isLogin, auth} = meta
    const navigate = useNavigate()
    const { pathname } = useLocation()
    console.log('---------------')
    console.log(props);
    console.log(location)


    // 非完整路由默认重定向 第一个子路由 
    if(children.length !== 0 && pathname.split('/').reverse()[0] === path.replace('/', '')){
        return <Navigate to={`${pathname}/${children[0].path}`} />
    }

    // 非完整路由不处理
    if(children.length !== 0){
        return <div>{props.children}</div>
    }
    
    
    // 登录
    if(isLogin && token === ''){
        return <Navigate to={`/login?redirect=${pathname}`} />
    }
    
    // 权限
    if(auth && !findIntersection(auth, authList)){
        return <Navigate to={`/notAuth`} />
    }
    
    // 标题
    document.title = title || '后台管理'
    
    return <div>{props.children}</div>
}