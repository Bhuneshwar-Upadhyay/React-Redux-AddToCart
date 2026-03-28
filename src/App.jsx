import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './product'
import CartToggle from './components/CartToggle'

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <Header setToggle={setToggle} toggle={toggle} />


      <CartToggle toggle={toggle} setToggle={setToggle} />


      <Product />
    </>
  )
}

export default App
