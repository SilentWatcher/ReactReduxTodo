import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, completed } from "../feature/todo/todoSlice";
import { useEffect, useState } from "react";

function TodoItem() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editTodo, setEditTodo] = useState({});
  const [editTodoDescription, setEditTodoDescription] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);


  console.log(todos)
  console.log("edit title ", editTodo)
  console.log("edit description ", editTodoDescription)
  // console.log(isCompleted)


  const handleEditClick = (todo) => {
    setEditTodo(todo);
    setEditTodoDescription(todo)
  };

  const handleSaveClick = () => {
    dispatch(updateTodo({ id: editTodo.id, text: editTodo.text, description: editTodoDescription.description }));
    setEditTodo({});
    setEditTodoDescription({});
  };

  // console.log(todos.length)

  return (
    <div className='bg-slate-900 text-center text-white p-4  rounded-md  mt-3'>
      {todos.length === 0 ? <h3>Something in mind add now !</h3>:
      <ul className="list-none">
        { todos.map((todo) => (
          <li
            // className="flex justify-between items-center bg-slate-800 px-4 py-2 m-1 rounded "
            className={`flex justify-between items-center bg-slate-800 px-4 py-2 m-1 rounded ${todo.completed ? 'line-through text-gray-400' : ''}`}
            key={todo.id}
          >
            {editTodo.id === todo.id? (
              <div className="flex flex-col text-left">
                <div className="mb-1">
                <span>Title: </span>
                <input
                  type="text"
                  value={editTodo.text}
                  className="text-black focus:outline-none px-2 py-1 rounded-md"
                  onChange={(e) =>
                    setEditTodo({ ...editTodo, text: e.target.value })
                  }
                />
                </div>
                <div>
                  <span>Description</span>
                  <input
                    type="text"
                    value={editTodoDescription.description}
                    className="text-black focus:outline-none px-2 py-1 rounded-md"
                    onChange={(e) =>
                      setEditTodoDescription({ ...editTodoDescription, description: e.target.value })
                    }
                  />

                  {/* <textarea name="description" id="" cols="30" rows="5" 
                    className="text-black focus:outline-none px-2 rounded-md"
                    onChange={(e) =>
                      setEditTodoDescription({ ...editTodoDescription, description: e.target.value })
                    }
                  >
                    {editTodoDescription.description}
                  </textarea> */}
                </div>

              </div>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div>{todo.description}</div>
              </>
            )}
            <div>
              {editTodo.id === todo.id ? (
                <button onClick={handleSaveClick}>📁</button>
              ) : (
                <button onClick={() => handleEditClick(todo)}>✏️</button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="ml-4"
              >
                ❌
              </button>
              <button
                onClick={() => dispatch(completed(todo.id))}
                className="ml-4"
              >
                <input type="checkbox" value={todo.completed} className="" />
                
              </button>
            </div>
          </li>
        ))}
      </ul>
       }
    </div>
  );
}

export default TodoItem;


