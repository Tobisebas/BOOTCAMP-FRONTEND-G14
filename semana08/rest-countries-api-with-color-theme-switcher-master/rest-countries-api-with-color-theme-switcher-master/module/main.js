import { fetchCountries } from "./service.js"
import { renderCountries } from "./utils.js"


const searchInput = document.querySelector(".app__search")
const options = document.getElementById("filter")

let countryData = []

options.addEventListener("click", (event) => {
    let option = event.target.value
    const filterCountries = countryData.filter(country => {
        const lowerRegion = country.region.toLowerCase()
        const lowerOption = option.toLowerCase()

        return lowerRegion.includes(lowerOption)
    })
    renderCountries(filterCountries)
})

searchInput.addEventListener("input", (event) => {
    const input = event.target.value

    const filterCountries = countryData.filter(country => {
        const lowerName = country.name.common.toLowerCase()
        const lowerNameCap = country.capital.join(",").toLowerCase()
        const lowerInput = input.toLowerCase()

        return lowerName.includes(lowerInput) || lowerNameCap.includes(lowerInput)
    })
    renderCountries(filterCountries)
})




document.addEventListener("DOMContentLoaded",async() =>{
    console.log("El DOM se cargo completamente")
    // fetchCountries()
    //     .then((rpta) => {
    //         renderCountries(rpta)
    //     })
    const data = await fetchCountries()

    countryData = data
    
    renderCountries(data)
})
