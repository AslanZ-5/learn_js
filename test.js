function rt(val){
    var answer = ''
    switch (val){
        case 1:
            answer = "alfa";
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
        default:
            answer = 'stuff'
    }
    return answer
}

console.log(rt(33))



function switchStatement(val){
    answer = ''
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low'
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid'
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High'
            break;
        default:
            answer = "Undefined"
    }
    return answer
}

console.log(switchStatement(6))
function doWhile(i){
    do {
        console.log('this is' + i)
        i++
    }while ( i < 10)
}

// random number
function randomWholeNumber(n){
    return Math.floor(Math.random() * n)
}
console.log(randomWholeNumber(10))

function randomWholeNumberRange(min,max){
    return Math.floor(Math.random() * (max - min)) + min
}

console.log('random number in range ', randomWholeNumberRange(100,150)  )