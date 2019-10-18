
import React, { createContext, useReducer } from 'react'
import uuid from 'uuid/v1'
import useTodoState from '../hooks/useTodoState'
import todoReducer from '../reducers/todoReducer'

const defaultTodos = [
    {id: uuid(), task: "Study React", completed: false, isEditable: true},
    {id: uuid(), task: "Got ot the park", completed: true, isEditable: false},
    {id: uuid(), task: "Cook cauliflower", completed: false, isEditable: false},
]


const TodoContext = createContext()

function TodoProvider(props){
    // const {todoArry, addTodo, deleteTodo, toggleTodo, editTodo} = useTodoState(defaultTodos);
    const [todoArry, dispatch] = useReducer(todoReducer, defaultTodos)
    return(
        // <TodoContext.Provider value={{todoArry, addTodo, deleteTodo, toggleTodo, editTodo}}>
        <TodoContext.Provider value={{todoArry, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }