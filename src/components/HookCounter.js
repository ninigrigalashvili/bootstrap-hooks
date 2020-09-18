import React, { useState } from 'react';

function HookCounter() {
    const [count, setCount] = useState(0) 
//returns the current value  of the state and method that is capable of updating that state property. 
//syntax is called array destructuring
return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
        {/* call of function so () =>  */}
    </div>
)
}

export default HookCounter;

