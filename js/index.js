
let gameBoard = {
  player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

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
function markElement(el,p) {
  el.innerHTML = mark;
  mark == "X" ? (mark = "O") : (mark = "X");
  console.log (`${p} played ${mark} at ${el.id}`)
}

function displayController(p1, p2) {
  let table = document.getElementById("board");
  let player = p1;
  table.addEventListener("click", (e) => {
    let box = e.target.id;
    let el = document.getElementById(box);
    markElement(el, player);
    player == p1 ? (player = p2) : (player = p1);
    console.log(`box:${box}`);
  });
}

function startGame() {
  let contButton = document.getElementById("continue-btn");
  contButton.addEventListener("click", () => {
    let firstPlayer = document.getElementById("firstPlayer").value || "Player1";
    let secondPlayer =
      document.getElementById("secondPlayer").value || "Player2";
    displayController(firstPlayer,secondPlayer);
  });  
}

startGame();