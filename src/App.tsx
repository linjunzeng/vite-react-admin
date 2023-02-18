import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {count + 1}
      <button onClick={() => setCount(10)}>++</button>
    </div>
  )
}

export default App
