import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'

export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: 'xxx', done: true },
            { id: '002', name: 'yyy', done: false },
            { id: '003', name: 'zzz', done: false }
        ]
    }
    addTodo = (todoObj) => {
        // console.log('in App', data )
        //获取原todos
        const { todos } = this.state
        //追加新的todo
        const newTodos = [todoObj, ...todos]
        //更新状态
        this.setState({ todos: newTodos })
    }

    changeTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done: done }
            else return todoObj

        })
        this.setState({ todos: newTodos })

    }

    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos=todos.filter((todoObj) => {
            return todoObj.id!==id

        })
        this.setState({todos:newTodos})

    }
    
    checkAll=(done)=>{
        const { todos } = this.state
        const newTodos=todos.map((todoObj)=>{
            return {...todoObj,done:done}

        })
        this.setState({todos:newTodos})
    }
    clearAll=()=>{
        const {todos}=this.state
        const newTodos=todos.map((todoObj)=>{
            return {...todoObj,done:false}

        })
        this.setState({todos:newTodos})
    }

    render() {
        const { todos } = this.state
        return (
            <div>
                <Header addTodo={this.addTodo} />
                <List todos={todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} />
                <Footer todos={todos} checkAll={this.checkAll} clearAll={this.clearAll}/>
            </div>
        )
    }
}
