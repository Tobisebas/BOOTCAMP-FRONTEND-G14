import { useState } from "react"

function App() {

  const DEFAULT_TODOS = [
    {
      "userId": "1",
      "id": "1",
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": "1",
      "id": "2",
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": "1",
      "id": "3",
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": "1",
      "id": "4",
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": "1",
      "id": "5",
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)
  const[input, setInput] = useState("")

  const handleChange = (event) =>{
    let value = event.target.value
    console.log(value)
    setInput(value)
    
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log("Va")
    const newValue = {
      "id": crypto.randomUUID(),
      "title": input,
      "completed": false
    }

    setTodos([...todos, newValue])

    setInput("")
    
  }
  const check = (event) => {
    const ischecked = event.target.checked
    const id = event.target.dataset.id

    const newTodos = todos.map(todo => {
      if(todo.id == id){
        return {...todo, completed: ischecked}
      }
      return todo
    })
    console.log(newTodos)
    setTodos(newTodos)
  }
  const remove = (event) => {
    const idSelected = event.target.dataset.id
    const newTodos2 = todos.filter(todo => todo.id !== idSelected)

    setTodos(newTodos2)
  }

  return (
    <>
      <main className="w-full max-w-sm mx-auto mt-10 rounded-lg bg-yellow-100 border-yellow-600 p-4 shadow-lg">
        <h1 className='text-2xl font-bold'>
          TODO APP
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <input className="w-full border my-3 p-3" placeholder="¿Que deseas hacer hoy?" onChange={handleChange} value={input}/>
        </form>
        <div className="flex flex-row justify-between">
          <span>5/{todos.length}</span>
          <button className="font-bold text-red-600 border border-red-600 rounded-lg px-2 py-2">Eliminar elementos marcados</button>
        </div>
        <section className="mt-5">
          <ul>
            {todos.map(todo => {
              return (
              <li key={todo.id} className="flex my-3">
                <input 
                type="checkbox" 
                className="mr-3" 
                data-id={todo.id} 
                onChange={check} 
                checked={todo.completed}
                />
                <div className="flex justify-between w-full">
                  <div className={`text-stone-900 ${todo.completed ? 'line-through' : ''}`}>
                    {todo.title}
                  </div>
                  <button className="font-bold text-red-600 border border-red-600 rounded-lg px-2 py-2" onClick={remove} data-id={todo.id}>delete</button>
                </div>
              </li>
              )
            })}
          </ul>
        </section>
      </main>      
    </>
  )
}

export default App
