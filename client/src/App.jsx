import React from 'react'
import Navbar from './components/shared/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/Home'
import Footer from './components/shared/Footer'
import Jobs from './components/Jobs'
import Browser from './components/Browser'
import Profile from './components/ui/Profile'
import Descriptiopage from './components/ui/Descriptiopage'

const App = () => {
  return (
    
     <>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/browse' element={<Browser/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/detail/:id' element={<Descriptiopage/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
     </>
  )
}

export default App