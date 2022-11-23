///     CAPITALIZE
const capitalize =  function(str){
    str = str.split(" ")
    str = str.map((item) => item[0].toUpperCase()+ item.toLowerCase().slice(1),str)
    // console.log(typeof str[0])
    return str.join(' ')

}


// capitalize('sOme RanDoM sTRING')


const reverseLongWords = (str) => {
    str = str.split(' ')
    console.log(str)
    str = str.map((item) => {
        if (item.length >= 5){
            return item.split('').reverse().join('')
        }
        return item
    })
    
    
    return str.join(' ')
    
}

// console.log(reverseLongWords('Hey wollef sroirraw'))


/// wrap in p tag
function wrapInParagraph(str){
    str = str.split('\n')
        return str.map((item) => {
           if(str[str.length - 1] == item ){
            return  `<p>${item}</p>`
           }
            return `<p>${item}</p>\n`
        }).join('')
    }



user = {
    'name': 'Aslan',
    lastName : 'Zurabov',
    'user-address': 'dddddd'
}
let first = ['a','a']
// console.log(name || '' || 0)
const  name = "aslan"
const  lastName = 'Zurabov'
const nick = 'muhazir'
const  username = 'asl'

const client = !!name ? name : !!lastName ? lastName: !!nick? nick : !!username? username :'You shoud have name!!!'
// console.log(client)


//Are brackets balanced

const bracketsBalance = (str) =>{
    arr = []
    breck_mp = {
        '}':'{',
        ')':'(',
        ']':'['
    }
    console.log(breck_mp)
    for (let i of str){
        if (i == '(' || i == '{' || i == '['){
            arr.push(i)
        }else{
            if (breck_mp[i] !== arr.pop()){
                return false
            }
        }
    }
    console.log(arr)
    return !arr.length
}

// console.log(bracketsBalance('(([]({})))'))


/// REPLACE ITEM

function replaceItemsClear(arr, item, replaceItem) {
    return arr.map((it) => {
        if (it == item){
            return 'a'
        }
        return it
    });
}
// console.log(replaceItemsClear([1,2,3,4,2], 2, 'a'))

//moveToStart
// Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало.

const moveToStart = (arr, n) => {
    let newArr = arr.slice();
     if (n >= newArr.length){
         return newArr
     }else{
        return newArr.splice(arr.length - n ,n).concat(newArr)
    //  return newArr.unshift(newArr.splice(arr.length - n ,n))
     }
};

// console.log(moveToStart([1,2,3,4,5,6,7,8],3))

const hasArrays = (arr) => {
    for ( let i = 0; i < arr.length; i++ ){
        if (Array.isArray(i)){
            return true
        }
        
    }
    return false

};

// console.log(hasArrays([false, true, [1, 2], {}, [], 1, 0, NaN]))




// RECURCION
let i = 0
let arr = [1,3, [3,7,2],43,6,[5,4,3] [433,43,2,[436,43,[4,64,[2]]]]]
const rec = (arr) =>{
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            rec(arr[i])
       }else{
           arr[i] += 'hi'
       }
   }
   return arr
    }
    

// console.log(rec(arr))


// sequenceSum


function sequenceSum (begin, end) {
    //code here
    console.log(end)

      if (typeof begin !== 'number' || typeof end !== 'number'){
        return NaN
    }
    if (begin === end){
        return begin
    }
    
    
     
   
}
// console.log(sequenceSum(1,5))








function optionalChaining (obj, chain) {
    //code here
          
         for ( let i of chain){
            if (obj[i]){
                obj = obj[i]
            }
            else{
                return obj[i]
            }
           
         }
         return obj
  
  }
  const obj = {
    a: {
      b: {
        c: {
          d: {'data':45}
        }
      }
    }
  }
// const chain = ["a",'r', "b", "c", "d",]
// console.log(optionalChaining(obj,chain))
const vv = ['1', '2', ['3']]
const ar = [2, 5, 7, [
    4, 5, 4, 7, [
       5, 7, 5
    ], 5,'d'
 ], 2];
 const ee = {
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4 ],
    fifth:  null,
    sixth:'3'
  }
//   console.log(Object.prototype.toString.call(vv).indexOf("Object")>-1);
  function getStringCount(obj) {
  
    if(!Array.isArray(obj)){
        obj = Object.values(obj)
    }
    let count = 0;
    for(let i = 0; i < obj.length; i++){
       if(Array.isArray(obj[i])){
          count += getStringCount(obj[i]);
          continue;
       }
       if(Object.prototype.toString.call(obj[i]).indexOf("Object")>-1){
        count += getStringCount(obj[i]);
       }
       
       if (typeof obj[i] == 'string'){
        count += 1;
       }
       
    };
    return count;
 
}
console.log(getStringCount(ee))
// function getStringCount(obj) {




///// function partion
function partition (array, callback) {
    let newArr = [[],[]]
    for (let i = 0; i < array.length; i++){
        if(callback(array[i])){
            console.log('---true')
            newArr[0].push(array[i])
        }else{
            console.log('--false')
            newArr[1].push(array[i])
        }
    }
    return newArr
  }
  const users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
  ];
// const numbers = [1,2,3,4,5,6];
// console.log(partition(users,(item) => item.active))
// console.log(partition(numbers,(item) => item > 3))
// console.log('hh')

const inRange = (a, b) => {
    return function (item){
        return item >= a && item<=6 && typeof item === 'number'
    }
};

const inArray = arr => {
    return function (item){
        return arr.includes(item)
    }
};

// let arr2 = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];
// console.log(arr.filter(inArray([1, 2,3, 10, undefined])));
// console.log(arr2.filter(inRange(3,6))); // [3, 4, 5, 6]


const createObjectCalculator = (initialA, initialB) => {
    
    const obj = {
        a:initialA,
        b:initialB,
        read: function(a,b){
            this.a = a
            this.b = b
        },
        sum: function(){
            return this.a + this.b
        },
        mul: function(){
            return this.a * this.b
        },
        
    }
   
    return  obj
};

// const calc = createObjectCalculator(2,3)
// console.log(calc.sum())
// calc.read(5,5)
// console.log(calc.mul())
