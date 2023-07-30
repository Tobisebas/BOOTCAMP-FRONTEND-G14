const url = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"

export function fetchCountries(){
    return fetch(url)
    // .then(rpta => rpta.json())
    // .then(data => console.log(data))
        .then((rpta) => {
            return rpta.json()
        })
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log(err)
        })
}