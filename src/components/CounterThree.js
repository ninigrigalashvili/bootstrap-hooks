import React, {useReducer} from 'react'


const initialState = 0;
const reducer = (state,action) => {
    switch(action) {
        case 'INCREMENT':
        return  state + 1
        case 'DECREMENT':
        return state - 1
        case 'RESET':
        return initialState
        default: 
        return state
    }
}

function CounterThree() {

    const[count, dispatch] = useReducer(reducer, initialState);
    const [CountTwo, dispatchTwo] = useReducer(reducer, initialState)
return (
    <div>
        <div>Count - {count}</div>
        <button type="button" onClick={() => dispatch('INCREMENT')}>INCREMENT</button>
        <button type="button" onClick={() => dispatch('DECREMENT')}>DECREMENT</button>
        <button type="button" onClick={() => dispatch('RESET')}>RESET</button>
        <div>
<div>Count Two - {CountTwo}</div>
        <button type="button" onClick={() => dispatchTwo('INCREMENT')}>INCREMENT</button>
        <button type="button" onClick={() => dispatchTwo('DECREMENT')}>DECREMENT</button>
        <button type="button" onClick={() => dispatchTwo('RESET')}>RESET</button>
        </div>
    </div>
)
}

export default CounterThree