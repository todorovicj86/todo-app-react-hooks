import React, {useContext} from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem'
import uuid from 'uuid/v1'
import { TodoContext } from './contexts/TodoContext'

function TodoList(props){
    const todoArry = useContext(TodoContext);
    if(todoArry.length)
    return(
        <Paper>
            <List> 
                { todoArry.map((todo, index) => (
                    <>
                    <TodoItem 
                        key={todo.id} 
                        id={todo.id} 
                        todoTask={todo.task} 
                        completed={todo.completed} 
                    />
                    {index < todoArry.length - 1 && <Divider  key={uuid()} />}
                    
                    </>
                ))}
            </List>
        </Paper>
    );
    return null;
}

export default TodoList;