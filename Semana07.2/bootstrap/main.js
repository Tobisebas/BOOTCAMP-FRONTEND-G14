const input = document.querySelector(".task__input")
const list  = document.querySelector(".task__list")
const completed = document.querySelector(".limpiar")

localStorage.setItem("frutas", "manzanas,peras,sandias")
console.log(localStorage.getItem("frutas"))

let tareas = JSON.parse(localStorage.getItem("tareas"))

input.addEventListener("keypress", function(event){
  
  if(event.key == "Enter"){
    
    const tareaLeida = event.target.value
    
    let newObjet = {
      title: tareaLeida,
      done: false
    }

    tareas.push(newObjet)

    localStorage.setItem("tareas", JSON.stringify(tareas) )

    input.value = ""

    agregando()

  }


})
completed.addEventListener("click",function(event){

  tareas.forEach(function(tarea,index){
    let hecho = tarea.done

    // console.log(hecho)

    const tareasHechas = tareas.filter(tarea => tarea.done == false)
    tareas = tareasHechas

    agregando()

    localStorage.setItem("tareas", JSON.stringify(tareas) )
    
    
  })
  console.log(tareas)
})

function plop(event, currentIndex){

  // console.log("bien")

  event.target.parentElement.classList.toggle("isChecked")

  const marcado = tareas[currentIndex]
  
  marcado.done = !marcado.done

  localStorage.setItem("tareas", JSON.stringify(tareas) )


  console.log(tareas)

}

function borrando(event, currentIndex){
  event.target.parentElement.remove()
  const newTareas = tareas.filter((tarea, index) => index !== currentIndex)

  tareas = newTareas
  console.log(tareas, currentIndex)

  localStorage.setItem("tareas", JSON.stringify(tareas) )

}

function agregando(){

  let texto = ""
  
  tareas.forEach(function(tarea, index){
    
    texto = texto + `
    <li class="list-group-item d-flex flex-row justify-content-between">
      <div>
        <input type="checkbox" onchange="plop(event, ${index})"
        ${tarea.done ? "checked" : ""}>
        <span>${tarea.title} ${index}</span>
      </div>
      <button class="btn btn-danger btn-sm" onclick="borrando(event, ${index})">Borrar</button>
    </li>`
    
  })

  list.innerHTML = texto
}

agregando()