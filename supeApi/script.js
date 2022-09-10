const GetSupe = (id) => {
    fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
    .then(response => response.json())
    .then(json => {
        document.getElementById('supeH').innerHTML = ` <h2>${json.name}</h2>
        <h4>${json.slug}</h4><img style="width:300px; height:300px;" src="${json.images.md}" >
        ${getSckills(json)}`
    } )
}

GetSupe(1)
const getNewSupe = () => {
    document.getElementById('getNewSupe').onclick = () => {
        GetSupe(Math.floor(Math.random() * 100)+1)
    }
}
getNewSupe()


const getSckills = (char) => {
    console.log('__________', Object.keys(char.powerstats))
    let stat = Object.keys(char.powerstats).map(st => {
        return `<p> ${st}: ${char.powerstats[st]} `
    })
    return stat.join('')
}