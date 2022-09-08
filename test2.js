// console.log(document.getElementById('title'))
// console.log(document.getElementById('title').innerText)
// document.getElementById('title').innerText = 'How are you ?'
// const title = document.getElementById('title')
// let mes = 'the new message'
// title.innerHTML = `<p> ${mes} </p>`
// title.style.color = 'red'
// title.style.background = 'gray'


// let rd = document.getElementById('red')
// let yel = document.getElementById('yellow')
// let grn = document.getElementById('green')
// rd.onclick = () => console.log('you clicked on red')
// yel.onclick = () => console.log('you clicked on yellow')
// grn.onclick = () => console.log('you clicked on green')

const squares = document.querySelectorAll('.colorsquare')
console.log(squares[0].value)
timeClicked = {'red':0,'yellow':0,'green':0}
squares.forEach(square => {
    square.onclick = () =>{
        timeClicked[square.value] += 1
        square.innerText = timeClicked[square.value]
    } 
})

document.getElementById('clearBtn').onclick = () => {
    squares.forEach(square =>{ 
        timeClicked[square.value] = 0
        square.innerText = ''

    })
}