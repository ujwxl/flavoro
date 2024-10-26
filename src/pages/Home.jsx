import React from 'react'
import Navbar from '../components/Navbar'
import FoodItems from '../components/FoodItems'
import CategoryMenu from '../components/CategoryMenu'
import Cart from '../components/Cart'

function Home() {
  return (
  <>
    <Navbar />
    <CategoryMenu />
    <FoodItems />
    <Cart />
  </>

  )
}

export default Home