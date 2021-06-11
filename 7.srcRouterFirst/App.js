import React, { Component } from 'react'
import './app.css'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'

export default class App extends Component {
    render() {
        return (
            <div className="main">
                <h2>React Route!</h2>
                <ul className="content">
                    <li>
                        <ul className="nav nav-pills nav-stacked">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="show">
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                    </li>
                </ul>
            </div>
        )
    }
}
