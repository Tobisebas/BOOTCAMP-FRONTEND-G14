const input = document.querySelector(".task__input")
const list  = document.querySelector(".task__list")

let tareas = []

input.addEventListener("keypress", function(event){
  
  if(event.key == "Enter"){
    
    const tareaLeida = event.target.value
    
    let newObjet = {
      title: tareaLeida,
      done: false
    }

    tareas.push(newObjet)

    input.value = ""

    agregando()

  }


})

function plop(event, currentIndex){

  console.log("bien")

  event.target.parentElement.classList.toggle("isChecked")

  const marcado = tareas[currentIndex]
  
  marcado.done = !marcado.done

  console.log(tareas)

}

function borrando(event, currentIndex){
  event.target.parentElement.remove()
  const newTareas = tareas.filter((tarea, index) => index != currentIndex)

  tareas = newTareas
  console.log(tareas, currentIndex)
}

function agregando(){

  let texto = ""
  
  tareas.forEach(function(tarea, index){
    
    texto = texto + `
    <li>
      <input type="checkbox" onchange="plop(event, ${index})"
      ${tarea.done ? "checked" : ""}>
      <span>${tarea.title} ${index}</span>
      <button onclick="borrando(event, ${index})">Borrar</button>
    </li>`
    
  })

  list.innerHTML = texto
}

// ${tarea.done ? "checked" : ""}