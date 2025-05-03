import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './componenets/Navbar/nav.jsx'

function App() {

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
