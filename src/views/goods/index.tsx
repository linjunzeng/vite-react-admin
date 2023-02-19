import { Outlet } from 'react-router-dom'
export default function Index() {
    return (
        <div>
            <div>goods</div>
            <Outlet />
        </div>
    )
}