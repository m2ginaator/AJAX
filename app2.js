const flag = document.createElement('img')
document.body.appendChild(flag)

console.log('Lets go')

fetch('https://restcountries.eu/rest/v2/all')
    .then(response => {
        return response.json()
    }) .then(json => {
        flag.src = json[0].flag
        console.log('Flag added')
    }).catch(err => {
        console.log('errors:' + err.message)
    })

    console.log('Done' + json[0].flag)

async function getData() {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json()
    return data
}    
getData().then (data => console.log(data))
    .catch(err => console.log ('errors' + err.message))