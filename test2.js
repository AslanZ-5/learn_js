console.log(document.getElementById('title'))
console.log(document.getElementById('title').innerText)
document.getElementById('title').innerText = 'How are you ?'
const title = document.getElementById('title')
let mes = 'the new message'
title.innerHTML = `<p> ${mes} </p>`
title.style.color = 'red'
title.style.background = 'gray'