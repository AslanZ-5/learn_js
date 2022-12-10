const dd = document.querySelector('div')
const head = document.querySelector('h1')
const allchild = document.body.childNodes
const hh = document.querySelector('.HH')
const setClass = document.querySelector('div')
let input = document.querySelector('input');
let link =  hh.lastElementChild
console.log(link.href)
// атрибут => свойство
input.setAttribute('id', 'id');
console.log(input.id); // id (обновлено)

// свойство => атрибут
input.id = 'newId';
console.log(input.getAttribute('id')); // newId (обновлено)


  // атрибут => значение
  input.setAttribute('value', 'text');
  console.log(input.value); // text

  // свойство => атрибут
  input.value = 'newValue';
  console.log(input.getAttribute('value')); // text (не обновилось!)
// setClass.setAttribute('class','setted')
// setClass.setAttribute('name','setted')
// console.log(setClass.hasAttribute('name'))
// setClass.removeAttribute('name')
// console.dir(setClass)
// Element.prototype.sayHi = function(){
//     console.log('hi')
// }
// console.log(document.body.sayHi())
// console.dir(document.body)
// console.dir(setClass)