let firstPlayer = document.getElementById("firstPlayer");
let secondPlayer = document.getElementById("secondPlayer");
let boxCount = 0;

let gameBoard = {
  player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

function players(player1, player2) {
  this.player1 = player1 || "Player1";
  this.player2 = player2 || "Player2";
}

const winStatus = (arr, player) => {
  if (
    (arr[0] == arr[1]) == arr[2] ||
    (arr[3] == arr[4]) == arr[5] ||
    (arr[6] == arr[7]) == arr[8] ||
    (arr[0] == arr[3]) == arr[6] ||
    (arr[1] == arr[4]) == arr[7] ||
    (arr[2] == arr[5]) == arr[8] ||
    (arr[0] == arr[4]) == arr[8] ||
    (arr[2] == arr[4]) == arr[6]
  ) {
    alert(`${player} wins`);
    console.log(`${player} wins`);
  } else {
    alert("Game Draw");
    console.log("Game Draw");
  }
};

let mark = "X";
function markElement(el){
  el.innerHTML = mark;
  mark == "X" ? mark = "O" : mark = "X";
}


function displayController() {
  let table = document.getElementById("board");
  let mark = "O";
  table.addEventListener("click", (e) => {
    boxCount++;
    let box = e.target.id;
    let el = document.getElementById(box);
      markElement(el);
  });
}

displayController();