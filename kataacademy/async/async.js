
// const req = (resourse) => {
//    return new Promise((resolve,reject)=>{
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange',()=> {
//         if (request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)
//             resolve(data)
//         }else if(request.readyState === 4){
//         reject('error getting resource')
//         }
//     })
//     request.open('GET', resourse)
//     request.send();
//    })
// }

// const resourse = 'https://jsonplaceholder.typicode.com/todos/'
// const resourse1 = 'https://jsonplaceholder.typicode.com/todos/1'
// const resourse2 = 'https://jsonplaceholder.typicode.com/todos/2'

// req(resourse).then(data => {
//     console.log('promise resolved:', data)
//     return req(resourse1).then(data =>{
//         console.log('promise 1 resolved:', data)
//         return req(resourse2).then(data => {
//             console.log('promies 2 resolved:', data)
//         })
//     })
// }).catch(error => {
//     console.log('promise rejected:', error)
// })
let fileSizes = {
    testFile1: 65,
    testFile2: 48,
  }
  
  function getFileSize(filename, cb) {
    setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
  }
  
  function sumFileSizes(filename1, filename2, cb) {
    let  sum = 0
    getFileSize(filename1,data => {
        sum += data
        getFileSize(filename2,data => {
            sum += data
        })
       
    })
    console.log(sum)
  }


sumFileSizes('testFile1','testFile2')
 