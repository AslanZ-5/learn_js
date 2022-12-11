const container = document.querySelector('.container')
const btns = document.querySelector('.make-request')
function getReq(cl){
    const xhr = new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts/')
    xhr.addEventListener('load',function(e){
        cl(xhr.responseText)
    })
    xhr.send()
}
function postReq(body,cl){
    const xhr = new XMLHttpRequest()
    
    xhr.open('POST','https://jsonplaceholder.typicode.com/posts')
    xhr.addEventListener('load',function(e){
        cl(xhr.responseText)
    })
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(body)

}
const postDt = {
    title: 'my quote',
    body: 'this is life, we have nothing to do with it',
    userId: 1,
  }

function createCard(data){
    let divEl = document.createElement('div')
    divEl.classList.add('card-body')
    let card = document.createElement('div')
    card.classList.add('card')
    let tit = document.createElement('h1')
    tit.classList.add('title')
    tit.textContent = data.title
    let body = document.createElement('p')
    body.classList.add('body')
    body.textContent = data.body
    divEl.append(tit)
    divEl.append(body)
    card.append(divEl)
    return card
}



btns.addEventListener('click', e => {
    if (e.target.classList[0] == 'get-btn'){
        getReq(data => {
            const dt = JSON.parse(data)
            const frag = document.createDocumentFragment()
            dt.forEach(data => {
                 frag.append(createCard(data))
            })
            container.append(frag)
         
         })
    }else if(e.target.classList[0] == 'post-btn'){
        postReq(JSON.stringify(postDt),data => { 
            let el = createCard(JSON.parse(data))
            container.insertAdjacentElement('afterbegin',el)
        })
    }
})

