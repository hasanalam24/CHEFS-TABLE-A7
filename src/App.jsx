
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'
import WantCook from './Components/WantCook/WantCook'



function App() {

  const [cooks, setCooks] = useState([])
  const [cart, setCart] = useState([])

  const handleClick = (c) => {
    // console.log(c)
    // const itemAvailable = cart.find(item => item.recipe_id == c.id)
    // if (!itemAvailable) {
    //   const newCart = [...cart, c]
    //   setCooks(newCart)
    // }
    // else {
    //   alert('availabe now')
    // }
    const newCart = [...cooks, c]
    setCooks(newCart)
    // setCart([c])
  }
  // console.log(cart)
  return (
    <div className='container mx-auto'>

      <Header></Header>
      <Banner></Banner>

      <div className='text-center'>
        <h1 className="text-4xl text-[#150B2B] font-semibold text-center mt-8">Our Receipe</h1>
        <p className="w-3/4 mx-auto text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ea debitis facere voluptatibus officia labore, aspernatur laborum, recusandae nisi illo dolor? Dolor porro voluptate quod recusandae non! Voluptates, aut magnam.</p>
      </div>


      <div className='flex'>
        <Cards handleClick={handleClick}></Cards>
        <WantCook cooks={cooks}></WantCook>
      </div>

    </div>
  )
}

export default App
