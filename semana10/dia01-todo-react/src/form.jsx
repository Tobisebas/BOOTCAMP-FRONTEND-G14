import { useState } from "react"

const Form = ({onSubmit}) => {
    const[input, setInput] = useState("")

    const handleChange = (event) =>{
        let value = event.target.value
        console.log(value)
        setInput(value)
        
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if (input == "") return
        const newTodo = {
          "id": crypto.randomUUID(),
          "title": input,
          "completed": false
        }
        onSubmit(newTodo)

        setInput("")
    }
    return (
        <form onSubmit={handleSubmit}>
             {/* creo que esto no es necesario "arriba" */}
            <input className="w-full border my-3 p-3" placeholder="¿Que deseas hacer hoy?" onChange={handleChange} value={input}/>
        </form>
    )
}

export default Form