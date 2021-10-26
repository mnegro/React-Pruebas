import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter +1)
    }
    const handleReset = () => setCounter(0);
    const handleRest = () => setCounter(counter -1);
    return (
    <>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleRest}>-1</button>
    </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}