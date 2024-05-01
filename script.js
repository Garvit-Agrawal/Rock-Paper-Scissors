let userScore=0;
let compScore=0;
let user_score=document.querySelector(".user-score");
let comp_score=document.querySelector(".comp-score");
let msg=document.querySelector(".msg-container");
let reset=document.querySelector(".reset");
let choices=document.querySelectorAll(".choice");

let getcomputerchoice=()=>{
    let options=["rock","paper","scissors"];
    let indx=Math.floor(Math.random()*3);
    return options[indx];
}
let playGame = (userchoice)=>{
    console.log("user choice is = ",userchoice);
    let compchoice=getcomputerchoice();
    console.log("computer choice is = ",compchoice);

    if(userchoice==compchoice)
    {
        console.log("Game is draw");
        msg.innerText="Game is Draw! play again";
        msg.style.backgroundColor="#081b31";
    }
    else
    {
        let userwin=true;
        if(userchoice=="rock")
        {
            userwin= compchoice=="paper"?false:true;
        }
        else if(userchoice=="paper")
        {
            userwin=compchoice=="rock"?true:false;
        }
        else
        {
            userwin=compchoice=="rock"?false:true;
        }

        if(userwin)
        {
            userScore++;
            user_score.innerText=userScore;
            msg.style.backgroundColor="green";
            console.log("Winner is user");
            msg.innerText="User Win";
        }
        else
        {
            compScore++;
            comp_score.innerText=compScore;
            msg.style.backgroundColor = "red";
            console.log("Winner is Computer");
            msg.innerText="Computer win";
        }
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playGame(userchoice);
    })
})

reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    user_score.innerText=userScore;
    comp_score.innerText=compScore;
    msg.style.backgroundColor="#081b31";
    msg.innerText="Play your move";
})