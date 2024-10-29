// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import Games from './pages/Games'
import Movies from './pages/Movies'
import Profile from './pages/Profile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}> </Route>
          <Route path='/games'  Component={Games}> </Route>
          <Route path='/movies' Component={Movies}> </Route>
          <Route path='/profile'  Component={Profile}> </Route>
        </Routes>
    </>
  )
}

export default App
