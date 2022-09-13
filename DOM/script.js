


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
console.log(test3.getAttribute('src'))