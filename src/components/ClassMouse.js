import React from 'react';

class ClassMouse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            X:0,
            y: 0
        }
    }

    logMousePosition = e => {
        this.setState({ x: e.clintX, y: e.clientY})
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWilUnMount() {
        window.removeEventListener('mousemove', this.logMousePosition);
    }


     render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}


export default ClassMouse