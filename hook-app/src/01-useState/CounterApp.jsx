import React from 'react'
import { useState } from 'react'

const CounterApp = ({ initialState }) => {
    const [counter, setCounter] = useState({ counter1: 10, counter2: 20, counter3: 30 })
    const { counter1, counter2, counter3 } = counter

    const addToCounter = () => 
        setCounter({ 
            counter1: counter1 + 1, 
            counter2: counter2 + 1, 
            counter3: counter3 + 1 
        })

    const substractToCounter = () => 
        setCounter({ 
            ...counter, 
            counter1: counter1 - 1 
        })

    const resetCounter = () => 
        setCounter(counter)


    return (
        <>
            <div>{ counter1 }</div>
            <div>{ counter2 }</div>
            <div>{ counter3 }</div>
            <hr />
            <button className='btn' onClick={ addToCounter }>+</button>
            <button className='btn' onClick={ substractToCounter }>-</button>
            <button className='btn' onClick={ resetCounter }>reset</button>
        </>

    )
}

export default CounterApp