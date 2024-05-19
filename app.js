let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play again!!"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userchoice,compChoice) =>{
    if (userwin){
        console.log("You win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won !! Yours ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You loose");
        msg.innerText = `You Loose !! ${compChoice} beats Yours ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) =>{
    console.log("user choice",userchoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    if (userchoice === compChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if (userchoice === 'rock'){
            //scissor, paper
            userwin = compChoice === "paper" ? false : true;
        }else if(userchoice === 'paper'){
            userwin = compChoice === "scissor" ? false : true;
        }else {
            userwin = compChoice === "rock" ? false : true;   
        }
        showWinner(userwin , userchoice, compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})