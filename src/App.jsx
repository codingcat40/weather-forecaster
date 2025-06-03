import './App.css'
import { Routes, Route } from 'react-router'

import Home from './components/Home'
import AboutAPI from './components/AboutAPI'

function App() {

  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about-api' element={<AboutAPI />}/>
   </Routes>
  )
}

export default App
