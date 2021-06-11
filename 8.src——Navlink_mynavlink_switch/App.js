import React, { Component } from 'react'
import './app.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/About/About'
import About from './pages/Home/Home'
import Header from './components/Header/Header'
import MyNavLink from './components/MyNavLink/MyNavLink'
export default class App extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <ul className="content">
                    <li>
                        <ul className="nav nav-pills nav-stacked">
                            <li>
                                <MyNavLink className="mynav" to="/Home" a={1} b={2} children="Home" />
                            </li>
                            <li>
                                <MyNavLink className="mynav" to="/About" children="About" />
                            </li>
                        </ul>
                    </li>
                    <li className="show">
                        <Switch>
                            <Route path="/Home" component={Home} />
                            <Route path="/About" component={About} />
                        </Switch>
                    </li>
                </ul >
            </div >
        )
    }
}
