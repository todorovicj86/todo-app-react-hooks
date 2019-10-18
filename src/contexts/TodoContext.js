// all methods that interact with todos
// editTodo
// toggleTodo
// deleteTodo
// todos

import React, {createContext} from 'react'
import uuid from 'uuid/v1'
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
    {id: uuid(), task: "Study React", completed: false, isEditable: true},
    {id: uuid(), task: "Got ot the park", completed: true, isEditable: false},
    {id: uuid(), task: "Cook cauliflower", completed: false, isEditable: false},
]


const TodoContext = createContext()

function TodoProvider(props){
    const {todoArry, addTodo, deleteTodo, toggleTodo, editTodo} = useTodoState(defaultTodos);
    return(
        <TodoContext.Provider value={{todoArry, addTodo, deleteTodo, toggleTodo, editTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }