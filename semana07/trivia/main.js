const respuestas = document.querySelectorAll("div")
const siguiente = document.querySelectorAll(".next")
const notas = document.querySelector("#notaTotal")

// let resultados = []

let newResultado = {
    correcto: 0,
    incorrecto: 0
}
// console.log(resultados)

respuestas.forEach(function(respuesta){
    
    respuesta.addEventListener("click", function(event){


        // console.log(event.target.classList)
        let button = event.target
        let respuestaSeleccionada = event.target.id

        // console.log(respuestaSeleccionada)
        if(respuestaSeleccionada == "correct"){
            console.log("vas bien")
            button.innerText= `correcto!!!`
            button.classList.remove("bg-gradient-to-br", "from-green-400", "to-blue-600","hover:bg-gradient-to-bl", "focus:ring-green-200")
            button.classList.add("bg-green-700")
            newResultado.correcto = newResultado.correcto + 1
            console.log(newResultado.correcto)

            // resultados.push(newResultado)
            console.log(newResultado)
            localStorage.setItem("resultados",JSON.stringify(newResultado))

        }
        else if(respuestaSeleccionada == "incorrect"){
            console.log("nice try")
            button.innerText= `casi!!!`
            button.classList.remove("bg-gradient-to-br", "from-green-400", "to-blue-600","hover:bg-gradient-to-bl", "focus:ring-green-200")
            button.classList.add("bg-red-700")
            newResultado.incorrecto = parseInt(newResultado.incorrecto) + 1
            console.log(newResultado.incorrecto)

            // resultados.push(newResultado)
            console.log(newResultado)
            localStorage.setItem("resultados",JSON.stringify(newResultado))

        }

    })
})
siguiente.forEach(function(boton){
    boton.addEventListener("click",function(event){
        let bajar = event.view.scroll

        bajar(({
            top: 500,
            left: 20,
            behavior: "smooth",
        }))
        
    })
})
notas.addEventListener("click",function(event){
    let buttonSubmit = event.target
    
    if(buttonSubmit.tagName == "BUTTON"){
        if(newResultado.correcto == 3){
            event.target.parentElement.classList.add("bg-green-800", "text-white","p-5")
            notas.innerHTML = `
            <h1 class="text-xl">Felicitaciones!!!</h1>
            <p>Haz logrado un puntaje perfecto, sigue asi :3</p>
            `
            console.log("gozu")
        }
        else if(newResultado.correcto == 2){
            event.target.parentElement.classList.add("bg-yellow-800", "text-white","p-5")
            notas.innerHTML = `
            <h1 class="text-xl">Casi lo consigues!</h1>
            <p>No te rindas, puedes mejorar :)</p>
            `
            console.log("Puedes mejorar")
        }
        else{
            event.target.parentElement.classList.add("bg-red-800", "text-white","p-5")
            notas.innerHTML = `
            <h1 class="text-xl">Fallaste</h1>
            <p>Tienes que esforzarte mas! :c</p>
            `
            console.log("Regresa al colegio y pide que te devuelvan tu dinero")
        }
    }
})
