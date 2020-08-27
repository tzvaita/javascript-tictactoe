/* eslint-disable no-undef */
import DOM from './view';

let boxCount = 0;
let gameBoard = {
  Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};
let mark = 'X';
const originTable = document.getElementById('board').innerHTML;

const game = (() => {
  const checkStatus = (arr, player) => {
    let result = null;
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
      result = `${player} wins`;
      DOM.showResult(result);
    } else if (boxCount === 9) {
      result = 'Game Draw';
      DOM.showResult(result);
    }
    return null;
  };

  const markElement = (el, p) => {
    boxCount += 1;
    el.innerHTML = mark;
    gameBoard[p][el.id - 1] = mark;
    mark = mark === 'X' ? 'O' : 'X';
    checkStatus(gameBoard[p], p);
  };

  const updatePlayers = (p1, p2) => {
    gameBoard[p1] = gameBoard.Player1;
    gameBoard[p2] = gameBoard.Player2;
    delete gameBoard.Player1;
    delete gameBoard.Player2;
  };

  const startGame = () => {
    const contButton = document.getElementById('continue-btn');
    contButton.addEventListener('click', () => {
      document.querySelector('.player-popup').style.display = 'none';
      const firstPlayer = document.getElementById('firstPlayer').value || 'Player1';
      const secondPlayer = document.getElementById('secondPlayer').value || 'Player2';
      if (firstPlayer !== 'Player1' || secondPlayer !== 'Player2') {
        updatePlayers(firstPlayer, secondPlayer);
      }
      DOM.displayController(firstPlayer, secondPlayer);
    });
  };

  const resetGame = () => {
    boxCount = 0;
    gameBoard = {
      Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    resultElement.innerHTML = '';
    document.getElementById('board').innerHTML = originTable;
  };

  return { startGame, markElement, resetGame };
})();

game.startGame();

export default game;