import { NavLink as Link } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd'

export default function Header() {
    const items: MenuProps['items'] = [
        {
            label: '商品管理',
            key: 'goods',
            icon: <AppstoreOutlined />,
            children: [
                {
                    label: <Link to='/goods/list'>商品列表</Link>,
                    key: 'goodsList',
                },
                {
                    label: <Link to='/goods/123'>列表详情</Link>,
                    key: 'goodsDetail'
                },
                {
                    label: <Link to='/goods/add'>新建列表</Link>,
                    key: 'goodsAdd'
                }
            ]
        },
        {
            label: <Link to='/home'>首页</Link>,
            key: 'home',
            icon: <MailOutlined />
        },
        {
            label: <Link to='/about'>关于我们</Link>,
            key: 'about',
            icon: <SettingOutlined />
        }
    ]

    return (<div>
        <Menu
            mode="inline"
            theme="dark"
            items={items}
        />
    </div>)
}