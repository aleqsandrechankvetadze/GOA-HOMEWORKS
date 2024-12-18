import React, { useState } from 'react';

function App() {
    const [clintEastwood, setClintEastwood] = useState(0);

    const updateCounter = () => {
        setClintEastwood(clintEastwood + 1);
    };

    return (
        <div>
            <h1>Clint Eastwood Counter</h1>
            <p>Current Count: {clintEastwood}</p>
            <button onClick={updateCounter}>Increase Count</button>
        </div>
    );
}

export default App;
