let boxCount = 0;
let gameBoard = {
  Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

const resultElement = document.getElementById('gameResult');
const originTable = document.getElementById('board').innerHTML;

function resetGame() {
  boxCount = 0;
  gameBoard = {
    Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
  resultElement.innerHTML = '';
  document.getElementById('board').innerHTML = originTable;
}

function checkStatus(arr, player) {
  if (
    (arr[0] === arr[1] && arr[1] === arr[2])
    || (arr[3] === arr[4] && arr[4] === arr[5])
    || (arr[6] === arr[7] && arr[7] === arr[8])
    || (arr[0] === arr[3] && arr[3] === arr[6])
    || (arr[1] === arr[4] && arr[4] === arr[7])
    || (arr[2] === arr[5] && arr[5] === arr[8])
    || (arr[0] === arr[4] && arr[4] === arr[8])
    || (arr[2] === arr[4] && arr[4] === arr[6])
  ) {
    resultElement.innerHTML = `${player} wins`;
    document.querySelector('.result-popup').style.display = 'flex';
  } else if (boxCount === 9) {
    resultElement.innerHTML = 'Game Draw';
    document.querySelector('.result-popup').style.display = 'flex';
  }

  return null;
}

let mark = 'X';
function markElement(el, p) {
  boxCount += 1;
  el.innerHTML = mark;
  gameBoard[p][el.id - 1] = mark;
  mark = mark === 'X' ? 'O' : 'X';
  checkStatus(gameBoard[p], p);
}

function displayController(p1, p2) {
  let player = p1;
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  boxes.map((i) => {
    const target = document.getElementById(i);
    return target.addEventListener(
      'click',
      (e) => {
        const box = e.target.id;
        const el = document.getElementById(box);
        markElement(el, player);
        player = player === p1 ? p2 : p1;
      },
      { once: true },
    );
  });
}

function updatePlayers(p1, p2) {
  gameBoard[p1] = gameBoard.Player1;
  gameBoard[p2] = gameBoard.Player2;
  delete gameBoard.Player1;
  delete gameBoard.Player2;
}

function startGame() {
  const contButton = document.getElementById('continue-btn');
  contButton.addEventListener('click', () => {
    document.querySelector('.player-popup').style.display = 'none';
    const firstPlayer = document.getElementById('firstPlayer').value || 'Player1';
    const secondPlayer = document.getElementById('secondPlayer').value || 'Player2';
    if (firstPlayer !== 'Player1' || secondPlayer !== 'Player2') {
      updatePlayers(firstPlayer, secondPlayer);
    }
    displayController(firstPlayer, secondPlayer);
  });
}

startGame();

const playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click', () => {
  resetGame();
  document.querySelector('.result-popup').style.display = 'none';
  document.querySelector('.player-popup').style.display = 'flex';
});
