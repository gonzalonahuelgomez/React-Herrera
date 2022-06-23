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
        <AddCategory
          setCategories={ setCategories }
        />
        <hr/>

        <ol>
          { categories.length > 0 ?
            categories.map(category =>
              <GifGrid
                key={ category }
                category={ category }
                setCategories={ setCategories }/>
            ) : <h1 style={{textAlign: "center"}}>No hay gif para mostrar, inserte en el buscador</h1>
          }
        </ol>
      </>
  )
}

export default GifExpertApp