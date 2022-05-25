import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
    const clickEventHandler = (e) => {
        console.log(e)
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2>{ value }</h2>

        <button onClick={ clickEventHandler }>+1</button>
    </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp