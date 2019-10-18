import uuid from 'uuid/v4'

function reducer(state, action){
    switch(action.type){
        case "ADD_TODO":
            return [...state, {id: uuid(), task: action.task, completed: false}];
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE_TODO": 
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed } : todo);
        case "EDIT_TODO":
            return state.map(todo => todo.id === action.id ? {...todo, task: action.task } : todo);
        default: 
            return state;
            
    }
}

export default reducer;
