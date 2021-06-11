import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './search.css'


export default class Search extends Component {
    search = async() => {

        const { keyWordNode } = this
        // console.log(keyWordNode.value)//如果你所在的位置已经是跟端口号一致，可省略localhost:3000
        //inform List update the state
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('dede', { isFirst: false, isLoading: true })
        // axios.get(`https://api.github.com/search/users?q=${keyWordNode.value}`).then(
        //     response => {
        //         console.log(response.data)
        //         // this.props.updateAppState({isLoading:false,users:response.data.items})
        //         PubSub.publish('dede', { isLoading: false, users: response.data.items })
        //     },
        //     error => {
        //         //    this.props.updateAppState({err:error.message})
        //         PubSub.publish('dede', { err: error.message })
        //     }
        // )
        //用fetch重新做一下
        // fetch(`https://api.github.com/search/users?q=${keyWordNode.value}`).then(
        //     response => {
        //         return response.json()
        //     },
        //     // error=>{
        //     //     console.log(error)
        //     //     return new Promise(()=>{})//中断链
        //     // }
        // ).then(
        //     response => {
        //         console.log('s', response)

        //     },
        //     // error=>{
        //     //     console.log('f',error)

        //     // }
        // ).catch(
        //     (error) => {
        //         console.log(error)
        //     }//用catch来兜底，省略之前一切的error，统一处理错误，第二种
        // )
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyWordNode.value}`)
            const data = await response.json()
            console.log(data)//第三种优化。
            PubSub.publish('dede', { isLoading: false, users: response.data.items })

        }catch(error){
            PubSub.publish('dede', { err: error.message })
        }
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
