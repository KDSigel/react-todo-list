import React, { Component } from 'react'
import { signIn } from './fetch-utils';

export default class LogInPage extends Component {
    state = {
        email: '',
        password: ''
}

handleSubmit = async e => {
    e.preventDefault();
    const userDetails = await signIn(this.state.email, this.state.password)
    this.props.handleTokenChange(userDetails.token);
    this.props.history.push('/todos')
    
}

render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>email<input required type='email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /></label>
                <label>password<input required type='password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}  /></label>
                <button>sign in</button>
            </form>
        </div>
    )
}
}
