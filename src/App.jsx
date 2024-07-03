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
import New from './component/New'
import FormBasics from './component/FormBasics'
import ApiGet from './component/ApiGet'
import Jewl from './component/Jewl'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>albin</h1>
      <Rg/>
      <Tab/> */}
      <Navabar/>
      <Routes>
        <Route path='/l'element={<First data ={{name:"Albin" ,age:10}}/>}/>
        <Route path='/r' element={<Rg data={{Name:"Alex",age:20,place:"EkM"}}/>}/>
        <Route path='/t' element={<Tab/>}/>
        <Route path='/s' element={<Statebasic/>}/>
        <Route path='/n' element={<New/>}/>
        <Route path='/f' element={<FormBasics/>}/>
        <Route path='/a' element={<ApiGet/>}/>
        <Route path='/j' element={<Jewl/>}/>
      </Routes>
          </>
  )
}

export default App
