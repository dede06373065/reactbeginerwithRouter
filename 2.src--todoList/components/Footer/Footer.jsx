import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Footer extends Component {
    static propTypes={
        todos:PropTypes.array.isRequired,
        checkAll:PropTypes.func.isRequired,
        clearAll:PropTypes.func.isRequired
    }
    handleCheckAll=(event)=>{
        this.props.checkAll(event.target.checked)
    }
    clearAll=(event)=>{
        this.props.clearAll(event.target.checked)
    }
    render() {
        const {todos}=this.props
        const todoCount=todos.reduce((pre,todo)=>{return pre+(todo.done?1:0)
        },0)
        console.log(todoCount)
        const total=todos.length
        return (
            <div className="footer">
                <input type="checkbox" onChange={this.handleCheckAll} checked={todoCount===total&&total!==0?true:false} />
                <span>select {todoCount}/totally {total}  </span>
                <button onClick={this.clearAll}>Clear All</button>
            </div>
        )
    }
}
