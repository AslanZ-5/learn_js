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