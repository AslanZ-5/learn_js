

const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random()*2)]
        isReady ? resolve(' soup is ready'): reject(' No soup today')

    }, 1000)
} )

// console.log(
//     promise1
//     .then( success => console.log({success}))
//     .catch(error => console.log({error}))
// )

const getDog = async () => {
    const url = 'https://akabab.github.io/superhero-api/api/id/2.json'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getDog()