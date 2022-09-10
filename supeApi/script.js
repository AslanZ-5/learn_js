const GetSupe = (id) => {
    fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
    .then(response => response.json())
    .then(json => {
        document.getElementById('supeH').innerHTML = `<img style="width:300px; height:300px;" src="${json.images.sm}" >`
    } )
}

GetSupe(1)
const getNewSupe = () => {
    document.getElementById('getNewSupe').onclick = () => {
        console.log('Get Supe')
        GetSupe(Math.floor(Math.random() * 100))
    }
}
getNewSupe()