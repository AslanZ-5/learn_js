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
    

console.log(rec(arr))