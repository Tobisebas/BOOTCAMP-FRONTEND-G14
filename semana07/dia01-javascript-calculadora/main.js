const inputDatos = document.querySelector(".datos")
const buttons = document.querySelectorAll("button")
const igual = document.querySelector(".submit")

let firsNumber = ""
let number = "0"
let operador = ""

buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        buttonText = event.target.innerText

        if("+-*".includes(buttonText)){
            operador = buttonText
            firsNumber = number
            buttonText = "0"
            number = "0"
        }
        else if( buttonText == "="){
            if(operador == "+"){
                buttonText = Number(number) + Number(firsNumber)
            }
            else if(operador == "-"){
                buttonText = Number(number) - Number(firsNumber)
            }
            else if(operador == "*"){
                buttonText = Number(number) * Number(firsNumber)
            }
        }
        else if(buttonText == "AC"){
            number = "0"
            firsNumber = "0"
            buttonText = "0"
        }
        else{
            number = Number(number) + Number(buttonText) 
        }
        inputDatos.value = buttonText
    })
    igual.addEventListener("enter", function(event){
        console.log(event.key)
    })
})