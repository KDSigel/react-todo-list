import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import HomePage from './HomePage.js';
import LogInPage from './LogInPage.js';
import SignUpPage from './SignUpPage.js';
import TodosPage from './TodosPage.js';
import Header from './Header.js';

import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <LogInPage {...routerProps} />} 
                        />
                        <Route 
                            path="/sign-up" 
                            exact
                            render={(routerProps) => <SignUpPage {...routerProps} />} 
                        />
                        <Route 
                          path="/todos" 
                          exact
                          render={(routerProps) => <TodosPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
