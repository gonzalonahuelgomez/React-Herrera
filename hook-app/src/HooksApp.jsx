import React from 'react'
import CounterApp from './01-useState/CounterApp'

const HooksApp = () => {


    return (
        <>
            <h2>HooksApp</h2>
            <CounterApp initialState={0}/>
        </>
    )
}

export default HooksApp