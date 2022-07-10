// function for computer player that will randomly return rock paper or scissors
// 1. need a list of choices to choose from
gameChoices = ['rock','paper','scissors'];

// 2. computer to pick random choice from list and save as vairable

function computerSelection () {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}

function playerSelection (){
   choice = prompt("Please choose 'rock', 'paper' or 'scissors': ").toLowerCase()
   return choice
}


// console.log(computerSelection())
// function that plays a single game
    // 1. Creat function that takes 2 paramaters (playerSelection, computerSelection)
    // 2. Compare those two options and see which one wins. 
        // 2.1 inputs should be case sensitive
    // 3. Create a vairable (wlt) for wins, losses and ties
    // 4. increment wlt variable if there is a win loss or tie
    // 5. return string that says if you won or lost or tied


function round (playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
   console.log('Tie game')
   return result = 'tie'
} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
   console.log('You lose this round')
   return result = 'loss'
} else if (playerSelection == 'scissors' && computerSelection == 'rock') {
   console.log('You lose this round')
   return result = 'loss'
} else if (playerSelection == 'rock' && computerSelection == 'paper') {
   console.log('You lose this round')
   return result = 'loss'
} else {
   console.log('You win this round')
   return result = 'win'
}
}


        
// new function called game and call playRound to play 5 rounds and
    // 1. Create variable to hold number of games
numOfGames = 0
    // 2. play game
function game () {
   win = 0;
   loss = 0;
   tie = 0;
   while (numOfGames < 5) {
      round(playerSelection(), computerSelection())
      if (result === 'tie') {
         tie ++
      } else if (result === 'loss') {
         loss ++
      } else {
         win ++
      }
      numOfGames ++
   }
   console.log("Wins: " + win + '\nTies:' + tie + '\nLosses: ' + loss)
   
}

game()

    //  2.1 increment play game viarable each time.