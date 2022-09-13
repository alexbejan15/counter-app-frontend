import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 1
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }

    increment = () => {
        console.log("incr");
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        this.setState({count: this.state.count - 1});
    }
}

export default Counter;
