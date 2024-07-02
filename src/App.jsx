import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './component/First'
import Rg from './component/Rg'
import Tab from './component/Tab'
import Navabar from './component/Navabar'
import { Route, Routes } from 'react-router-dom'
import Statebasic from './component/Statebasic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>albin</h1>
      <Rg/>
      <Tab/> */}
      <Navabar/>
      <Routes>
        <Route path='/f'element={<First/>}/>
        <Route path='/r' element={<Rg/>}/>
        <Route path='/t' element={<Tab/>}/>
        <Route path='/s' element={<Statebasic/>}/>
      </Routes>
          </>
  )
}

export default App
