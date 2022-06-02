import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  const animes = ['Saint Seiya'/*, 'Bleach', 'Kimetsu no Yaiba'*/]
  const [categories, setCategories] = useState(animes)

  // const handleAdd = () => {
  //   let newAnime = 'HunterXHunter'
  //   setCategories(categories.concat(newAnime))
  //   setCategories([...categories, newAnime])
  // }

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
          { 
            categories.map(category =>
              <GifGrid
                key={ category }
                category={ category }/>
            )
          }
        </ol>
      </>
  )
}

export default GifExpertApp