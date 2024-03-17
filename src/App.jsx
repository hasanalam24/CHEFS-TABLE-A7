
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'
import WantCook from './Components/WantCook/WantCook'
import toast, { Toaster } from 'react-hot-toast'


function App() {

  const [cooks, setCooks] = useState([])

  const [counts, setCounts] = useState(0)
  const selectedCount = () => {
    setCounts(counts + 1)
  }
  console.log(counts)


  const handleClick = (c) => {

    const xRepeat = cooks.find(item => item.recipe_id == c.recipe_id)

    if (!xRepeat) {
      const newCart = [...cooks, c]
      setCooks(newCart)

    }
    else {
      toast.error("Oh! No! This item already added")
    }

  }

  const removeItem = (id) => {
    // console.log('paiso', id)
    const preparingCooking = cooks.filter(singleItem => singleItem.recipe_id !== id)
    setCooks(preparingCooking)

  }

  return (
    <div className='container mx-auto'>

      <Header></Header>
      <Banner></Banner>

      <div className='text-center'>
        <h1 className="text-4xl text-[#150B2B] font-semibold text-center mt-8">Our Receipe</h1>
        <p className="w-3/4 mx-auto text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ea debitis facere voluptatibus officia labore, aspernatur laborum, recusandae nisi illo dolor? Dolor porro voluptate quod recusandae non! Voluptates, aut magnam.</p>
      </div>

      <Toaster position="top-right"></Toaster>
      <div className='flex'>

        <Cards handleClick={handleClick} selectedCount={selectedCount}></Cards>
        <WantCook cooks={cooks} removeItem={removeItem}></WantCook>
      </div>

    </div>
  )
}

export default App
