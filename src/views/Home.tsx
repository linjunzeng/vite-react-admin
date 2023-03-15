import {useState} from 'react'
import { Button, Steps } from 'antd'

export default function Home() {
    let [current, setCurrent] = useState(1)

    function stepsChange(current:number){
        setCurrent(current)
    }

    return <div>
        <Steps current={current} items={[{title: '步骤一'}, {title: '步骤二'}, {title: '步骤三'}]} onChange={stepsChange}></Steps>
        <Button>123</Button>
    </div>
}