class Car {
    constructor (name,color,speed){
        this.name = name
        this.color = color
        this.speed = speed
    }

    drive () {
        console.log('I drove 2 miles')
    }
    stop () {
        console.log( 'after i drove two miles stoped')
    }
}


class BankAccount {
    constructor (balance) {
        this._balance = balance
    }

    getBalance () {
        return this._balance
    }

    deposit (cash) {
        this._balance += cash
        console.log(`You'd successfully deposited $${cash} in cash. Your new balance is $${this.getBalance()}`)
    }

    withdraw (cash) {
        if (cash > this._balance){
            console.log("Your balance is not sufficient for this operation")
            return
        }
        this._balance -= cash
        console.log(`You'd successfully withdrawn $${cash} in cash. Your new balance is $${this.getBalance()}`)
    }
}

acc = new BankAccount(500)
// console.log(acc.getBalance())
// acc.deposit(1000)
// console.log(acc.getBalance())
// console.log(acc._balance)
// 

const withdrawInp = document.getElementById('withdrawInp')
const withdrawBtn = document.getElementById('withdraw')

const depositBtn = document.getElementById('deposit')

// withdrawBtn.onclick = () => {
//     acc.withdraw(Number(withdrawInp.value))
//     document.getElementById('myBalance').innerText = acc.getBalance()
// }

// depositBtn.onclick = () => {
//     acc.deposit(Number(withdrawInp.value))
//     document.getElementById('myBalance').innerText = acc.getBalance()
// }


withdrawBtn.addEventListener('click', () =>{
    acc.withdraw(Number(withdrawInp.value))
    document.getElementById('myBalance').innerText = acc.getBalance()
})

depositBtn.addEventListener('click', () =>{
    acc.deposit(Number(withdrawInp.value))
    document.getElementById('myBalance').innerText = acc.getBalance()
})

document.addEventListener('keydown', (e) => {
    console.log(e.key)
})



