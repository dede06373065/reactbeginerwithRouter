import React, { Component } from 'react'
import Search from './components/search'
import List from './components/List'

export default class App extends Component {
    state={
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }
    updateAppState=(stateObj)=>{
        this.setState(stateObj)
    }
    render() {
        // const {users,isFirst,isLoading,err}=this.state
        return (
            <div>
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
                
            </div>
        )
    }
}
