// import name from "./constants.js"
// import constants from "./constants.js"

// console.log(name)

const url = "https://restcountries.com/v3.1/all"

function fetchCountries(){
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

const renderCountries = function(countries){
    console.log(countries)
}


document.addEventListener("DOMContentLoaded", function(){
    console.log("El DOM se cargo completamente")

    fetchCountries()
})