import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './list.css'

export default class List extends Component {

    state={
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    componentDidMount(){
        PubSub.subscribe('dede',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe('dede')
    }
 



    render() {
        const { users,isFirst,isLoading,err } = this.state
        // console.log(users)
        return (
            <div className="list">
                {
                    isFirst?<h2>Welcome!</h2>:
                    isLoading?<h2>Loading...</h2>:
                    err?<h2>Error!</h2>:
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card col-md-3 col-xs-3">
                                <a href={userObj.html_url}>
                                    <img src={userObj.avatar_url} alt="head-portrait" style={{ width: '100%' }} />
                                </a>
                                <p>{userObj.login}</p>
                            </div>
                        )
                    })

                }
            </div>
        )
    }
}



