let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's random choice
const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random() * options.length)];
};

// Function to display result message
const displayMessage = (text, color) => {
    msg.innerText = text;
    msg.style.backgroundColor = color;
};

// Function to handle a draw
const handleDraw = () => {
    displayMessage("It's a Draw! Play again!", "#081b31");
};

// Function to update scores and display winner
const updateScores = (userWon, userChoice, compChoice) => {
    if (userWon) {
        userScore++;
        userScorePara.innerText = userScore;
        displayMessage(`You Won! ${userChoice} beats ${compChoice}`, "green");
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        displayMessage(`You Lose! ${compChoice} beats ${userChoice}`, "red");
    }
};

// Function to determine the winner
const determineWinner = (userChoice) => {
    const compChoice = getComputerChoice();

    if (userChoice === compChoice) {
        handleDraw();
        return;
    }

    const winningConditions = {
        rock: "scissor",
        paper: "rock",
        scissor: "paper",
    };

    const userWon = winningConditions[userChoice] === compChoice;
    updateScores(userWon, userChoice, compChoice);
};

// Event listener for user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        determineWinner(userChoice);
    });
});
