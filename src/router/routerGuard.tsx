import { ReactNode, useEffect } from "react";
import { tRouteInfoItem, routesList } from '@/router'
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";

export default function Guard(props: {route: tRouteInfoItem, children: ReactNode}){
    
    const { path, meta = {} } = props.route
    const { auth, title} = meta
    const navigate = useNavigate()
    const location = useLocation()
    const mathchs = matchRoutes(routesList, location);
    console.log('---------------')
    console.log(props);
    console.log(mathchs)
    console.log(location)
    
    // 标题
    document.title = meta?.title || '后台管理'
    
    if(auth){

    } else {
        
    }

    useEffect(() => {
    }, [location.pathname])
    
    return <div>{props.children}</div>
}