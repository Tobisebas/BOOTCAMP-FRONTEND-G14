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

  if(tareas.length == 0){
    list.innerHTML= `<li class="p-4 text-sm bg-yellow-100 text-yellow-800 rounded-lg border-yellow-100">No hay tareas registradas</li>`
    return
  }
  
  tareas.forEach(function(tarea, index){
    
    texto = texto + `
    <li  class="py-1 flex flex-row justify-between align-center gap-3">
      <input type="checkbox" onchange="plop(event, ${index})"
      ${tarea.done ? "checked" : ""}>
      <span>${tarea.title} ${index}</span>
      <button class="text-red-700 border border-red-700 rounded-lg font-medium text-sm p-1 px-3 hover:bg-red-700 hover:text-white" onclick="borrando(event, ${index})">Borrar</button>
    </li>`
    
  })

  list.innerHTML = texto
}

agregando()