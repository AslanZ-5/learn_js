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

// const squares = document.querySelectorAll('.colorsquare')
// console.log(squares[0].value)
// timeClicked = {'red':0,'yellow':0,'green':0}
// squares.forEach(square => {
//     square.onclick = () =>{
//         timeClicked[square.value] += 1
//         square.innerText = timeClicked[square.value]
//     } 
// })

// document.getElementById('clearBtn').onclick = () => {
//     squares.forEach(square =>{ 
//         timeClicked[square.value] = 0
//         square.innerText = ''

//     })
// }

// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(json => {
//     console.log(json.message)
//   })


// a = [ 'd', 'l', 'o','b', 'r', 'w' ]

// a.splice(a.indexOf('b'),a.indexOf('b')+2)
// console.log(a)


function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    let newarr = []
    for (i in array){
      if (!array[i] == 0){
      newarr[i] = array[i]
        };
    }
    for (i = 0; i < array.length; i++){
        if (array[i] == 0){
            newarr[newarr.length] = array[i]
              };
    }
    return newarr
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.
   
  }

  removeZeros([0, 1, 2, 0, 3])