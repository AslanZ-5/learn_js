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


  function firstNonRepeatingLetter(s) {
    s1 = s.toLowerCase()
    dic = {}
    for (i of s1){
      if ( i in dic){
        dic[i] +=1
      }else{
        dic[i] = 1
      }
    }
    st = ''
    for (i in dic){
      if (dic[i] == 1){
        st = i
        break
      }
      }
    if ( st.length > 0){
       for (i of s){
      if (i.toLowerCase() == st){
        console.log(i)
        st = i
      }
    }
    }
   return st
    }



    //The maximum sum value of ranges -- Simple version
    function maxSum(arr,range){
      const arrOfSum = range.map(function(item){
        return arr.slice(item[0],item[1]+1).reduce(
            (add,a) => add + a, 0)
    })
      console.log(arrOfSum)
      let max = arrOfSum[0];
      for (item of arrOfSum){
        if (item > max){
          max = item
        }
      }
      return max
      
      
    }