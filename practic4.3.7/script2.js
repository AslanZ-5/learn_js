const container = document.querySelector('.container')
const inp = document.querySelector('.inp')
const ulList = document.querySelector('.list-group')
const addedItems = document.querySelector('.added-items')
function getData(query,cl){
    try{
    const xhr = new XMLHttpRequest()
    xhr.open('GET',`https://api.github.com/search/repositories?q=${query}`)
    xhr.addEventListener('load',() => {
        
        try{
            let items = JSON.parse(xhr.responseText)
            if (items.items){
                if (items.items.length > 5){
                    cl(items.items.slice(0,5))
                }else{
                    cl(items.items)
                }
    
            }
        }catch(e){
            console.log(e)
        }
        
    })
    xhr.send()
    }catch(e){
        console.log(e)
    }
}

// function createList(el,key,frag){
//     const wrap = document.createElement('div')
//     wrap.classList.add('wrapper')
//     wrap.setAttribute('data-id',key)
//     const name = document.createElement('h3')
//     name.classList.add('name')
//     name.textContent = `Name: ${el.Name }`
//     wrap.append(name)
//     const owner = document.createElement('p')
//     owner.classList.add('owner')
//     owner.textContent = `Owner: ${el.Owner}`
//     wrap.append(owner)
//     frag.append(wrap)
// }

const deb = debounce(getData,data => {

   
        ulList.innerHTML = `<li class="list-group-item" data-el="${data[0].id}-${data[0].name}-${data[0].owner.login}">${data[0].name}</li>
        <li class="list-group-item" data-el="${data[1].id}-${data[1].name}-${data[1].owner.login}" >${data[1].name}</li>
        <li class="list-group-item" data-el="${data[2].id}-${data[2].name}-${data[2].owner.login}" >${data[2].name}</li>
        <li class="list-group-item" data-el="${data[3].id}-${data[3].name}-${data[3].owner.login}" >${data[3].name}</li>
    <li class="list-group-item" data-el="${data[4].id}-${data[4].name}-${data[4].owner.login}" >${data[4].name}</li>`
   
        

})

inp.addEventListener('keyup', () => {
    if (inp.value.length === 0){
        ulList.innerHTML = ''
    }else{
        deb(inp.value)
    }
    
})



function debounce(fn,clb){
    let timeout;
    return function(query){
        try{
            const call = () => {
                fn.call(this,query,clb)
            }
            clearTimeout(timeout)
            timeout = setTimeout(call,200)
        }catch(e){
            console.log(e)
        }
        
    }
}

function localStUpdate(){
    const localSt = {...localStorage}
    addedItems.innerHTML = ''
    for (let key in localSt ){
        let obj = JSON.parse(localSt[key])
        addedItems.innerHTML += `
        <div class="wrapper" data-id="${key}"> 
        <h4>Name: ${obj.name}</h4>
        <div>Owner: ${obj.owner}</div>
        <button> clickhere </button>
        </div>
        `
        
        // createList(obj,key,frag)
    }
   
}
localStUpdate()
// localStorage.setItem('repositories',JSON.stringify({'name':'aslan','owner':'azu'}))

// console.log({...localStorage})
ulList.addEventListener('click',d => {
   
  let obj = d.target.dataset.el.split('-')
  localStorage.setItem(`repo${obj[0]}`,JSON.stringify({name:obj[1],owner:obj[2]}))
  localStUpdate()
})

addedItems.addEventListener('click',e => {
   
    if (e.target.localName === 'button'){
       const wrapper = e.target.closest('.wrapper')
       localStorage.removeItem(wrapper.dataset.id)
       localStUpdate()
    }else{
        console.log('No',e.target)
    }
})