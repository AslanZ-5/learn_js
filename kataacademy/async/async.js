
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
async function increaseSalary() {
  try{
   const employees = await api.getEmployees()
   const average = employees.reduce((ac,it) =>ac += it.salary,0) / employees.length
   let count = 0
   let budGet = 0
   for (const empl of employees){
     let salary = empl.salary
      const encSal = Math.floor(average>salary?1.2 * salary: 1.1 * salary)
      budGet += encSal - salary
 
     const setSal = await api.setEmployeeSalary(empl.id,encSal)
     console.log(setSal)
     let message = `Hello, ${setSal.name}! Congratulations, your new salary is ${setSal.salary}!`
     await api.notifyEmployee(setSal.id,message)
     count++
     
   }
   
   return count
  }catch(e){
     api.notifyAdmin(e)
  }
 }
// function increaseSalary() {
//   let minSalary;
//   return new Promise((resolve) => {
     
//      resolve(api.getEmployees())
//   }).then(data => {
//     minSalary = data.reduce(function (p, v) {
//       return ( p.salary < v.salary ? p : v );
//     },{})
//     return minSalary
//   }).then(data => {
//     return api.setEmployeeSalary(data.id, data.salary + ((20 * data.salary) / 100))
//   }).then(function(data){
//     minSalary = data
//     return true
//   }).then(function(){
//     let message = `Hello, ${minSalary.name}! Congratulations, your new salary is ${minSalary.salary}!`
//     return api.notifyEmployee(minSalary.id,message)
//   }
//   ).catch(err => api.notifyAdmin(err) )
// }

  
  const api = {
    _employees: [
      { id: 1, name: 'Alex', salary: 120000 },
      { id: 2, name: 'Fred', salary: 110000 },
      { id: 3, name: 'Bob', salary: 80000 },
    ],
  
    getEmployees() {
      return new Promise((resolve) => {
        resolve(this._employees.slice());
      });
    },
  
    setEmployeeSalary(employeeId, newSalary) {
      return new Promise((resolve) => {
        this._employees = this._employees.map((employee) =>
          employee.id !== employeeId
            ? employee
            : {
              ...employee,
              salary: newSalary,
            }
        );
        resolve(this._employees.find(({ id }) => id === employeeId));
      });
    },
  
    notifyEmployee(employeeId, text) {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
  
    notifyAdmin(error) {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
  
    setEmployees(newEmployees) {
      return new Promise((resolve) => {
        this._employees = newEmployees;
        resolve();
      });
    },
  };
  
  // increaseSalary()


  const resourse = 'https://jsonplaceholder.typicode.com/todos/'
  
function delay(time){
  return new Promise(resolve => {
    setTimeout(resolve,time)
  })
}

// function fetchTodos(){
//   return delay(3000).then(() => {
//     return fetch(resourse)
//   }
//   ).then(data => data.json())
// }

// fetchTodos().then(data => console.log(data))

async function asFetchTodos(){
  await delay(2000)
  const response = await fetch(resourse)
  const data = await response.json()
  console.log('async**',data)

}
// asFetchTodos()

const asy = document.querySelector('.async')
let i = 0;
function count(){
  do {
    i++;
    asy.innerHTML = i;
  } while (i % 1e3 != 0);

  if (i < 1e5) {
    queueMicrotask(count);
  }

}


count()