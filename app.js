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
var playerScore = 0;
var computerScore = 0;

var playerChoice, compChoice;

var playerScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board-inner");
var result_p = document.getElementById("result");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

function newScores() {
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore;
}

newScores();

/************************************************
 * Event listeners of Player choice
 ************************************************/
rock.addEventListener('click', () => {
    game("rock");
    setTimeout( () => {
        result_p.textContent = "Make your next move!",
        rock.style.removeProperty("animation")
    }, 3900 )
});

paper.addEventListener('click', () => {
    game("paper");
    setTimeout( () => {
        result_p.textContent = "Make your next move!",
        paper.style.removeProperty("animation")
    }, 3900 )
});

scissors.addEventListener('click', () => {
    game("scissors");    
    setTimeout( () => {
        result_p.textContent = "Make your next move!",
        scissors.style.removeProperty("animation")
    }, 3900 )
});

/************************************************
 * Computer choice
 ************************************************/
function getCompChoice() {
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor( Math.random() * 3 )];
}

/************************************************
 * Capitalize
 ************************************************/
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

/************************************************
 * Game
 ************************************************/
function game(playerChoice) {
    compChoice = getCompChoice();
    console.log( compChoice );

    switch (playerChoice + compChoice) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result_p.textContent = "It's a draw. No one gets point.";
            document.getElementById(playerChoice).style.cssText = "animation: blink2 1.1s; animation-iteration-count: 3;";
            break;
    
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            result_p.textContent = capitalizeFirstLetter(compChoice) + " beats Player's " + playerChoice + ". You lose.";
            document.getElementById(playerChoice).style.cssText = "animation: blink1 1.1s; animation-iteration-count: 3;";
            computerScore++;
            newScores();
            break;

        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result_p.textContent = "Player's " + playerChoice + " beats " + compChoice + ".\nYou win.";
            document.getElementById(playerChoice).style.cssText = "animation: blink3 1.1s; animation-iteration-count: 3;";
            playerScore++;
            newScores();
            break;
    }
};