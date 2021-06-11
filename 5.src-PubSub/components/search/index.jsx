import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './search.css'
import axios from 'axios'

export default class Search extends Component {
    search = () => {

        const { keyWordNode } = this
        // console.log(keyWordNode.value)//如果你所在的位置已经是跟端口号一致，可省略localhost:3000
        //inform List update the state
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('dede', { isFirst: false, isLoading: true })
        axios.get(`https://api.github.com/search/users?q=${keyWordNode.value}`).then(
            response => {
                console.log(response.data)
                // this.props.updateAppState({isLoading:false,users:response.data.items})
                PubSub.publish('dede', { isLoading: false, users: response.data.items })
            },
            error => {
                //    this.props.updateAppState({err:error.message})
                PubSub.publish('dede', { err: error.message })
            }
        )

    }
    render() {
        return (
            <div className="screen">
                <h2>Search GitHub Users</h2>
                <input ref={c => this.keyWordNode = c} type="text" placeholder="input here" />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}
