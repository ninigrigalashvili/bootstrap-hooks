import React from 'react';
import ClassCounter from './ClassCounter';


class ClassCounterTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }

    getInitialState = () => ({
        count: 0 
    })

    onReset = () =>  {
        this.setState({
            count: 0
        })
    }

    onIncrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count +1
            }
        })
    }

    

    onDecrement = () =>  {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={this.onReset}>Reset</button>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
            </div>
        )
    }
}


export default ClassCounterTwo;