import { Router } from '@/router/index'
import Layout from '@/layout'

import '@/App.css'

function App() {
  return (
    <div id="app">
      <Layout>
        <Router />
      </Layout>
    </div>
  )
}

export default App
