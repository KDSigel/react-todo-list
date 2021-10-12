import React, { Component } from 'react'

export default class SignUpPage extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>email<input required type='email' /></label>
                    <label>password<input required type='password' /></label>
                    <button>sign up</button>
                </form>
            </div>
        )
    }
}
