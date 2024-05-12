

import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';
function TodoForm() {

    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')
    const dispatch = useDispatch();

    console.log(description)
    const addTodoHandler =(e)=>{
        e.preventDefault();
        // dispatch(addTodo(input)) 
        const todoTitleHeading = {
          text: title,
          description: description
      };

        dispatch(addTodo(todoTitleHeading));
        setTitle('');
        setDescription('');
      };

      // const countries = ["Ghana", "Nigeria", "Rwanda"];
      // console.log(countries)
      // let a  = countries.length
      // console.log(a)
      // countries.splice(a, 0, 'Kenya');
      
      // console.log(countries); // ["Ghana","Kenya","Mali","Nigeria","Rwanda"]
    
  return (
    <div className='flex flex-col  flex-wrap items-center ' >
      <div className='bg-orange-300 w-full flex flex-col  items-center p-4'  >
        <h1 className="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 sm:text-3xl   md:text-4xl lg:text-6xl">Organize Your Day with <span className='text-blue-900'>Todo</span></h1>
        <p className="text-xs font-normal underline text-slate-900 lg:text-xl ">Transform Tasks into Plans and Achievements</p>
      </div>
      <form onSubmit={addTodoHandler} id='1' className="relative space-x-3 mt-10 flex justify-center  items-center flex-wrap">
        
      <input 
        type="text"
        className="bg-gray-800 mb-1 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a title..."
        value={ title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input 
        placeholder='add description' 
        className="bg-gray-800 mb-1 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        />

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>

    </form>

   </div>
  )
}

export default TodoForm