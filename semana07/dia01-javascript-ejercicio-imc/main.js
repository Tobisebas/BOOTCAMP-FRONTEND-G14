const inputPeso = document.getElementById("peso")
const buttonCalcular = document.getElementById("calcular")
const inputAltura = document.getElementById("altura")
const divResultado = document.getElementById("resultado")


// console.log(inputPeso)

// inputPeso.addEventListener("input",function(event){
//     // console.log("escribiendo algo")
//     console.log(event.target.value)
//     const peso = event.target.value
// })

buttonCalcular.addEventListener("click", function(event){
    console.log("click")
    const peso = inputPeso.value
    const altura_m = inputAltura.value

    let altura = altura_m*100 

    console.log(peso, altura)

    const IMC  = peso * 100*100 / (altura * altura)

    let resultado = ""

    console.log(IMC)
    if(IMC < 18.5){
        resultado = "baja"
    }
    else if(IMC >= 18.5 && IMC <= 24.9){
        resultado = "normal"
    }
    else if(IMC >= 25 && IMC <= 29.9){
        resultado = "sobrepeso"
    }
    else if(IMC > 30){
        resultado = " Obeso"
    }
    else{
        resultado = "Datos incorrectos"
    }
    console.log(resultado)

    divResultado.innerHTML = `<span>Tu indice de masa es ${resultado}</span>`
})