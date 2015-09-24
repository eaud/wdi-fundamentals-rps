////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
function getPlayerMove(move) {
    if (move != null) {
      return move;
    } else {
        return getInput();
    }
}

function getComputerMove(move) {
    if (move != null) {
      return move;
    } else {
        return randomPlay();
    }
//    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
      if (playerMove === computerMove) {
        winner = 'tie';
      }
      else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
        winner = 'player';
      }
      else {
        winner = 'computer';
      }
      return winner;
}


// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
// This function should continue to play Rock Paper Scissors until either the
// player or the computer has won five times.
// After each 'round', display some text in the console indicating who played
// what, who won, and what the current scoreboard looks like.
// For example,
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
      var playerMove = getPlayerMove(null);
      var computerMove = getComputerMove(null);
      var winRound = getWinner(playerMove, computerMove);
      if (winRound == 'player') {
        playerWins = playerWins + 1;
      } else if (winRound == 'computer') {
        computerWins = computerWins + 1;
      }
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
      console.log('This round\'s winner: ' + winRound);
      console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }


 /* YOUR CODE HERE */
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

playToFive();
