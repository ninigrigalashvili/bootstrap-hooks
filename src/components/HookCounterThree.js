import React, {useState} from 'react';

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    //usestate doe not automatically  merge and update object this is the key deifference to this setstate in class components
    //manual merge of state needed ...name
    return (
        <div>
            <form>
                <input
                type="text"
                value={name.firstName}
                onChange={ e => setName({ ...name, firstName: e.target.value})}
                   />
                {/* //copy every property in ma e and overrride firstname */}
                <input 
                type="text"
                value={name.lastName}
                onChange={ e =>  setName({ ...name, lastName: e.target.value})}
                  />
                <h2>Your firstname is - {name.firstName}</h2>
                <h2>Your lastname is = {name.lastName}</h2>
                 <h2>{JSON.stringify(name)}</h2>


            </form>
        </div>
    )
}

export default HookCounterThree;