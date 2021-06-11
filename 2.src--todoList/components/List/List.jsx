import React, { Component } from 'react'
import Item from '../Item/Item'
import PropTypes from 'prop-types'

export default class List extends Component {
    static propTypes={
        todos:PropTypes.array.isRequired,
        changeTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render() {
        console.log(this.props.todos)
        const {todos,changeTodo,deleteTodo}=this.props
        return (
            
            < ul >{
                todos.map(todo=>{
                    // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>//too long
                    return <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo}/> //批量传递
                })

            }
            
             </ul >
        )
    }
}
