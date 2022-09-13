


const test = document.getElementById('main-heading')
test.onclick = () => {
    test.style.color = 'blue'
}


const test2 = document.getElementsByClassName('list-items')
const colors = ['blue','red','orange','green']
c = 0
for ( let i of test2){
    i.style.color = colors[c]
    c++
    if (c >= colors.length){
        c = 0
    }
}

const ll = document.querySelector('li')
ll.style.background = 'gray'





const ul = document.querySelector('ul')
const li = document.createElement('li')
li.innerText = 'append'
ul.append(li)
li.setAttribute('id','main-heading')

const test3 = document.getElementById('img1')


li.classList.add('myclasstest')
// li.classList.remove('myclasstest')
// 
// const newul = ul.childNodes
// const newul1 = ul.firstChild
// const newul2 = ul.lastChild
// const newul3 = ul.children
// const newul4 = ul.firstElementChild
// const newul5 = ul.lastElementChild


// console.log(newul)
// console.log(newul1)
// console.log(newul2)
// console.log(newul3)
// console.log(newul4)
// console.log(newul5)


// SIBLINGS IS THE ELEMENT IN THE SAME LEVEL

console.log(ul.previousSibling)
console.log(ul.nextSibling)
console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)