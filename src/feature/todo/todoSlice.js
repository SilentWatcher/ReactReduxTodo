import {createSlice, nanoid} from '@reduxjs/toolkit';
import { act } from 'react';
/** 
 * nanoid =>generate id 
 */

const initialState = {
    // todos: [{id: 1, text: "hello world"}]
    todos: [
        {id: nanoid(), text: "Study", description:"Algeabra- linear equations"},
        {id: nanoid(), text: "workout", description:"fullbody"},
        {id: nanoid(), text: "Drink Water", description:"3L"},
     ]
}


// const arr = [1,2,3,4,5]
// console.log(arr)

// console.log(arr.slice(2,3))

console.log("initialState", initialState.todos)
export const todoSlice = createSlice({
    name : 'todos', 
    initialState,
    reducers: {

        // contain properties and value 
        addTodo:(state, action)=>{
            const {text, description} = action.payload
            const todo = {
                id:nanoid(),
                text:text,
                description: description,
                completed: false
            }
            console.log("action.payload slice",todo)
            
            
            state.todos.unshift(todo);

        },
        // completed:(state , action)=>{
        //     // const {text, description} = action.payload
        //     // console.log("completed", text, description)
            
        //     // state.todos  = state.todos.map((todo)=> console.log(todo)    )
                    
        //     // state.todos = state.todos.splice(state.todos.length, 0 , todo)
            
        //     // state.todos.splice(5, 0 , {id: nanoid(), text: "end", description:"3L"})
        // },
        completed:(state, action) => {
            // const todoIndex = state.todos.findIndex(todo => todo.id === action.payload);
            // if (todoIndex !== -1) {
                //     state.todos[todoIndex].completed = true;
                //     const completedTodo = state.todos.splice(todoIndex, 1)[0];
                //     // slice(startIndex, count, element)
                //     // const completedTodo = state.todos.slice(todoIndex, todoIndex + 1);
                //     console.log("completed",completedTodo)
                
                //     state.todos.push(completedTodo);
                // }
                //! remove from specific index and push to the last 
                const todoIndex = state.todos.findIndex(todo => todo.id === action.payload);
                state.todos[todoIndex].completed = true;
                if(todoIndex > -1){
                    const removedTodo = state.todos.splice(todoIndex, 1)[0]
                    console.log("removeTodo", removedTodo)
                                
                    state.todos.push(removedTodo);
                }

            

        },
        
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
        }, 

        updateTodo: (state, action) => {
            const {text, description} = action.payload
            state.todos = state.todos.map((todo) =>
              todo.id === action.payload.id
                ? { ...todo, text: text , description:description}
                : todo
            );
          },


    }
})




export const {addTodo, removeTodo, updateTodo , completed} =todoSlice.actions;
export default todoSlice.reducer;

