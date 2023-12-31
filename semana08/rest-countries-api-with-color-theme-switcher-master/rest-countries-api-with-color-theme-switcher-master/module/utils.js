export const renderCountries = function(countries){
    console.log(countries)

    const countryListElement = document.querySelector(".app__list")

    let list = ""

    countries.forEach((country) => {
        list += `
        <div class="country">
            <img class="country__flag" src="${country.flags.png}" alt"${country.name.common}"/>
            <div class="country__wrapper">
                <h2 class="country__title">${country.name.common}</h2>
                <div class="country__description">
                    <strong>Population:</strong> ${country.population}
                </div>
                <div class="country__description">
                    <strong>Region:</strong> ${country.region}
                </div>
                <div class="country__description">
                    <strong>Capital:</strong> ${country.capital}
                </div>
            </div>
        </div>`
    })
    countryListElement.innerHTML = list
}