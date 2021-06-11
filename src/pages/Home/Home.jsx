import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink/MyNavLink'
import News from './news/news'
import Message from './message/message'
import { Switch,Route, Redirect } from 'react-router'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home content</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <MyNavLink to="/home/news">News</MyNavLink>
                    </li>
                    <li className="nav-item">
                        <MyNavLink to="/home/message">Message</MyNavLink>
                    </li>
                </ul>
               <Switch>
                   <Route path="/home/news" component={News}/>
                   <Route path="/home/message" component={Message}/>
                   <Redirect to="/home/news"/>
               </Switch>
                

            </div>
            
        )
    }
}
