// function rt(val){
//     var answer = ''
//     switch (val){
//         case 1:
//             answer = "alfa";
//             break;
//         case 2:
//             answer = 'beta';
//             break;
//         case 3:
//             answer = 'gamma';
//             break;
//         case 4:
//             answer = 'delta';
//             break;
//         default:
//             answer = 'stuff'
//     }
//     return answer
// }

// console.log(rt(33))



// function switchStatement(val){
//     answer = ''
//     switch(val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = 'Low'
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = 'Mid'
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = 'High'
//             break;
//         default:
//             answer = "Undefined"
//     }
//     return answer
// }

// console.log(switchStatement(6))
// function doWhile(i){
//     do {
//         console.log('this is' + i)
//         i++
//     }while ( i < 10)
// }

// // random number
// function randomWholeNumber(n){
//     return Math.floor(Math.random() * n)
// }
// console.log(randomWholeNumber(10))

// function randomWholeNumberRange(min,max){
//     return Math.floor(Math.random() * (max - min)) + min
// }

// console.log('random number in range ', randomWholeNumberRange(100,150)  )


// function ternaryOp(a,b){
//     return a > b ? '"a" is bigger than "b"' : '"a" is less than "b"'
// }

// console.log(ternaryOp(54,6))



// function argS(...args){
//     return args
// }
// console.log(1,2,3,4)


// const  dict = {
//     tommorow : 32,
//     today: 44,
//     yesterday: {
//         max:10000,
//         min:1211211
//     }
// }

// const { today:newvar} = dict
// const { yesterday:{min:yestmin}} = dict


// console.log(newvar)
// console.log(yestmin)

// const  [z,x] = [1,2,3,4,5]

// const [, , ,r] = [1,2,3,4]
// console.log(z,x,r)

// // ordinary function
// function sum(a,b){
//     return a +  b
// }

// // arrow function
// const sum_ar = (a,b) => {
//     return a + b
// }
// // arrow function 2

// const sum_ar_2 = (a,b) => a+b


// console.log(` Ordinary function ${sum(4,5)}`)
// console.log(` Arrow function ${sum_ar(4,5)}`)
// console.log(` Arrow2 function ${sum_ar_2(4,5)}`)


// // arrays 
// let a = ['banana', 'orange', 'apple', 'strawberry']

// console.log('how indexOf() works', a.indexOf('orange'))
// console.log(a.length)


// const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: 10000,
//         liabilites: 50000,
//         netWorth: function() {
//             return this.assets - this.liabilites
//         },
//     }
//     return person.netWorth()
// }

// console.log('asigned function to keyword', introducer('Dave', 'White') )

// let dic = { 2:1,d:34}
// console.log(2 in dic)

function score( dice ) {
    points = 0
    dic = {}
    for (let i in dice){
      if (dice[i] in dic){
        dic[dice[i]] += 1
      }else{
        dic[dice[i]] = 1
  }
    }
    console.log(dic)
    if ('6' in dic && dic['6'] == 3){
      points += 600
    }
    if ('4' in dic && dic['4'] == 3){
      points += 400
    }
    if ('3' in dic && dic['3'] == 3){
      points += 300
    }
    if ('2' in dic && dic['2'] == 3){
      points += 200
    }
    if ('1' in dic){
      points += (Math.floor(dic['1']/ 3) * 1000) + ((dic[1] % 3) * 100)
    }
    if ('5' in dic){
      points += (Math.floor(dic['5']/ 3) * 1000) + ((dic[5] % 3) * 50)
    }
    return points
  }
  console.log(score([2, 4, 4, 5, 4]))