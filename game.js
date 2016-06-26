var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
var choicecompulsory= ["paper", "scissors", "rock"];
var i;
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare= function(choice1, choice2){

  if(choice1==choice2){
    return "The result is a tie!"
  }
  else if(choice1=="rock" && choice2=="scissors" || choice1=="scissors" && choice2=="rock"  ) {
    return "Rock wins";
  }
  else if(choice1=="scissors" && choice2=="paper" || choice1=="paper" && choice2=="scissors"){
    return "Scissor Wins";
  }
  else if(choice1=="rock" && choice2=="paper" || choice1=="paper" && choice2=="rock"){
    return "paper Wins";
  }
  for(i=0;i<choicecompulsory.length;i++){
    if(choice1!= choicecompulsory[i])
    {
      console.log();
    }

  }
  console.log("Sorry wrong selection");
};


compare(userChoice, computerChoice);
