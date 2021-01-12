import React from 'react'
import useCounter from './hooks/useCounter'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter(10, 3)

    return (
        <div>
        <h2>Count = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterTwo
