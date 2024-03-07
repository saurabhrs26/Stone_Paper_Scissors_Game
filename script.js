let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}

const showWinner=(userWin,compChoice,userChoice)=>{
if(userWin)
{  
    userScore++;
    user_score.innerText=userScore;
    console.log(`You Win! ${userChoice} beats ${compChoice}`);
    msg.innerText=`You Win! your ${userChoice} beats  computer's ${compChoice}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    comp_score.innerText=compScore;
    console.log(`You Lose! ${compChoice} beats ${userChoice}`);
    msg.innerText=`You Lose! computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}
const playGame=(userChoice)=>{
   console.log("user Choice:", userChoice);
   let compChoice=genCompChoice(); 
   console.log("compChoice:"+compChoice)
   if(userChoice===compChoice)
   {
    drawGame();
   }
   else{
    let userWin=true;
    if(userChoice==="rock")
    {
        //computer can take either scissors or paper
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper") {
         //computer can take either rock or scissors
      userWin=compChoice==="scissors"?false:true;
    }
    else{
        //only scissors is remaining
        //comp can take rock and paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,compChoice,userChoice);
   }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame=()=>{
    console.log("Game was Drawn");
    msg.innerText="Game was Drawn";
    msg.style.backgroundColor="#27273a";
}