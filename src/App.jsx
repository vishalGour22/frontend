import React, { useState } from 'react'
import NavBar from './components/NavBar.jsx/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPop from './components/LoginPop/LoginPop'

const App = () => {
const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPop  setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>

  )
}


export default App
