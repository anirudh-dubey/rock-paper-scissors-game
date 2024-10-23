let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const gencompChoice = () => {
    const option = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}
const drawGame = () => {
   
    msg.innerText="Game was draw! Play Again!";
    msg.style.backgroundColor = "#081b31 ";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        
        msg.innerText=`you lose!${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {  
    // console.log("user choice = ", userChoice)
    const compChoice = gencompChoice(); 
    // console.log("comp choice = ", compChoice)
    if (userChoice === compChoice) { // Paper ===Scissors
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //scissor,paper
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //rock,scissor
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            //rock,paper
           userWin= compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    });

});