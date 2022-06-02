import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs()
    }, [])
    
    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=682MJ9o1nM0YXrVg5MP7HKwC1x7mFc7V'
        const resp = await fetch(url)
        const { data } = await resp.json()

        const gifs = data.map(({ id,title,images }) => {
            return({
                id,
                title,
                url: images?.downsized_medium.url
            })
        })

        setImages(gifs)        
    }

    return (
        <div>
            <h3>{category}</h3>
            {
                images.map(img => 
                    <GifGridItem
                        key={img.id}
                        {...img}/>
                )
            }          
        </div>
    )
}

GifGrid.propTypes = {}

export default GifGrid