const container = document.querySelector('.container')
const inp = document.querySelector('.inp')
const ulList = document.querySelector('.list-group')
// const info = document.querySelector('.info')
const itemsWrapper = document.querySelector('.items-wrapper')

function getData(query){
    if (query.length){
        fetch(`https://api.github.com/search/repositories?q=${query}`).then(data => {
            return data.json()
        }).then(data => {
            data = data.items.slice(0,5)
            ulList.innerHTML = `<li class="list-group-item" data-el="${data[0].id}-${data[0].name}-${data[0].owner.login}-${data[0].stargazers_count}">${data[0].name}</li>
            <li class="list-group-item" data-el="${data[1].id}-${data[1].name}-${data[1].owner.login}-${data[1].stargazers_count}" >${data[1].name}</li>
            <li class="list-group-item" data-el="${data[2].id}-${data[2].name}-${data[2].owner.login}-${data[2].stargazers_count}" >${data[2].name}</li>
            <li class="list-group-item" data-el="${data[3].id}-${data[3].name}-${data[3].owner.login}-${data[3].stargazers_count}" >${data[3].name}</li>
        <li class="list-group-item" data-el="${data[4].id}-${data[4].name}-${data[4].owner.login}-${data[4].stargazers_count}" >${data[4].name}</li>`
        }
        )
    }
   
}
const db = debounce(getData)
function debounce(fn){
    let timeout;
    return function(query){
        try{
            const call = () => {
                fn.call(this,query)
            }
            clearTimeout(timeout)
            timeout = setTimeout(call,100)
        }catch(e){
        }
        
    }
}

inp.addEventListener('keyup', () => {
    if (inp.value.length === 0){
        ulList.innerHTML = ''
    }else{
        db(inp.value)
    }
    
})

function localStUpdate(){
    const localSt = {...localStorage}
    itemsWrapper.innerHTML = ''
    for (let key in localSt ){
        let obj = JSON.parse(localSt[key])
        itemsWrapper.innerHTML += `
        <div class="added-items" data-id="${key}" style=" display: flex;
        background-color: #E27BEB;
        border: 1px solid #000;
        position: relative;">
            <div class="info">
                <div class="wrapper" > 
                    <h4>Name: ${obj.name}</h4>
                    <div>Owner: ${obj.owner}</div>
                    <div>Stars: ${obj.stars}</div>
                    </div>
            </div>
            <div class="ex" style=" width:50px; height:50px; position: absolute;right:40px;top:20px">
                <div style="width: 40px;
                height:4px;
                background-color: #FF0000;
                transform: rotate(45deg) translate(9px,3px);"></div>
                <div style="width: 40px;
                height: 4px;
                background-color: #FF0000;
                transform: rotate(-45deg)translate(0px,6px);"></div>
            </div>
          </div>
        `
        
        // createList(obj,key,frag)
    }
   
}
localStUpdate()

ulList.addEventListener('click',d => {
    let obj = d.target.dataset.el.split('-')
    localStorage.setItem(`repo${obj[0]}`,JSON.stringify({name:obj[1],owner:obj[2],stars:obj[3]}))
    inp.value = ''
    ulList.innerHTML = ''
    localStUpdate()
  })

 itemsWrapper.addEventListener('click',e => {
   if (e.target.closest('.ex')){
    const items = e.target.closest('.added-items')
    localStorage.removeItem(items.dataset.id)
    localStUpdate()
   }
  
})

