
const computerScore_p = document.getElementById("losses");
const playerScore_p = document.getElementById("wins");
const rounds = document.getElementById("rounds");
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');


  function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const compChoice= choice[Math.floor(Math.random() * choice.length)];
    return compChoice;
    }


  var computerScore = 0;
  var playerScore = 0;
  var round = 0;

  function game(playerChoice){
    const computerSelection = getComputerChoice();


    if (playerChoice === computerSelection ) {
        round++;
        document.getElementById('rounds').innerHTML = round;
        document.getElementById('result').innerHTML = "Draw!";

      } else if ( playerChoice === "Rock" && computerSelection === "Paper"){
          document.getElementById('result').innerHTML = "Lose! Paper covers rock.";
          computerScore++;
          document.getElementById('losses').innerHTML = computerScore;
          round++;
          document.getElementById('rounds').innerHTML = round;

      } else if ( playerChoice === "Rock" && computerSelection === "Scissors"){
         document.getElementById('result').innerHTML = "Win! Rock breaks scissors.";
         playerScore++;
         document.getElementById('wins').innerHTML = playerScore;
         round++;
         document.getElementById('rounds').innerHTML = round;

      } else if ( playerChoice === "Paper" && computerSelection === "Rock"){
          document.getElementById('result').innerHTML = "Win! Paper covers rock.";
          playerScore++;
          document.getElementById('wins').innerHTML = playerScore;
          round++;
          document.getElementById('rounds').innerHTML = round;

      } else if ( playerChoice === "Paper" && computerSelection === "Scissors"){
          document.getElementById('result').innerHTML = "Lose! Scissors cuts paper";
          computerScore++;
          document.getElementById('losses').innerHTML = computerScore;
          round++;
          document.getElementById('rounds').innerHTML = round;

      } else if ( playerChoice === "Scissors" && computerSelection === "Paper"){
          document.getElementById('result').innerHTML = "Win! Paper cuts scissors.";
          playerScore++;
          document.getElementById('wins').innerHTML = playerScore;
          round++;
          document.getElementById('rounds').innerHTML = round;

      } else if ( playerChoice === "Scissors" && computerSelection === "Rock"){
          document.getElementById('result').innerHTML = "Lose! Rock breaks scissors.";
          computerScore++;
          document.getElementById('losses').innerHTML = computerScore;
          round++;
          document.getElementById('rounds').innerHTML = round;
        }
        console.log("player: "+playerChoice)
        console.log("computer: "+computerSelection)
        console.log("player score: " +playerScore)
        console.log("computer score: " +computerScore)
        console.log("round: " +round)
        if(round === 5 ){
          if(playerScore > computerScore){
                document.getElementById('result').innerHTML = "Congratulations! You beat the machine!";
                  } else if (playerScore === computerScore){
                    document.getElementById('result').innerHTML = "Tie game!!";
                  } else {
                    document.getElementById('result').innerHTML = "The machine prevails! All is lost!";
                  }
                  document.getElementById('refresh').innerHTML= "Refresh to Play Again";
                }
}

rock_div.addEventListener("click", function(){
  game("Rock");
});

paper_div.addEventListener("click", function(){
  game("Paper");
});

scissors_div.addEventListener("click", function(){
  game("Scissors");
});
