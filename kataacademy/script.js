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
