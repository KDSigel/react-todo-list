import React, { Component } from 'react'

export default class TodosPage extends Component {

state = {
    oneTodo: '',
    allTodos: ''
}

handleSubmit = async e => {
    e.preventDefault();
// should run a post todo function and pass on the value in the oneTodo state
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.oneTodo} 
                    onChange={e => this.setState({ oneTodo: e.target.value })} />
                    <button>add</button>
                </form>
            </div>
        )
    }
}
