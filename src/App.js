import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Redirect
} from 'react-router-dom';
import HomePage from './HomePage.js';
import LogInPage from './LogInPage.js';
import SignUpPage from './SignUpPage.js';
import TodosPage from './TodosPage.js';
import Header from './Header.js';

import './App.css'

const TOKENKEY = 'TOKEN'

export default class App extends Component {

state = {
  token: localStorage.getItem(TOKENKEY) || ''
}

handleTokenChange = token => {
    localStorage.setItem(TOKENKEY, token)
    this.setState({ token: token })
}

logout = () => {
    localStorage.clear()
    this.setState({ token: '' })
}


    render() {
        return (
            <div>
                <Router>
                  <Header logout={this.logout}/>
                    <Switch>
                        <Route 
                            path='/' 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path='/login' 
                            exact
                            render={(routerProps) => <LogInPage {...routerProps} />} 
                        />
                        <Route 
                            path='/sign-up' 
                            exact
                            render={(routerProps) => <SignUpPage handleTokenChange = {this.handleTokenChange}
                              {...routerProps} />} 
                        />
                        <Route 
                          path='/todos' 
                          exact
                          render={
                            (routerProps) => 
                            this.state.token
                            ? <TodosPage token={this.state.token} {...routerProps} />
                            : <Redirect to='/login' />
                        } 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
