inter = setInterval(rock, 600);
let hand;
// userName;
// function getData() {
//   name = document.getElementById('name').value;
//   postData();
// }
// function postData() {
//   document.getElementById('here').innerHTML = name;
// }





function start() {
  inter = setInterval(rock, 600);

}
function change() {
  changes = document.getElementById("computermove");
}
function rock() {
  change();
  changes.src = "paper.png";
  setTimeout(paper, 200);
  buttonDisable();
}

function paper() {
  change();
  changes.src = "scissor.png";
  setTimeout(scissor, 200);
}
function scissor() {
  change();
  changes.src = "rock.png";
}
function playerRock() {
  hand = '0';
  playerInput = 'rock';
  clearInterval(inter);
  changePlayer = document.getElementById("playermove");
  changePlayer.src = "rock.png";

  console.log(hand);
  setTimeout(computerImage, 500);
  buttonEnable();

}
function playerPaper() {
  hand = '1';
  playerInput = 'paper';
  clearInterval(inter);
  changePlayer = document.getElementById("playermove");
  changePlayer.src = "paper.png";

  console.log(hand);
  setTimeout(computerImage, 500);
  buttonEnable();

}
function playerScissor() {
  hand = '2';
  clearInterval(inter);
  playerInput = 'scissor';
  console.log(hand);
  changePlayer = document.getElementById("playermove");
  changePlayer.src = "scissor.png";

  setTimeout(computerImage, 500);
  buttonEnable();

}

function computerImage() {
  change();
  no = Math.floor(Math.random() * 10) % 3;
  num = no;
  console.log(no);
  switch (no) {
    case 0:
      changes.src = "rock.png";
      computerInput = 'rock';
      break;
    case 1:
      changes.src = "paper.png";
      computerInput = 'paper';
      break;
    case 2:
      changes.src = "scissor.png";
      computerInput = 'scissor';
      break;
  }
}

function declaration() {
  btn = document.getElementById("playAgain");
  btn1 = document.getElementById("rock");
  btn2 = document.getElementById("paper");
  btn3 = document.getElementById("scissor");
}
function buttonEnable() {
  declaration();
  btn.disabled = false;
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
  btn.style.backgroundColor = "royalblue";
  btn.style.boxShadow = "3px 3px rgba(0,0,0,0.6)";
  // btn1.style.backgroundColor = "#99c2ff";
  // btn2.style.backgroundColor = "#99c2ff";
  // btn3.style.backgroundColor = "#99c2ff";

  setTimeout(winner, 500)
}
function buttonDisable() {
  declaration();
  btn.disabled = !false;
  btn1.disabled = !true;
  btn2.disabled = !true;
  btn3.disabled = !true;
  btn.style.boxShadow = "0px 0px #000";
  // btn1.style.backgroundColor = "#35ADEC";
  // btn3.style.backgroundColor = "#35ADEC";
  // btn2.style.backgroundColor = "#35ADEC";
  btn.style.backgroundColor = "#99c2ff";
}
playerScore = 0;
computerScore = 0;

function winner() {
  b = window.localStorage.getItem('name');
  declareWinner = document.getElementById("declareWinner");
  if (playerInput == computerInput) {
    declareWinner.innerHTML = "Game Tie";
  }
  else {
    if (playerInput == 'rock') {
      if (computerInput == 'scissor') {
        declareWinner.innerHTML = b + " Wins";
        playerScore = Number(++playerScore);
      }
      else {
        declareWinner.innerHTML = "Computer Wins";
        computerScore = Number(++computerScore);
      }
    }
    if (playerInput == 'paper') {
      if (computerInput == 'rock') {
        declareWinner.innerHTML = b + " Wins";
        playerScore = Number(++playerScore);
      }
      else {
        declareWinner.innerHTML = "Computer Wins";
        computerScore = Number(++computerScore);
      }
    }
    if (playerInput == 'scissor') {
      if (computerInput == 'paper') {
        declareWinner.innerHTML = b + " Wins";
        playerScore = Number(++playerScore);
      }
      else {
        declareWinner.innerHTML = "Computer Wins";
        computerScore = Number(++computerScore);
      }
    }

  }


  // if (num == '0' && hand == '1' || num == '1' && hand == '2' || num == '2' && hand == '0') {
  //   declareWinner.innerHTML = "Player Wins";
  //   playerScore = Number(++playerScore);
  // }
  // if (hand == '0' && num == '1' || hand == '1' && num == '2' || hand == '2' && num == '0') {
  //   declareWinner.innerHTML = "Computer Wins";
  //   computerScore = Number(++computerScore);
  // }


  // if (num == 0 && hand == 2) {
  //   declareWinner.innerHTML = "Computer Wins";
  //   computerScore = Number(++computerScore);
  // }
  // if (num == 1 && hand == 0) {
  //   declareWinner.innerHTML = "Computer Wins";
  //   computerScore = Number(++computerScore);
  // }
  // if (num == 2 && hand == 1) {
  //   declareWinner.innerHTML = "Computer Wins";
  //   computerScore = Number(++computerScore);
  // }
  player1Score = document.getElementById("player1").innerHTML = playerScore;
  player2Score = document.getElementById("player2").innerHTML = computerScore;
}
