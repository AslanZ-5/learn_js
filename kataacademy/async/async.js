
const req = (callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange',()=> {
        if (request.readyState === 4 && request.status === 200){
            callback(undefined,request.responseText)
        }else if(request.readyState === 4){
        callback('coud not fetch the data!',undefined)
        }
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    
    request.send();
}
req((err,data) =>{
    console.log('fired')
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

