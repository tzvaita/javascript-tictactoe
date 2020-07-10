let boxCount = 0;
let gameBoard = {
  Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

let resultElement = document.getElementById("gameResult");
const originTable = document.getElementById("board").innerHTML;

function resetGame() {
  boxCount = 0;
  gameBoard = {
    Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
  resultElement.innerHTML = "";
  document.getElementById("board").innerHTML = originTable;
}

function checkStatus(arr, player) {
  if (
    (arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    resultElement.innerHTML = `${player} wins`;
    document.querySelector(".result-popup").style.display = "flex";
  } else if (boxCount == 9) {
    resultElement.innerHTML = "Game Draw";
    document.querySelector(".result-popup").style.display = "flex";
  } else {
    return "Error";
  }
}

let mark = "X";
function markElement(el, p) {
  boxCount++;
  el.innerHTML = mark;
  gameBoard[p][el.id - 1] = mark;
  mark == "X" ? (mark = "O") : (mark = "X");
  checkStatus(gameBoard[p], p);
  console.log(gameBoard);
}

function displayController(p1, p2) {
  let player = p1;
  let boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  boxes.map((i) => {
    let target = document.getElementById(i);
    target.addEventListener(
      "click",
      (e) => {
        let box = e.target.id;
        let el = document.getElementById(box);
        markElement(el, player);
        player == p1 ? (player = p2) : (player = p1);
      },
      { once: true }
    );
  });
}

function updatePlayers(p1, p2) {
  gameBoard[p1] = gameBoard["Player1"];
  gameBoard[p2] = gameBoard["Player2"];
  delete gameBoard["Player1"];
  delete gameBoard["Player2"];
}

function startGame() {
  let contButton = document.getElementById("continue-btn");
  contButton.addEventListener("click", () => {
    document.querySelector(".player-popup").style.display = "none";
    let firstPlayer = document.getElementById("firstPlayer").value || "Player1";
    let secondPlayer =
      document.getElementById("secondPlayer").value || "Player2";
    if (firstPlayer != "Player1" || secondPlayer != "Player2") {
      updatePlayers(firstPlayer, secondPlayer);
    }
    displayController(firstPlayer, secondPlayer);
  });
}

startGame();

let playAgain = document.getElementById("playAgain");
playAgain.addEventListener("click", () => {
  resetGame();
  document.querySelector(".result-popup").style.display = "none";
  document.querySelector(".player-popup").style.display = "flex";
});

