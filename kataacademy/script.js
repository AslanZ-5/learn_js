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
//   const obj = {
//     a: {
//       b: {
//         c: {
//           d: {'data':45}
//         }
//       }
//     }
//   }
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
// console.log(getStringCount(ee))
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
const data = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
    ];


    
const createUsernames = users => {
    users.forEach((el) => {
        el.username = el.firstName.toLowerCase() + el.lastName[0] + el.age
       
    }
    )
    return users
};
const processedData = createUsernames(data);



//Необходимо вернуть массив, содержащий самого старшего человека в списке. Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.

const data2 =[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]

const getMostSenior = humans => {
    maxAge = humans.reduce((p,v)=> {
        return ( p.age > v.age ? p.age : v.age );
    })
    return humans.filter((el)=> el.age == maxAge)
  };


// const result = getMostSenior(data2);
// console.log(result)


function invert (obj) {
    return Object.fromEntries(Object.entries(obj).map(item => item.reverse()))
}
// console.log(invert({ a: 1, b: 2, c: 3 }))


// const obj = { 4: { 1: [ { order: 1, name: 'Test 4' } ] }, 0: { 15: [ { order: 7, name: 'Test 1' }, { order: 3, name: 'Test 3' }, ], 12: [ { order: 1, name: 'Test 2' } ] } };
// const obj = {name:'aslan', profession:{language:"arabic", prog:{python:{django:"web",flw:"d3"}}}}
// const sortEntries = (obj) => {
//   return Array.isArray(obj)
//     ? obj.slice().sort((a, b) => a.order - b.order).map(({name}) => ({name}))
//     : Object.entries(obj).sort().flatMap(([, val]) => sortEntries(val));
// }

// const res = sortEntries(obj);
  
// console.log(res);





