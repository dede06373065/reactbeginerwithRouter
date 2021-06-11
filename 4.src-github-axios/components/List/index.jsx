import React, { Component } from 'react'

import './list.css'

export default class List extends Component {
    render() {
        const { users,isFirst,isLoading,err } = this.props
        console.log(users)
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



