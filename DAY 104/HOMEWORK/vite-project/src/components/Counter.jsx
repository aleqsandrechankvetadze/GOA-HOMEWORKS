import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return (
        <div>
            <h1>Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    );
}

export default Counter;
