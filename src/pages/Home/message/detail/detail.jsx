import React, { Component } from 'react'

const data=[
    {id:'01',content:'find a job'},
    {id:'02', content:'find a better job'},
    {id:'03', content:'PR granted'}
]

export default class Detail extends Component {
    
    render() {
        const {id,title}=this.props.match.params
        const findResult=data.find((detailObj)=>{
            return detailObj.id===id

        })
        console.log(findResult)
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">ID:{id}</li>
                <li className="list-group-item">TITLE:{title}</li>
                <li className="list-group-item">CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
