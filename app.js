/************************************************
 * Game verison
 ************************************************/
var version = 'v1.0';
console.log( 'Game version: ' + version );

/************************************************
 * Screen settings
 ************************************************/
var h = window.innerHeight;

if( h <= 780 ) {
    document.getElementById("page-container").style.height = h * 0.78 + "px";
} else {
    document.getElementById("page-container").style.height = h * 0.86 + "px";
}

/************************************************
 * DOM cache
 ************************************************/
const playerScore = 0;
const computerScore = 0;

var playerChoice, compChoice;

var playerScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board-inner");
var result_p = document.getElementById("result");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

playerScore_span.textContent = playerScore;
computerScore_span.textContent = computerScore;

/************************************************
 * Event listeners + Player choice
 ************************************************/
rock.addEventListener('click', () => {
    game("rock");
});

paper.addEventListener('click', () => {
    game("paper");
});

scissors.addEventListener('click', () => {
    game("scissors");
});

/************************************************
 * Computer choice
 ************************************************/
function getCompChoice() {
    var choices = ["rock", "paper", "scissors"];
    return  choices[Math.floor( Math.random() * 3 )];
}

console.log( getCompChoice() );

/************************************************
 * Game
 ************************************************/
