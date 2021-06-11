import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
    static propTypes={
        changeTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    state={
        mouse:false
    }
    handleMouse=(flag)=>{
        return()=>{
            this.setState({mouse:flag})

        }
    }
   
    handleCheck=(id)=>{
        return(event)=>{
            // console.log(id,event.target.checked)
            this.props.changeTodo(id, event.target.checked)

        }
    }

    handleDelete=(id)=>{
        if(window.confirm('Are you sure')){
            this.props.deleteTodo(id)
        }
      

    }


    render() {
        const {id,name, done}=this.props
        const {mouse}=this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                <span>{name} </span>
            </label>
            <button onClick={()=>{this.handleDelete(id)}} style={{display:mouse?'block':'none'}}>delete</button>
        </li>
        )
    }
}
