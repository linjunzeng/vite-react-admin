import { Routes } from 'react-router-dom'
import { routesList, createRoute } from './router/index'

function App() {
  return (
    <div id="app">
      <Routes>{ createRoute(routesList) }</Routes>
    </div>
  )
}

export default App
