import { useState } from 'react'
import './App.css'
import Navbar from './componenets/Navbar/nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
