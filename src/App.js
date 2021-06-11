import React, { Component } from 'react'
import Header from './components/Header/Header'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import MyNavLink from './components/MyNavLink/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group">
                            <MyNavLink to="/home">Home </MyNavLink>
                            <MyNavLink to="/about">About</MyNavLink>
                        </ul>
                    </div>
                    <div className="col-9">
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                            <Redirect to="/home" />
                        </Switch>

                    </div>
                </div>

            </div>
        )
    }
}
