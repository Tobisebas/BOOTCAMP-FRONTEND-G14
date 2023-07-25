const text = document.querySelector(".input")
const buttonAdd = document.querySelector(".buttonAdd")
const task = document.querySelector(".task")

buttonAdd.addEventListener("click", function(event){


  const li = document.createElement("li")
  
  let checkbox = document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  li.appendChild(checkbox)

  let span = document.createElement("span")
  span.innerText = text.value
  li.appendChild(span)

  let erased = document.createElement("button")
  erased.innerText = "borrar"
  li.appendChild(erased)

  task.appendChild(li)

  text.value = ""


})
task.addEventListener("click", function(event){

  const target = event.target

  if(target.tagName == "INPUT" && target.type == "checkbox"){
    target.classList.toggle("checked")
  }
  if(target.tagName == "BUTTON"){
    target.parentElement.remove()
  }

})
