import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category, setCategories }) => {

    const { data:images, loading } = useFetchGifs(category)

    const removeCategory = ({category}) => {        
            setCategories(cat => cat.filter(item => item !== category))
    }
    
    return (
        <>
            <div className='flexTitle'>
                <h3 className='animate__animated animate__fadeIn'>{category}</h3>
                <button className='deleteButton' onClick={ () => removeCategory({category})}>X</button>
            </div>
            { loading && <p className='animate__animated animate__flash'>Loading...</p> }
            <div className='card-grid'>
                {
                    images.map(img => 
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }          
            </div>
        </>
    )
}

export default GifGrid