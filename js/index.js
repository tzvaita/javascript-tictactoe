let boxCount = 0;
let gameBoard = {
  Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9]
};

function checkStatus(arr, player){
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
    
    console.log(`${player} wins`);
    setTimeout(()=>{
      alert(`${player} wins`);
    },500)
    
  }
  else if (boxCount==9) {
    console.log("Game Draw");
    setTimeout(()=>{
      alert("Game Draw");
    },500)
  }
  else {
    return "Error";
  }
};

let mark = "X";
function markElement(el,p) {
  boxCount++;
  el.innerHTML = mark;
  gameBoard[p][el.id-1] = mark;
  mark == "X" ? (mark = "O") : (mark = "X");
  console.log (`${p} played ${mark} at ${el.id}`)
  console.log(gameBoard);
  checkStatus(gameBoard[p],p);
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

function updatePlayers(p1,p2){
  gameBoard[p1] = gameBoard["Player1"]
  gameBoard[p2] = gameBoard["Player2"]
  delete gameBoard["Player1"];
  delete gameBoard["Player2"];
}

function startGame() {
  let contButton = document.getElementById("continue-btn");
  contButton.addEventListener("click", () => {
    let firstPlayer = document.getElementById("firstPlayer").value || "Player1";
    let secondPlayer =
      document.getElementById("secondPlayer").value || "Player2";
      if(firstPlayer != "Player1" && secondPlayer != "Player2"){
        updatePlayers(firstPlayer,secondPlayer);
      }
    displayController(firstPlayer,secondPlayer);
    console.log(gameBoard);
  });  
}

startGame();