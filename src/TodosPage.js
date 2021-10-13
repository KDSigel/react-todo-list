import React, { Component } from 'react'
import { postTodo, getTodos, updateTodo } from './fetch-utils';

export default class TodosPage extends Component {

state = {
    oneTodo: '',
    allTodos: []
}

// on page mount, load all the todos for this user
componentDidMount = async() => {
    const allTodos = await getTodos(this.props.token)
    this.setState({ allTodos })
}

handleSubmit = async e => {
    e.preventDefault();
// should run a post todo function and pass on the value in the oneTodo state
    await postTodo(this.state.oneTodo, this.props.token);
// then reload all the todos
    const allTodos = await getTodos(this.props.token)
    this.setState({ allTodos, oneTodo: '' })
}

handleUpdate = async (id) => {
await updateTodo(id, this.props.token) 
const allTodos = await getTodos(this.props.token)
this.setState({ allTodos, oneTodo: '' })
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.oneTodo} 
                    onChange={e => this.setState({ oneTodo: e.target.value })} />
                    <button>add</button>
                </form>
                {/* map through all the allTodos and create div with name and finished button? */}
                {this.state.allTodos.map(todo => 
                <div key={todo.id} className={todo.completed ? 'todo-finished' : 'todo-unfinished'}>
                <span>{todo.todo}</span>
                <button onClick = {() => this.handleUpdate(todo.id)}>Finished it!</button>
                </div>
                )}
            </div>
        )
    }
}
