let totalScore = {
    'comuteScore':0,
    'playerScore':0
}

function showResult(score,compChoice,playerChoice){
    const sc = document.getElementById('player-score')
    sc.innerText = `Bot ${score['comuteScore']} - ${score['playerScore']} Player`
    const hands = document.getElementById('hands')
    hands.innerText = `${playerChoice} vs ${compChoice}`
    const res = document.getElementById('result')
    if (score == 0){
        res.innerText = "It's a draw"
    } else if (score == 1){
        res.innerText = 'You won!!'
    } else {
        res.innerText = 'You Lose'
    }
}
function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors']
    return choices[Math.floor(Math.random()*3)]
}

function getResult(playerChoice,compChoice){
    let score;
    if (playerChoice == compChoice){
        score = 0
    } else if(playerChoice == "Rock" && compChoice == "Scissors"){
        score = 1
    } else if(playerChoice == "Scissors" && compChoice == "Paper"){
        score = 1
    } else if(playerChoice == "Paper" && compChoice == "Rock"){
        score = 1
    }else{
        score = -1
    }
    return score
}


function onClickRPS(playerChoice){
    console.log({playerChoice})
    const compChoice = getComputerChoice()
    console.log({compChoice})
    const score = getResult(playerChoice,compChoice)
    console.log(score)
    if (score == 1){
        totalScore['playerScore'] += 1
    } else if (score == -1){
        totalScore['comuteScore'] += 1
    }
    console.log(totalScore)
    showResult(totalScore,compChoice,playerChoice)
    const endGm = document.getElementById('endGameButton')
    endGm.onclick = () => {
        endGame(totalScore)
    }

}


function playGame(){
    const choiceBtn = document.querySelectorAll('.rpsButton')
    choiceBtn.forEach(bt => {
        bt.onclick = () => onClickRPS(bt.value)
    })
}

function endGame(totalScore){
    totalScore['comuteScore'] = 0
    totalScore['playerScore'] = 0

    const plSc = document.getElementById('player-score')
    const hnd = document.getElementById('hands')
    const res = document.getElementById('result')

    plSc.innerText = ''
    hnd.innerText = ''
    res.innerText = ''
}
playGame()