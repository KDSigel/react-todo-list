import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink exact activeClassName="active" to="/">home</NavLink>
                <NavLink exact activeClassName="active" to="/login">login</NavLink>
                <NavLink exact activeClassName="active" to="/sign-up">sign up</NavLink>
                <NavLink exact activeClassName="active" to="/todos">list</NavLink>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}
