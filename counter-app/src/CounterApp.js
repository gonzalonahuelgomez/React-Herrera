import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(0)

    const clickEventHandler = () => {
        setCounter(counter+1)
        // setCounter((c) => c+1) Si no tengo acceso a la variable de esta forma puedo aumentar el contador
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={ clickEventHandler }>+1</button>
    </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp