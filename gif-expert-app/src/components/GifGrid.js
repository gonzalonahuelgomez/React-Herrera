import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category)
    
    return (
        <>
            <div className='flexTitle'>
                <h3 className='animate__animated animate__fadeIn'>{category}</h3>
                <button className='deleteButton'>X</button>
            </div>
            { loading && <p className='animate__animated animate__flash'>Loading...</p> }
            <div className='card-grid'>
                {
                    images.map(img => 
                        <GifGridItem
                            key={img.id}
                            {...img}/>
                    )
                }          
            </div>
        </>
    )
}

GifGrid.propTypes = {}

export default GifGrid