

const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeople = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numPeople = Number(numberOfPeople.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billTotalInput.value)
    
    // get the tip from user & convert it into a percentage (divide by 100)
     // get the total tip amount
    const per = bill * Number(tipInput.value) / 100
  
    // calculate the total (tip amount + bill)
    
    // calculate the per person total (total divided by number of people)
    const total = (per + bill)/ numPeople
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerText = total.toFixed(2)
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numPeople += 1

  
    // update the DOM with the new number of people
    
    numberOfPeople.innerText = numPeople
    // calculate the bill based on the new number of people
    calculateBill()  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (numPeople == 1){
        return
    }
    
    // decrement the amount of people
    numPeople -= 1
  
    // update the DOM with the new number of people
    numberOfPeople.innerText = numPeople
  
  
    // calculate the bill based on the new number of people
    calculateBill()
  }