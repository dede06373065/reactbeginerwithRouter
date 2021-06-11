import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
export default class Header extends Component {
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp=(event)=>{
        const {keyCode, target}=event
        // if(event.keyCode!==13)return
        // console.log(event.target.value)
        if(keyCode!==13)return
        if(target.value===''){
            alert('input cannot be null')
            return
        }
        // console.log(target.value)
        const todoOjb={id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoOjb)
        //clear input
        target.value=''

    }
    render() {
        return (
            <div>
                <div className="header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="input and enter" />
                </div>
            </div>
        )
    }
}