const getpaths = (obj) => {
    const paths = [];
    const fn = (obj, path = "") => {
        Object.entries(obj).forEach(([key, value]) => {
            if(value === null){
                value = 'null'
                if (typeof value === "object") {
                    return fn(value, `${path}.${key}`);
                }
            }
            console.log([key,value],'----',path)
            paths.push([`${path}.${key}`.slice(1), value]);
        });
    };
    fn(obj);
    return paths;
};
let a = {"name":"Misha","order":{"price":20,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":0.74},"withTaxes":{"vat":{"uah":30,"usd":1.11}}}}};

const createPath = (obj, [path, value]) => {
    path.split(".").reduce(
        (acc, key, index, array) => acc[key] = acc[key] || array[index + 1] ? {} : value, obj);
        
    return obj;
};
function deepEqual (obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null){
        
        return obj1 === obj2
    }else{
        const result = getpaths(obj1)
        .sort()
        .reduce((acc, item) => createPath(acc, item), {});
        const result2 = getpaths(obj2)
        .sort()
        .reduce((acc, item) => createPath(acc, item), {});
    
        console.log(JSON.stringify(result));
        console.log(JSON.stringify(result2));
        return JSON.stringify(result) === JSON.stringify(result2) 
    }
}
// let a = {"name":"Misha","order":{"price":20}};
// let b = {"name":"Misha","order":{"price":20,"extraField":null}} 
let obj =  {"name":"Misha","order":{"price":20}};
let obj2 =  {"order":{"price":20},"name":"Misha"};

let b = {"name":"Misha","order":{"count":1,"price":20,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withTaxes":{"vat":{"uah":30,"usd":1.11}},"withoutTaxes":{"usd":0.74,"uah":20}}}} 


// console.log(deepEqual(obj,obj2))

// const result1 = getpaths(obj1)
//     .sort(([, a], [, b]) => a - b)
//     .reduce((acc, item) => createPath(acc, item), {});
    
// console.log(JSON.stringify(result1, null, 4));
// const result = getpaths(obj)
//     .sort()
//     .reduce((acc, item) => createPath(acc, item), {});
// const result2 = getpaths(obj2)
//     .sort()
//     .reduce((acc, item) => createPath(acc, item), {});
    
// console.log(JSON.stringify(result));
// console.log(JSON.stringify(result2));

console.log('hhhhhhhhhh')

const sm = function(...args){
    return args.map((item)=> Number(item)?Number(item):0).reduce((ac,item)=> ac += item)}

// console.log(sm(1,2,3,5,'ds',6,true,false,))

// const cn = [1,2,4,4]
// console.log(cn.reduce((ac,i) => ac + i))


const merge = (...objects) => {
    const dic = {}
    objects.forEach(item =>Object.assign(dic,item))
    return dic
};
// console.log(merge(
//     {
//       name: 'John',
//       age: 22,
//     },
//     {
//       surname: 'Klein',
//       age: 20,
//       profession: 'student',
//     },
//     {
//       profession: 'frontend developer',
//       country: 'USA',
//     }
//   ))




const getLanguagesStatistic = (feedbacks) => {
    dic = {}
    for (let i = 0; i < feedbacks.length; i++){
        if (feedbacks[i].year == 2019){
            if (feedbacks[i].language in dic){
                dic[feedbacks[i].language] +=1
            }else{
                dic[feedbacks[i].language] = 1
            }
        }
    }
    return dic
};
const data1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
    { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
  ];

const objd = { name: 123 };
const datad= [1, 1, 1, NaN,2,NaN, 2, 2, 2, true, true, obj, obj, { name: 123 }];
// let unique = [...new Set(datad)];

// // This array counts duplicates [['a', 3], ['b', 2], ... , ['h', 3]] 
// let duplicates = unique.map(value => [value, mptrt.filter(str => str == value).length]);

// console.log(duplicates)


const rrrr = datad.reduce((acc,it) => acc.has(it)?acc.set(it,acc.get(it)+1):acc.set(it,1),new Map())

function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

function daysBetween(startDate, endDate) {
    if (startDate == null || endDate == 1){
        // throw new TypeError()
        console.log('this is error')
      }
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return Math.ceil((treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay);
}
// console.log(daysBetween(null,1))


function isEmptyWithProtos(obj) {
    for (let key in obj) {
        console.log(';')
        console.log(key)
     if (obj.hasOwnProperty(key)) {
       return false;
     }
   }
   return true;
 }
console.log(isEmptyWithProtos(objd))


/////////// LIBRARY
function Book(name, author, year) {
    this.name = name
    this.author = author
    this.year = year
    this.reader = null
}

Book.prototype.takeBook = function(name){
    if (this.reader == null){
            this.reader = name
            return true
    }else{
            return false
    }
}
Book.prototype.isAvailable = function(){
     return this.reader === null;
}
Book.prototype.returnBook = function(){
    if (this.reader === null){
            return false
    }
    this.reader = null
    return true
}
Book.prototype.changeBookName = function(newBookName){
    if (!newBookName){
            return false
    }
    this.name = newBookName
    return true
}
Book.prototype.changeAuthorName = function(newAuthorName){
    if (!newAuthorName){
            return false
    }
    this.author = newAuthorName
    return true
}
Book.prototype.getCurrentReader = function(){
    if (this.reader === null){
            return null
    }else{
            return this.reader
    }
}


////////// END OF LIBRARY

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };

  const me = Object.create(person);
  console.log(Date.now())


  ///////////////////////////////////////////////////////////////////////////


class Person {
    constructor(firstName, lastName, birthDay){
        this.firstName = firstName
        this.lastName = lastName
        
        this.birthDay = birthDay
    }
    getAge(){
        let today = new Date()
        let birthDate = new Date(this.birthDay)
         var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Account extends Person{
    constructor(person,balance){
        super()
        this.person = person
        this.balance = balance
        this.history = [] 
        
    }
    
    getAmount(){
        return this.balance
    }
    addMoney(amount,desc){
        this.balance += amount
        this.history.push({ timestamp: Date.now(), target: 'in', amount: amount, description: desc })
    }
    withdrawMoney(amount,desc){
        this.balance -= amount
        this.history.push({ timestamp: Date.now(), target: 'out', amount: amount, description: desc })
    }
    getAccountHistory(){
        return this.history
    }
  
}
Account.transfer = function(frm,to,amount){
          
        frm.withdrawMoney(amount,'transfer')
        to.addMoney(amount,'transfer')
    
    }



    class Calc {
        constructor(res=0){
            this.res = res
        }
        add(num){
                 
            return new Calc(this.res += num)
            }
        sub(num){
            return new Calc(this.res -= num)
            }
        result(){
            return this.num
        }
    
    }

    class EventEmitter {
        constructor() {
            this.events = {}
        }
    
        on(eventName, callback) {
            if (this.events[eventName]){
                this.events[eventName].push(callback);
            }else{
                this.events[eventName] = [callback]
            }
        }
    
        off(eventName, callback) {
           if (this.events[eventName]){
               this.events[eventName] = this.events[eventName].filter(a => a !== callback)
           }
        }
    
        once(eventName, callback) {
             const fn = clbck =>{
                let i = 0;
                 return function(){
              if (i==0){
                   i++
                   return clbck()
              }
         }
           
            }
            if (this.events[eventName]){
               this.events[eventName] = this.events[eventName].filter(a => a !== callback)
           }
            onceFn = fn(callback)
            this.events[eventName] = onceFn
    
        }
    
        emit(eventName, ...args) {
            if (this.events[eventName]){
                this.events[eventName].forEach(cb =>
                cb.apply(null,args)
                )
            }
        }
    }
    
    class BroadcastEventEmitter extends EventEmitter {
         emit(eventName, ...args) {
            if (eventName === '*'){
                for (let i in this.events ){
                    this.events[i].forEach(cb =>
                cb.apply(null,args)
                )
                }
                
            }
        }
    }

//     let emitter = new EventEmitter();

//     const multiplyTwo = (num) => num * 2;
//     const multiplyThree = (num) => num * 3;
    
//     const divideTwo = (num) => num / 2;
//     const divideThree = (num) => num / 3;

// emitter.on('division', divideTwo);
// emitter.once('division', divideThree);

// // Вызываем событие division - срабатывают обработчики divideTwo и divideThree
// emitter.emit('division', 6);


class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = 'ValidationError'
    }
}

function callJson(jsonst){
    let user = JSON.parse(jsonst)
    console.log(brrrrrrrrrrrrrrrrrrr)
    if (!user.name){
        throw new ValidationError('this object does not has a "name"!!!!!!')
    }
    if (!user.age){
        throw new ValidationError('this object does not has a "age"!!!!!!')

    }
}

try {
    callJson(`{ "name": "John", "age": 30 }`)
}
catch(err){
    if (err instanceof ValidationError){
        console.log(err.message)
    }else if(err instanceof SyntaxError){
        console.log('json syntax error!!!!!',err.message)
    }else{
        console.log(err.message)
    }
}

console.log('hi im still here')


class Mclass1{
    constructor(){
        this.name = this.constructor.name
    }
}
class Mycl extends Mclass1{

}
class Mycl2 extends Mycl{
    
}

//  CSV GENERATOR
function escapeCSV(val) {
    if (typeof val === 'string') {
      if (val.match(/(,|"|\n)/)) {
        val = val.replace(/"/g, '""');
        val = `"${val}"`;
      }
      return val;
    } else {
      return val;
    }
  }
  

function arrayToCsv(data) {
           if (typeof data == 'function'){
    throw new Error("Unexpected value")}
    return data.map((item) => {
     
      return item.map(m => {
       if (typeof m !== 'string' && typeof m !== 'number'){
    throw new Error("Unexpected value")}

    return escapeCSV(m)

      }).join(",");
    }).join('\n');
}
const localobj = {
    'bannerClick':5,
    'bannerClose': 1,
}
localStorage.setItem('counters',JSON.stringify(localobj))
// const locobj = localStorage.getItem('counters')
function incCounter(counterName){
    const locSt = localStorage.getItem('counters')
    console.log(locSt)
    try {
        JSON.parse(locSt)
    }catch{
        return
    }
    const propVal = JSON.parse(locSt)
    if (counterName in propVal){
        propVal[counterName] += 1
    }else{
        propVal[counterName] = 1
    }
    
    localStorage.setItem('counters',JSON.stringify(propVal))
   
    return propVal[counterName]
}

function incrementCounter(...counterName){
    console.log(counterName[0])
    if (counterName.length > 1 ){
        return counterName.map(incCounter)[0]
    }else{
       return  incCounter(counterName[0])
    }
    
    
    
}
// console.log(incrementCounter('bannerClick','bannerClose'))


class AttemptsLimitExceeded extends Error {
    constructor(){
      super('Max attempts limit exceed');
      this.name = 'AttemptsLimitExceeded';
    }
  }
  
  class NotFoundError extends Error {
    constructor(){
      super('Not found');
      this.name = 'NotFoundError';
    }
  }
  
  class TemporaryError extends Error {
    constructor(){
      super('TemporaryError');
      this.name = 'TemporaryError';
    }
  }
  
  function getRepeatableData(getData, key, maxRequestsNumber) {
    const fn = clbck =>{
        let i = 0;
         return function(){
      if (i==0){
           i++
           return clbck(key)
      }
 }
   
    }
    let onceFn = fn(getData)
    return onceFn(key)
    }

   
  
// const getData = (key) => 'hello' + key;
// const res = getRepeatableData(getData, '1', 3); 
// const res1 = getRepeatableData(getData, '12', 3); 
// const res2 = getRepeatableData(getData, '13', 3); 
// const res3 = getRepeatableData(getData, '14', 3); 
// console.log(res)
// console.log(res)
// console.log(res)
// console.log(res)

class ExecutionError extends Error {
    constructor(data,stack){
        super()
        this.name = 'ExecutionError'
        this.stack = stack
    }
    getArgData(){
        return this.stack
    }
}

function applyFn(dataArr, callback) {
    let succeeded = []
    let errors = []
    for (let i =0; i < dataArr.length;i++){
        try{
            succeeded.push(callback(dataArr[i]))
        }catch(e){
            let error = new ExecutionError(dataArr[i],e.stack)
            errors.push(error)
            throw error
        }
        
    }
    return {'succeeded':succeeded,'errors':errors}
}
// console.log(applyFn([1,2,3,4],(item)=> item *2))
// const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
// const dataArr = ['{"login":"login","password":"password"}', '{{}'];
// const callback = JSON.parse;
// const { succeeded, errors } = applyFn(dataArr, callback);

// console.log(succeeded,errors)
// console.log('-----Map-----')
// const map = new Map()
// let df = {'anem':32,'age':321}
// map.set(df,'khingzir')
// console.log(map.get(df))
// map.set('hi',32)
// map.set('h546i',3242)
// map.set('hdgweai',33422)
// for (let item of map.entries()){
//     console.log('d',item)
// }

