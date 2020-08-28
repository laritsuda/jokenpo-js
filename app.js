//changing variables
let userScore = 0;
let computerScore = 0;

//score variables
const userScore_span = document.querySelector("#userScore");
const compScore_span = document.querySelector("#compScore");
const resultado_p = document.querySelector("#result");

//button variables
const paperButton_img = document.querySelector("#paperButton");
const rockButton_img = document.querySelector("#rockButton");
const scissorsButton_img = document.querySelector("#scissorsButton");


function game(userMove){
    possibleMoves = ["rock", "paper", "scissors"]
    random123 = Math.floor(Math.random() * 3);
    computerMove = possibleMoves[random123];

    switch(userMove + computerMove) {
        //empate
        case 'Rockrock':
        case 'Paperpaper':
        case 'Scissorsscissors':
        //vitória do usuário
        result.innerText = "You clicked " +userMove + ", and the Robot too! It is a tie! :/"
        break;
        case 'Rockpaper':
        case 'Paperscissors':
        case 'Scissorsrock':
        result.innerText = "You clicked "+userMove + ", the Robot clicked " + computerMove + ". Robot wins! :("
        computerScore++
        compScore_span.innerHTML = computerScore
        break;
        case 'Rockscissors':
        case 'Paperrock':
        case 'Scissorspaper':
        //derrota do usuário
        result.innerText = "You clicked " + userMove + ", the Robot clicked " + computerMove + ". You win :D !!!"
        userScore++
            userScore_span.innerHTML = userScore
            break;
        case 'restart' + computerMove:
            window.location.reload()
            break;
    }

}
function main() {
    restart.addEventListener("click", () => game('restart'))
    paperButton_img.addEventListener("click", () => game("Paper") )
    rockButton_img.addEventListener("click", () => game("Rock") )
    scissorsButton_img.addEventListener("click", () => game("Scissors") )
}

main();