
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div  >
      

      <TodoForm/>
      <div className='w-[30rem] mx-auto'>

      <TodoItem/>
      </div>
    </div>
  )
}

export default App


