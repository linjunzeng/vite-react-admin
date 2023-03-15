import { Layout } from 'antd'
import RcHeader from './Header'
import RcSider from './Sider'
import logo from '../../public/vite.svg'
import './layout.scss'

const { Header, Footer, Sider, Content } = Layout
export default function Index(porps: any) {
    return (<Layout className='rc-layout'>
        <Sider>
            <div className='rc-logo'>
                <img src={logo} />
            </div>
            <RcSider></RcSider>
        </Sider>
        <Layout>
            <Header className='rc-layout-header'>
                <RcHeader></RcHeader>
            </Header>
            <Content className='rc-layout-content'>{porps.children}</Content>
            <Footer className='rc-layout-footer'>© 2015 - 2023 demo信息技术有限公司粤ICP备1520221271号-1</Footer>
        </Layout>
    </Layout>)
}