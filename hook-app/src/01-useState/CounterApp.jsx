import React from 'react'
import { useState } from 'react'

const CounterApp = ({initialState}) => {
    const [{ counter1, counter2, counter3 }, setCounter] = useState({counter1: 10, counter2: 20, counter3: 30})

    const addToCounter = () => setCounter({counter1: counter1 + 1, counter2: counter2, counter3: counter3})
    const substractToCounter = () => setCounter(counter1 - 1)
    const resetCounter = () => setCounter(initialState)


    return (
        <>
            <div>{counter1}</div>
            <div>{counter2}</div>
            <div>{counter3}</div>
            <button onClick={addToCounter}>+</button>
            <button onClick={substractToCounter}>-</button>
            <button onClick={resetCounter}>reset</button>
        </>

    )
}

export default CounterApp